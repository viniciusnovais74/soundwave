"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PlayerContextType, Track } from "./type";

export const PlayerContext = createContext({} as PlayerContextType);

export const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export function PlayerContextProvider({ children }: { children: React.ReactNode }) {

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds}`;
  };

  const [currentTrack, setCurrentTrack] = useState<Track>({} as Track);

  // Unifique currentTime y duration en un solo estado
  // para evitar problemas de sincronización
  // const [currentTime, setCurrentTime] = useState("");
  // const [duration, setDuration] = useState("");
  const [{ currentTime, duration }, setTime] = useState({ currentTime: "", duration: "" });

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(currentTrack.audioUrl);

    audio.addEventListener("loadedmetadata", () => {
      setTime({
        currentTime: formatTime(audio.currentTime),
        duration: formatTime(audio.duration),
      });
    });

    return () => {
      audio.removeEventListener("loadedmetadata", () => {
        setTime({
          currentTime: formatTime(audio.currentTime),
          duration: formatTime(audio.duration),
        });
      });
    }
  }, [currentTrack])

  useEffect(() => {
    const audio = new Audio(currentTrack.audioUrl);

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      console.log("cleanup");
      if (isPlaying)
        audio.pause();
    }
  }, [isPlaying])

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        currentTime,
        duration,
        isPlaying,
        setIsPlaying,
        setCurrentTrack,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
