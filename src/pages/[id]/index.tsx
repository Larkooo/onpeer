import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { gql, useQuery } from "@apollo/client";
import { PlaybackInfo, Player, ViewsMetrics } from "@livepeer/react";
import {
  EyeOpenIcon,
  HeartFilledIcon,
  HeartIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import {
  TransactionResult,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import { Contract } from "constants/contracts";
import moment from "moment";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import shortUUID, { uuid } from "short-uuid";
import { addApolloState, initializeApollo } from "src/lib/apolloClient";
import Head from "next/head";
import { livepeer, prisma } from "src/lib/providers";
import { Video } from "@prisma/client";
import { GetVideoLikesComments } from "./__generated__/GetVideoLikesComments";

const GET_VIDEO_LIKES_COMMENTS = gql`
  query GetVideoLikesComments($id: String!) {
    likes(where: { videoId: { equals: $id } }) {
      userId
      tx
    }

    comments(where: { videoId: { equals: $id } }) {
      id
      userId
      text
      tx
    }
  }
`;

const isUuid =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const uuidTranslator = shortUUID();

const formatAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

const Video = ({
  video,
  playbackInfo,
  metrics,
}: {
  video: Video;
  playbackInfo: PlaybackInfo;
  metrics: ViewsMetrics;
}) => {
  const router = useRouter();
  const id = router.query.id as string;
  const parsedId = id && (isUuid.test(id) ? id : uuidTranslator.toUUID(id));

  const address = useAddress();

  const { contract } = useContract(Contract.address!);
  const [pendingOp, setPendingOp] = useState<"like" | "undoLike" | "comment">();

  const { data, loading: loadingLikesComments } =
    useQuery<GetVideoLikesComments>(GET_VIDEO_LIKES_COMMENTS, {
      variables: {
        id: parsedId,
      },
    });

  useEffect(() => {
    if (!data) return;

    setLikes(data.likes);
    setComments(data.comments);
  }, [data]);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [likes, setLikes] = useState<any[]>([]);

  const handleOp = async (op: typeof pendingOp) => {
    if (op === "comment" && !comment) return;

    let args = [video.tokenId];
    if (op === "comment") args.push(comment);

    setPendingOp(op);
    contract!
      .call(op!, args)
      .then((tx: any) => {
        switch (op) {
          case "like":
            setLikes([...likes, { userId: address, tx: tx.receipt.transactionHash }]);
            break;
          case "undoLike":
            setLikes(likes.filter((l) => l.userId !== address));
            break;
          case "comment":
            setComments([
              ...comments,
              { id: tx.receipt.transactionHash, userId: address, text: comment, tx: tx.receipt.transactionHash },
            ]);
            setComment("");
            break;
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setPendingOp(undefined);
      });
  };

  return (
    <>
      <Head>
        <title>{video.title}</title>
        <meta name="description" content={video.description} />
        <meta
          property="og:url"
          content={`https://onpeer.vercel.app/${parsedId}`}
        />
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content={video.title} />
        <meta property="og:description" content={video.description} />
        <meta property="og:video:type" content="video/mp4" />
        <meta
          property="og:video:width"
          content={playbackInfo.meta.source[0].width?.toString()}
        />
        <meta
          property="og:video:height"
          content={playbackInfo.meta.source[0].height?.toString()}
        />

        <meta property="twitter:title" content={video.title} />
        <meta
          name="twitter:player:width"
          content={playbackInfo.meta.source[0].width?.toString()}
        />
        <meta
          name="twitter:player:height"
          content={playbackInfo.meta.source[0].height?.toString()}
        />
        <meta
          name="twitter:player:stream"
          content={playbackInfo.meta.source[0].url}
        />
        <meta
          name="twitter:player:stream:content_type"
          content={playbackInfo.meta.source[0].type.replace("html5/", "")}
        />

        <meta property="og:video" content={playbackInfo.meta.source[0].url} />
        <meta
          property="og:video:secure_url"
          content={playbackInfo.meta.source[0].url}
        />

        <link
          rel="alternate"
          type="application/json+oembed"
          href={`https://onpeer.vercel.app/api/oembed?id=${parsedId}`}
          title="onpeer"
        />
      </Head>
      <div className="flex flex-col items-center p-8 w-full">
        <div className="flex flex-col items-center gap-4 max-w-[1100px] min-w-[300px]">
          <div className="rounded-xl overflow-hidden">
            <Player playbackId={video.playbackId} />
          </div>
          <div className="flex flex-row gap-4 w-full">
            <Card className="flex-grow">
              <CardHeader>
                <CardTitle className="flex flex-row gap-4">
                  <span className="flex-grow">{video.title || "no title"}</span>
                  <div className="flex gap-1">
                    {loadingLikesComments ? (
                      <Skeleton className="w-6" />
                    ) : (
                      metrics.metrics[0].startViews
                    )}{" "}
                    <EyeOpenIcon />
                  </div>
                  <div
                    className={`${
                      (pendingOp === "like" || pendingOp === "undoLike") &&
                      "animate-pulse"
                    } flex gap-1`}
                  >
                    {loadingLikesComments ? (
                      <Skeleton className="w-6" />
                    ) : (
                      likes.length
                    )}{" "}
                    {likes.some((l) => l.userId === address) ||
                    pendingOp === "like" ? (
                      <HeartFilledIcon
                        onClick={() => handleOp("undoLike")}
                        className={`transition-all cursor-pointer hover:scale-150`}
                      />
                    ) : (
                      <HeartIcon
                        onClick={() => handleOp("like")}
                        className="transition-all cursor-pointer hover:scale-150"
                      />
                    )}
                  </div>
                </CardTitle>

                <CardDescription className="flex flex-row">
                  <span className="flex-grow">
                    {video.description || "no description"}
                  </span>
                  <span>{"posted " + moment().to(video.createdAt)}</span>
                </CardDescription>
              </CardHeader>
              {/* <CardContent>
                <span className="text-sm">posted {moment(data.video.createdAt).fromNow()}</span>
            </CardContent> */}
            </Card>
          </div>
          <Card className="w-full">
            <CardHeader className="flex sm:flex-row ">
              <div className="flex flex-col flex-grow">
                <CardTitle className=" ">Comments</CardTitle>
                <CardDescription>
                  Leaving a comment is irreversible. You cannot delete it
                  afterward.
                </CardDescription>
              </div>
              <div className="flex gap-4">
                <Input
                  disabled={pendingOp === "comment" || !video.tokenId}
                  value={comment}
                  onChange={(e) => setComment(e.currentTarget.value)}
                  type="text"
                  placeholder="you should do more of this and more of that..."
                />
                <Button
                  disabled={pendingOp === "comment" || !video.tokenId}
                  onClick={() => handleOp("comment")}
                >
                  {pendingOp === "comment" ? (
                    <UpdateIcon className="animate-spin" />
                  ) : (
                    "Comment"
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {comments.map(c => (
                <div className="flex flex-col" key={c.id}>
                  <span className="text-sm">{c.text}</span>
                  <span className="text-xs">by {c.userId}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  const parsedId = isUuid.test(id) ? id : uuidTranslator.toUUID(id);

  const video = await prisma.video.findUnique({
    where: {
      id: parsedId,
    },
  });

  if (!video) {
    return {
      notFound: true,
    };
  }

  const playbackInfo = await livepeer.getPlaybackInfo({
    playbackId: video.playbackId,
  });

  const metrics = await livepeer.getAssetMetrics({
    assetId: parsedId,
  });

  return {
    // NOTE: Make sure data is serializable
    props: JSON.parse(
      JSON.stringify({
        video,
        playbackInfo,
        metrics,
      })
    ),
  };
};

export default Video;
