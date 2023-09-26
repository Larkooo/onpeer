import { gql, useQuery } from "@apollo/client";
import { Player } from "@livepeer/react";
import { useRouter } from "next/router";

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

  const { data, loading, error } = useQuery(GET_VIDEO, {
    variables: {
      id,
    },
    skip: !id,
  });

  if (!id) return null;

  console.log(data);

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-2/4">
        <Player
            playbackId={data?.video.playbackId}
        />
      </div>
      <div className="p-2">
        <h1 className="text-3xl">{data?.video.title}</h1>
        <text className="text-gray-600">{data?.video.description}</text>
      </div>
    </div>
  );
};

export default Video;
