"use client";

import React, { useState } from "react";
import { Artistsection } from "./components/Artistsection";
import Header from "./components/Header";
import { Playlistsection } from "./components/PlaylistSection";
import Sidebar from "./components/Sidebar";
// import "./Home.css";
import { Footer } from "./components/footer";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen text-gray-300">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="bg-custom-section pt-28 md:pl-72 p-8 bg-black">
        <Artistsection></Artistsection>
        <Playlistsection></Playlistsection>
        <Footer></Footer>
      </div>
    </div>
  );
};