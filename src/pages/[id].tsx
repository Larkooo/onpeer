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
import { useState } from "react";

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
        userId
        text
        tx
      }
    }
  }
`;

const Video = () => {
  const router = useRouter();
  const { id } = router.query;

  const address = useAddress();

  const { contract } = useContract(Contract.address!);
  const [sendingComment, setSendingComment] = useState(false);
  const [sendingLike, setSendingLike] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [likes, setLikes] = useState<any[]>([]);

  const { data, loading, error } = useQuery(GET_VIDEO, {
    variables: {
      id,
    },
    skip: !id,
    onCompleted: (data) => {
      setComments(data.video.comments);
      setLikes(data.video.likes);
    },
  });

  const handleComment = async () => {
    if (!comment) return;

    setSendingComment(true);
    contract!
      .call("comment", [data.video.tokenId, comment])
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
    <div className="flex flex-col items-center p-8 w-full">
      <div className="flex flex-col items-center gap-4 max-w-[1100px] min-w-[300px]">
        <Card>
          <CardHeader></CardHeader>
          <CardContent>
            <div className="rounded-xl overflow-hidden">
              {loading ? <Skeleton style={{
                width: "80vw",
                height: "40vh"
              }} /> : <Player playbackId={data?.video.playbackId} />}
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-row gap-4 w-full">
          <Card className="flex-grow">
            <CardHeader>
              {loading ? <Skeleton className="w-20 h-4" /> : <CardTitle>{data?.video.title}</CardTitle>}
              {loading ? <Skeleton className="w-56 h-4" /> : <CardDescription>{data?.video.description}</CardDescription>}
            </CardHeader>
            {/* <CardContent>
                <span className="text-sm">posted {moment(data.video.createdAt).fromNow()}</span>
            </CardContent> */}
          </Card>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="mb-2">
              Comments ({data?.video?.comments?.length})
            </CardTitle>
            <CardDescription>
              Leaving a comment is irreversible. You cannot delete it afterward.
            </CardDescription>
            <div className="flex w-full gap-4">
              <Input
                disabled={sendingComment}
                value={comment}
                onChange={(e) => setComment(e.currentTarget.value)}
                type="text"
                placeholder="i love your video"
              />
              <Button disabled={sendingComment} onClick={handleComment}>
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
              <div className="flex flex-col" key={c.userId}>
                <span className="text-sm">{c.text}</span>
                <span className="text-xs">by {c.userId}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Video;
