import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { gql, useQuery } from "@apollo/client";
import { LapTimerIcon } from "@radix-ui/react-icons";
import { useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
  const router = useRouter();

  useEffect(() => {
    if (!user?.address) {
      router.replace("/");
    }
  }, [user?.address]);

  return (
    <div className="flex flex-col p-4 gap-2">
      {data?.videos?.some((v: any) => !v.mintTx) && (
        <Alert variant="destructive">
          <LapTimerIcon className="h-6 w-6" />
          <div className="ml-2 mt-1">
            <AlertTitle className="">Important</AlertTitle>
            <AlertDescription className="text-xs">
              You have some videos that are going to be automatically purged soon.
            </AlertDescription>
          </div>
        </Alert>
      )}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Your videos</h1>
        <div className="grid sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-2">
          {loading ? new Array(8).fill(0).map((_, i) => <Card key={i}>
            <CardHeader>
              <Skeleton className="w-20 h-4"/>
              <Skeleton className="h-4"/>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20" />
            </CardContent>
          </Card>) : data?.videos.map((video: any) => (
            <VideoCard
              id={video.id}
              title={video.title}
              description={video.description}
              mintTx={video.mintTx}
              key={video.id}
              createdAt={video.createdAt}
              playbackId={video.playbackId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
