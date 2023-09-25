import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Player, useAssetMetrics } from "@livepeer/react";
import { useAddress } from "@thirdweb-dev/react";

interface VideoCardProps {
  title: string;
  description: string;
  playbackId: string;
  views?: number;
  mintTx: string;
  createdAt: string;
}

const VideoCard = ({
  title,
  description,
  playbackId,
  views,
  mintTx,
  createdAt,
}: VideoCardProps) => {
  const address = useAddress();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pt-0 px-0">
        <video>
          <source src={`https://lp-playback.com/hls/${playbackId}/video`} />
        </video>
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
