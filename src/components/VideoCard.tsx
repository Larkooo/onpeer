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
import { Ref, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import shortUUID from "short-uuid";
import Link from "next/link";
import usePageLoad from "src/hooks/usePageLoad";

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
  const loading = usePageLoad();

  const toSign = (user?.data as any)?.mintSignatures?.[id];

  const playback = usePlaybackInfo({
    playbackId,
  });

  return (
    <Link href={shortUUID().fromUUID(id)}>
      <div className="relative">
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
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              Mint this video to make it persistent.
            </TooltipContent>
          </Tooltip>
        </div>
        <Card
          className={`relative transition-all hover:brightness-90 overflow-hidden ${
            loading ? "animate-pulse" : ""
          }`}
        >
          <CardHeader className="px-4 pb-0 pt-4">
            <CardTitle className="text-ellipsis  whitespace-nowrap overflow-hidden pr-3">
              {title || "no title"}
            </CardTitle>
            <CardDescription className="text-ellipsis  whitespace-nowrap overflow-hidden flex-wrap">
              {description || "no description"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-0 px-0 pt-2 relative">
            <div className="flex h-40 items-center justify-center bg-black/5">
              <video
                // autoplay the video to load the first frame
                // we pause & mute it afterwards
                autoPlay
                onLoad={async (e) => {
                  await e.currentTarget.pause();
                }}

                // play video on hover
                onMouseEnter={async (e) => {
                  e.currentTarget.muted = true;
                  await e.currentTarget.play();
                }}
                // reset video
                onMouseLeave={async (e) => {
                  e.currentTarget.currentTime = 0;
                  await e.currentTarget.pause();
                }}
                className="h-full w-full object-cover"
              >
                <source
                  src={playback.data?.meta.source[0].url}
                  type={playback.data?.meta.source[0].type.replace(
                    "html5/",
                    ""
                  )}
                />
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export default VideoCard;
