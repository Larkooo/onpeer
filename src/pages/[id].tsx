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
import { Player } from "@livepeer/react";
import { UpdateIcon } from "@radix-ui/react-icons";
import {
  TransactionResult,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import { Contract } from "constants/contracts";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import shortUUID, { uuid } from "short-uuid";
import { GetVideo } from "./__generated__/GetVideo";
import { addApolloState, initializeApollo } from "src/lib/apolloClient";
import Head from "next/head";

const GET_VIDEO = gql`
  query GetVideo($id: String!) {
    video(where: { id: $id }) {
      id
      title
      description
      tokenId
      mintTx
      createdAt
      playbackId
      author {
        id
      }
      likes {
        userId
      }
      comments {
        id
        userId
        text
        tx
      }
    }
  }
`;

const isUuid =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const uuidTranslator = shortUUID();

const formatAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

const Video = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const parsedId = id && (isUuid.test(id) ? id : uuidTranslator.toUUID(id));

  const address = useAddress();

  const { contract } = useContract(Contract.address!);
  const [sendingComment, setSendingComment] = useState(false);
  const [sendingLike, setSendingLike] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [likes, setLikes] = useState<any[]>([]);

  const { data, loading, error, updateQuery } = useQuery<GetVideo>(GET_VIDEO, {
    variables: {
      id: parsedId,
    },
    skip: !parsedId,
    onCompleted: (data) => {
      setComments(data.video!.comments);
      setLikes(data.video!.likes);
    },
  });

  const handleComment = async () => {
    if (!comment) return;

    setSendingComment(true);
    contract!
      .call("comment", [data!.video!.tokenId, comment])
      .then((tx: any) => {
        setComments((comments) => [
          ...comments,
          { userId: address, text: comment, tx: tx.receipt.transactionHash },
        ]);
        setComment("");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setSendingComment(false);
      });
  };

  return (
    <>
      <Head>
        <title>{data?.video?.title}</title>
        <meta name="description" content={data?.video?.description} />
        <meta property="og:title" content={data?.video?.title} />
        <meta property="og:description" content={data?.video?.description} />
        <meta property="twitter:title" content={data?.video?.title} />
        <meta
          property="twitter:description"
          content={data?.video?.description}
        />
        <meta
          property="og:site_name"
          content={`Onpeer - ${formatAddress(data!.video!.author!.id)}`}
        />
        <meta
          property="twitter:site"
          content={`Onpeer - ${formatAddress(data!.video!.author!.id)}`}
        />
        <meta name="twitter:player:width" content="720" />
        <meta name="twitter:player:height" content="480" />
        <meta
          name="twitter:player:stream"
          content={`https://lp-playback.com/hls/${data?.video?.playbackId}/video`}
        />
        <meta name="twitter:player:stream:content_type" content="video/mp4" />

        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:video"
          content={`https://lp-playback.com/hls/${data?.video?.playbackId}/video`}
        />
        <meta property="og:video:secure_url" content={`https://lp-playback.com/hls/${data?.video?.playbackId}/video`} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="720" />
        <meta property="og:video:height" content="480" />
        <meta
          property="og:video"
          content={`https://lp-playback.com/hls/${data?.video?.playbackId}/video`}
        />
      </Head>
      <div className="flex flex-col items-center p-8 w-full">
        <div className="flex flex-col items-center gap-4 max-w-[1100px] min-w-[300px]">
          <div className="rounded-xl overflow-hidden">
            {loading ? (
              <Skeleton
                style={{
                  width: "90vw",
                  maxWidth: "800px",
                  height: "40vh",
                }}
              />
            ) : (
              <Player playbackId={data?.video?.playbackId} />
            )}
          </div>
          <div className="flex flex-row gap-4 w-full">
            <Card className="flex-grow">
              <CardHeader>
                {loading ? (
                  <Skeleton className="w-20 h-4" />
                ) : (
                  <CardTitle>{data?.video?.title}</CardTitle>
                )}
                {loading ? (
                  <Skeleton className="w-56 h-4" />
                ) : (
                  <CardDescription>{data?.video?.description}</CardDescription>
                )}
              </CardHeader>
              {/* <CardContent>
                <span className="text-sm">posted {moment(data.video.createdAt).fromNow()}</span>
            </CardContent> */}
            </Card>
          </div>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center">
              <div className="flex flex-col flex-grow">
                <CardTitle className=" ">Comments</CardTitle>
                <CardDescription>
                  Leaving a comment is irreversible. You cannot delete it
                  afterward.
                </CardDescription>
              </div>
              <div className="flex gap-4">
                <Input
                  disabled={sendingComment || !data?.video?.tokenId}
                  value={comment}
                  onChange={(e) => setComment(e.currentTarget.value)}
                  type="text"
                  placeholder="you should do more of this and more of that..."
                />
                <Button
                  disabled={sendingComment || !data?.video?.tokenId}
                  onClick={handleComment}
                >
                  {sendingComment ? (
                    <UpdateIcon className="animate-spin" />
                  ) : (
                    "Comment"
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {comments.map((c: any) => (
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
  const client = initializeApollo();
  const parsedId = isUuid.test(id) ? id : uuidTranslator.toUUID(id);

  await client.query({
    query: GET_VIDEO,
    variables: {
      id: parsedId,
    },
  });

  return addApolloState(client, {
    props: {},
  });
};

export default Video;
