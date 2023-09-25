import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { gql, useQuery } from "@apollo/client";
import { LapTimerIcon } from "@radix-ui/react-icons";
import { useUser } from "@thirdweb-dev/react";
import VideoCard from "src/components/VideoCard";

const GET_VIDEOS = gql`
  query GetVideos($authorId: String!) {
    videos(where: { authorId: { equals: $authorId } }) {
      id
      title
      description
      tokenId
      mintTx
      createdAt
      playbackId
    }
  }
`;

const Dashboard = () => {
    const { user } = useUser();
  const { data, loading, error } = useQuery(GET_VIDEOS, {
    variables: {
      authorId: user?.address,
    },
    skip: !user?.address,
  });


  return (
    <div className="flex flex-col p-4 gap-2">
      <Alert>
        <LapTimerIcon className="h-8 w-8" />
        <div className="ml-4">
          <AlertTitle className="text-2xl">Important</AlertTitle>
          <AlertDescription className="text-lg">
            You have 2 videos that are going to be automatically purged soon.
          </AlertDescription>
        </div>
      </Alert>
      <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold">Your videos</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {data?.videos.map((video: any) => <VideoCard
            title={video.title}
            description={video.description}
            mintTx={video.mintTx}
            key={video.id}
            createdAt={video.createdAt}
            playbackId={video.playbackId}
        />)}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
