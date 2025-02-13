// 'use client';

import MediaPlayer from "@/components/MediaPlayer";
import TableMusic from "@/components/TableMusic";

// import MediaPlayer from "@/components/MediaPlayer";

// import { useContext, useEffect, useRef } from "react";
// import { PlayerContextType } from "@/context/type";
// import { PlayerContext } from "@/context/PlayerContext";

// export default function Home() {
//   const Player = useRef<HTMLAudioElement>(null);
//   const { currentTrack, isPlaying, setIsPlaying } = useContext(PlayerContext) as PlayerContextType;

//   useEffect(() => {
//     if (isPlaying && Player.current) {
//       Player.current.play().catch(error => console.warn("Playback error:", error));
//     } else {
//       Player.current?.pause();
//     }
//   }, [isPlaying]);

//   return (
//     <div>
//       <audio ref={Player} src={currentTrack.audioUrl} />
//       <button onClick={() => setIsPlaying(true)}>▶ Play</button>
//       <button onClick={() => setIsPlaying(false)}>⏸ Pause</button>
//     </div>
//   );
// }

export default function Home() {

  return (
    <div className="w-screen h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center mt-10">SoundWave</h1>
      <p className="text-center mt-5">A sua playlist de músicas favoritas sem anúncios.</p>
      <TableMusic />
      <MediaPlayer />
    </div>
  )
}

// "use client";
// import { useState, useEffect } from 'react';

// export default function Home() {
//     const [videos, setVideos] = useState([]);
//     const [playlistUrl, setPlaylistUrl] = useState('');
//     const [loading, setLoading] = useState(false);

//     const fetchPlaylist = async () => {
//         if (!playlistUrl) return;
//         setLoading(true);

//         try {
//             const res = await fetch(`/api/playlist?url=${encodeURIComponent(playlistUrl)}`);
//             const data = await res.json();
//             setVideos(data.videos || []);
//         } catch (error) {
//             console.error('Erro ao buscar a playlist:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">YouTube Playlist Fetcher</h1>
//             <input
//                 type="text"
//                 value={playlistUrl}
//                 onChange={e => setPlaylistUrl(e.target.value)}
//                 placeholder="Cole a URL da playlist"
//                 className="border p-2 w-full mb-2"
//             />
//             <button 
//                 onClick={fetchPlaylist}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 disabled={loading}
//             >
//                 {loading ? 'Carregando...' : 'Buscar Playlist'}
//             </button>

//             <ul className="mt-4">
//                 {videos.map(video => (
//                     <li key={video.videoId} className="border p-2 mb-2 flex items-center">
//                         <img 
//                             src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
//                             alt={video.title} 
//                             className="w-20 h-20 mr-4"
//                         />
//                         <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
//                             {video.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
