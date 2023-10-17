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
import { Player, useAssetMetrics, usePlaybackInfo } from "@livepeer/react";
import { ExclamationTriangleIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useAddress, useUser } from "@thirdweb-dev/react";
import MintDialog from "./MintDialog";
import { LegacyRef, Ref, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import shortUUID from "short-uuid";
import Link from "next/link";
import usePageLoad from "src/hooks/usePageLoad";
import ReactPlayer from "react-player";

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
  title: initialTitle,
  description: initialDescription,
  playbackId,
  views,
  mintTx,
  createdAt,
}: VideoCardProps) => {
  const video = useRef<ReactPlayer>();

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const { user } = useUser();
  const loading = usePageLoad();

  const toSign = (user?.data as any)?.mintSignatures?.[id];

  const playback = usePlaybackInfo({
    playbackId,
  });

  return (
    <div className="relative overflow-hidden">
      <div className="z-50 absolute top-4 right-4">
        <Tooltip>
          <TooltipTrigger>
            {toSign && (
              <MintDialog
                button={
                  <ExclamationTriangleIcon className="transition-all text-red-500 hover:text-red-300 hover:brightness-100" />
                }
                id={id}
                signature={toSign}
                onMinted={(title, description, txHash) => {
                  setTitle(title);
                  setDescription(description);
                }}
              />
            )}
          </TooltipTrigger>
          <TooltipContent>
            Mint this video to make it persistent.
          </TooltipContent>
        </Tooltip>
      </div>
      <Link href={shortUUID().fromUUID(id)}>
        <Card
          className={`relative transition-all hover:brightness-90 overflow-hidden ${
            loading ? "animate-pulse" : ""
          }`}
        >
          <CardHeader className="px-4 pb-0 pt-4">
            <CardTitle className="text-ellipsis  whitespace-nowrap overflow-hidden pr-5">
              {title || "no title"}
            </CardTitle>
            <CardDescription className="text-ellipsis  whitespace-nowrap overflow-hidden flex-wrap">
              {description || "no description"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-0 px-0 pt-2 relative">
            <div
              onMouseEnter={async () => {
                await video.current!.getInternalPlayer().play();
              }}
              // reset video
              onMouseLeave={async () => {
                video.current!.seekTo(0);
                await video.current!.getInternalPlayer().pause();
              }}
              className="flex h-40 object-center items-center justify-center bg-black/5"
            >
              <ReactPlayer
                ref={video as any}
                width="100%"
                height="100%"
                className="[&>video]:object-cover"
                muted
                url={playback.data?.meta?.source.map((s) => ({
                  src: s.url,
                }))}
              />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default VideoCard;
