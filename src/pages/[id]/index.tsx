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
  CubeIcon,
  ExternalLinkIcon,
  EyeOpenIcon,
  HeartFilledIcon,
  HeartIcon,
  Link1Icon,
  Link2Icon,
  Pencil1Icon,
  Pencil2Icon,
  PersonIcon,
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
import { formatHash } from "src/lib/format";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoMetadataDialog from "src/components/VideoMetadataDialog";

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

  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);
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
            setLikes([
              ...likes,
              { userId: address, tx: tx.receipt.transactionHash },
            ]);
            break;
          case "undoLike":
            setLikes(likes.filter((l) => l.userId !== address));
            break;
          case "comment":
            setComments([
              ...comments,
              {
                id: tx.receipt.transactionHash,
                userId: address,
                text: comment,
                tx: tx.receipt.transactionHash,
              },
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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`https://onpeer.vercel.app/${parsedId}`}
        />
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:video:type"
          content={playbackInfo.meta.source[0].type.replace("html5/", "")}
        />
        <meta
          property="og:video:width"
          content={playbackInfo.meta.source[0].width?.toString()}
        />
        <meta
          property="og:video:height"
          content={playbackInfo.meta.source[0].height?.toString()}
        />

        <meta property="twitter:title" content={title} />
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
      <div className="flex flex-col items-center h-full justify-center p-8 w-full">
        <div className="flex flex-col 2xl:flex-row 2xl:max-h-[60vh] items-start gap-4 min-w-[300px]">
          <div className="flex flex-col flex-grow w-full gap-2 2xl:max-w-[900px]">
            <div className="rounded-xl overflow-hidden">
              <Player playbackId={video.playbackId} />
            </div>
            <Card className="">
              <CardHeader className="flex flex-row items-center px-6 py-3 gap-2">
                <div className="flex-grow">
                  <CardTitle className="text-sm flex items-center gap-1">
                    {formatAddress(video.authorId)}
                    <PersonIcon />
                  </CardTitle>
                  {/* transaction hash */}
                  <a
                    href={`${Contract.chain.explorers?.[0].url}/tx/${video.mintTx}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardDescription
                      style={{
                        marginTop: "0px",
                      }}
                      className="flex gap-1 items-center hover:underline"
                    >
                      {formatHash(video.mintTx!)} <ExternalLinkIcon />
                    </CardDescription>
                  </a>
                </div>
                <Button
                  className=""
                  variant="outline"
                  onClick={(e) => {
                    navigator.clipboard.writeText(
                      `https://onpeer.vercel.app/${id}`
                    );
                    e.currentTarget.children[0].animate(
                      {
                        transform: ["scale(1)", "scale(0.8)", "scale(1)"],
                      },
                      {
                        duration: 300,
                        easing: "ease-in-out",
                        direction: "alternate",
                        fill: "forwards",
                      }
                    );
                  }}
                >
                  <Link1Icon />
                </Button>
              </CardHeader>
            </Card>
          </div>

          <div className="flex flex-col flex-shrink h-full w-full gap-2 2xl:max-w-[40vw]">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex flex-row gap-4">
                  <span className="flex flex-grow gap-1">
                    {title || "no title"}
                    {video.authorId === address && (
                      <VideoMetadataDialog
                        button={
                          <Pencil1Icon className="cursor-pointer text-orange-600 transition-all hover:rotate-12 hover:scale-125" />
                        }
                        currentTitle={title}
                        currentDescription={description}
                        tokenId={video.tokenId!}
                        onUpdated={(title, description) => {
                          setTitle(title);
                          setDescription(description);
                        }}
                      />
                    )}
                  </span>
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
                    } flex gap-1 text-orange-600`}
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
                        className={`transition-all ${
                          pendingOp !== "undoLike" && pendingOp !== "like"
                            ? "cursor-pointer hover:scale-150"
                            : ""
                        }`}
                      />
                    ) : (
                      <HeartIcon
                        onClick={() => handleOp("like")}
                        className={`transition-all ${
                          pendingOp !== "undoLike"
                            ? "cursor-pointer hover:scale-150"
                            : ""
                        }`}
                      />
                    )}
                  </div>
                </CardTitle>

                <CardDescription className="flex flex-row">
                  <span className="flex-grow">
                    {description || "no description"}
                  </span>
                  <span>{"posted " + moment().to(video.createdAt)}</span>
                </CardDescription>
              </CardHeader>
              {/* <CardContent>
                <span className="text-sm">posted {moment(data.video.createdAt).fromNow()}</span>
            </CardContent> */}
            </Card>
            <Card className="h-full w-full max-h-full overflow-y-scroll whitespace-break-spaces">
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
                    <span
                      className={`${
                        pendingOp === "comment" ? "animate-pulse" : ""
                      }`}
                    >
                      Comment
                    </span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {comments.map((c) => (
                  <div
                    className="flex flex-col items-start w-full min-w-0"
                    key={c.id}
                  >
                    <span className="text-sm flex-grow">{c.text}</span>
                    <span className="text-xs font-semibold flex flex-row gap-1">
                      from{" "}
                      <span className="text-gray-500">
                        {formatAddress(c.userId)}
                      </span>{" "}
                      at
                      <a
                        className="flex flex-row gap-1 hover:underline"
                        href={`${Contract.chain.explorers?.[0].url}/tx/${c.tx}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
                          {formatHash(c.tx!)}
                        </span>
                        <ExternalLinkIcon />
                      </a>
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
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
