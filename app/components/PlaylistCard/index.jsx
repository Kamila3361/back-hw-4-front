import React, { useEffect, useRef, useState } from "react";
import { RiPlayFill } from "react-icons/ri";
import { RiPauseFill } from "react-icons/ri";
import Link from "next/link";

export const PlaylistsCard = ({ title, description, imageUrl, songUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div
      className="bg-main-lg rounded-lg p-4 hover:bg-main-lgHover transition-all group w-60"
    >
      <div className="mb-4 relative flex justify-center items-center">
        <img
          src={imageUrl}
          alt="Album"
          className="w-48 h-48 rounded-xl drop-shadow-2xl"
        />
        <audio
        ref={audioRef}
        src={songUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        />
        <button className="p-3 text-3xl bg-main-green rounded-full text-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out bg-[#65D46E] text-black"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <RiPauseFill />
          ):(
            <RiPlayFill />
          )}
          
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">{title}</h5>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="flex items-center mt-4 w-full">
        <span>{Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}</span>
        <input
          type="range"
          className="flex-1 mx-2"
          value={currentTime}
          max={duration}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />
        <span>{Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}</span>
      </div>
    </div>
  );
};
