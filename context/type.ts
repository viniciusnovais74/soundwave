export type PlayerContextType = {
  currentTrack: Track;
  currentTime: string;
  duration: string;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentTrack: (track: Track) => void;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  audioUrl: string;
}

