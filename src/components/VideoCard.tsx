import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Player, useAssetMetrics } from "@livepeer/react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useAddress, useUser } from "@thirdweb-dev/react";
import MintDialog from "./MintDialog";
import { Ref, useEffect, useRef } from "react";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  playbackId: string;
  views?: number;
  mintTx: string;
  createdAt: string;
}

const VideoCard = ({
  id,
  title,
  description,
  playbackId,
  views,
  mintTx,
  createdAt,
}: VideoCardProps) => {
  const { user } = useUser();
  const address = useAddress();

  const toSign = (user?.data as any)?.mintSignatures?.[id];
  console.log(toSign);

  return (
    <div className="text-start relative cursor-pointer">
      <div className="z-50 absolute top-4 right-4">
        <Tooltip>
          <TooltipTrigger>
            {toSign && <MintDialog
              button={
                <ExclamationTriangleIcon className="transition-all text-red-500 hover:text-red-300 hover:brightness-100" />
              }
              id={id}
              signature={toSign}
            />}
          </TooltipTrigger>
          <TooltipContent>
            Mint this video to make it persistent.
          </TooltipContent>
        </Tooltip>
      </div>
      <Card className="relative transition-all hover:brightness-90 overflow-hidden">
        <CardHeader className="px-4 border-b-2 pb-2 pt-4">
          <CardTitle className="text-ellipsis  whitespace-nowrap overflow-hidden pr-3">
            {title || "no title"}
          </CardTitle>
          <CardDescription className="text-ellipsis  whitespace-nowrap overflow-hidden flex-wrap">
            {description || "no description"}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0 px-0 pt-2">
          <video>
            <source src={`https://lp-playback.com/hls/${playbackId}/video`} />
          </video>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoCard;
