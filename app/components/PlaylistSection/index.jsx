import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { PlaylistsCard } from "../PlaylistCard";
import axiosInstance from "@/app/axios/axiosInstance";

export const Playlistsection = ({ title }) => {
  const [playlist, setPlaylist] = useState();

  const fetchSongs = async () => {
    try{
      const response = await axiosInstance.get("/song/allsongs");
      setPlaylist(response.data);
    } catch (err){
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-2xl font-bold text-white hover:underline">
          Какое то название плейлиста
        </Link>
        <Link
          href="/"
          className="text-sm font-bold tracking-[2px] hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="horizontal-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {playlist?.map((song, index) => (
          <PlaylistsCard
            key={index}
            title={song.name}
            description={song.singer}
            imageUrl={song.poster_location}
            songUrl={song.song_location}
          />
        ))}
      </div>
    </div>
  );
};
