"use client";
import { useContext, useRef, useEffect, useState } from "react";
import { PlayerContextType } from "@/context/type";
import { PlayerContext } from "@/context/PlayerContext";
import { Slider } from "./ui/slider";

export default function MediaPlayer() {

  const { currentTrack, isPlaying, duration, setIsPlaying } = useContext(PlayerContext) as PlayerContextType;

  if (!currentTrack.id) return null

  const audio = new Audio(currentTrack.audioUrl);
  const [progress, setProgress] = useState(0);


  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!currentTrack) return null; // Evita erros caso currentTrack seja undefined

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full py-4 bg-[#181818] border-t border-stone-600/30 flex items-center justify-between px-4">
      {/* Informações da música */}
      <div id="music_name_and_artist" className="w-[30%] flex items-center">
        <img src={currentTrack.thumbnail} alt="cover" className="h-16 w-16 rounded-sm" />
        <div className="flex flex-col items-start justify-center gap-y-1 ml-3">
          <p className="text-white font-semibold text-[13px] lg:text-sm">{currentTrack.title || "Unknown Title"}</p>
          <p className="text-xs text-stone-400">{currentTrack.artist || "Unknown Artist"}</p>
        </div>
      </div>

      {/* Controles do player */}
      <div id="player_controls" className="w-[40%] flex flex-col items-center justify-center gap-x-2">
        <button onClick={togglePlay} className="h-8 w-8 p-1 bg-white hover:bg-gray-300 rounded-full">
          {isPlaying ? "⏸" : "▶"}
        </button>
        <div className="flex w-full items-center text-white gap-x-1 justify-center">
          <label>{audio.currentTime}</label>
          <Slider
            value={[progress]}
            max={audio.duration || 100}
            onChange={(val) => {
              if (audio) {
                audio.currentTime = val[0];
                setProgress(val[0]);
              }
            }}
            className="w-full"
          />
          <label>{duration}</label>
        </div>

      </div>

      <div className="w-[30%] flex items-center justify-end gap-x-3"></div>
    </div>
  );
}
