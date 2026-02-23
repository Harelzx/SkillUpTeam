"use client";

import dynamic from "next/dynamic";
import { HeroComposition } from "@/remotion/HeroComposition";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

export default function RemotionPhonePlayer() {
  return (
    <Player
      component={HeroComposition}
      durationInFrames={480}
      fps={30}
      compositionWidth={260}
      compositionHeight={540}
      loop
      autoPlay
      style={{
        width: 260,
        height: 540,
        borderRadius: 40,
        overflow: "hidden",
      }}
      controls={false}
    />
  );
}
