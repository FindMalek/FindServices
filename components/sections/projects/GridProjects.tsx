"use client";

import { BiLogoSpotify, BiLogoPython } from "react-icons/bi";
import { SiFfmpeg } from "react-icons/si";

import Project from "@/components/sections/projects/Project";

const projects = [
  {
    name: "Syncify",
    description:
      "Syncify is an open-source application. It allows you to download your Spotify Playlists, Albums and Tracks with full meta-data.",
    icon: BiLogoSpotify,
    details: {
      about:
        "Syncify was created to allow users to download their Spotify Playlists, Albums and Tracks with full meta-data. It is an open-source application that is available on Windows, macOS and Linux. It is build with Python, FFMPEG and Spotify API.",
      tech: [
        {
          name: "Python",
          icon: BiLogoPython,
        },
        {
          name: "FFMPEG",
          icon: SiFfmpeg,
        },
        {
          name: "Spotify API",
          icon: BiLogoSpotify,
        },
      ],
      duration: 57,
      delivary: "On going",
      github: "https://github.com/FindMalek/Syncify",
    },
  },
  {
    name: "Syncify",
    description:
      "Syncify is an open-source application. It allows you to download your Spotify Playlists, Albums and Tracks with full meta-data.",
    icon: BiLogoSpotify,
    display: {
      type: "gif",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfc8JduHCa6i8oiz4a8oSNHyu4RM8VQPUatiQ9YioiJ-80oqV8vCyZKf-IjE-K7xLrhx8&usqp=CAU",
      alt: "A gif of Syncify application.",
      height: 9,
      width: 2320,
    },
    details: {
      about:
        "Syncify was created to allow users to download their Spotify Playlists, Albums and Tracks with full meta-data. It is an open-source application that is available on Windows, macOS and Linux. It is build with Python, FFMPEG and Spotify API.",
      tech: [
        {
          name: "Python",
          icon: BiLogoPython,
        },
        {
          name: "FFMPEG",
          icon: SiFfmpeg,
        },
        {
          name: "Spotify API",
          icon: BiLogoSpotify,
        },
      ],
      duration: 57,
      delivary: "On going",
      github: "https://github.com/FindMalek/Syncify",
    },
  },
  {
    name: "Syncify",
    description:
      "Syncify is an open-source application. It allows you to download your Spotify Playlists, Albums and Tracks with full meta-data.",
    icon: BiLogoSpotify,
    display: {
      type: "gif",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfc8JduHCa6i8oiz4a8oSNHyu4RM8VQPUatiQ9YioiJ-80oqV8vCyZKf-IjE-K7xLrhx8&usqp=CAU",
      alt: "A gif of Syncify application.",
      height: 9,
      width: 2320,
    },
    details: {
      about:
        "Syncify was created to allow users to download their Spotify Playlists, Albums and Tracks with full meta-data. It is an open-source application that is available on Windows, macOS and Linux. It is build with Python, FFMPEG and Spotify API.",
      tech: [
        {
          name: "Python",
          icon: BiLogoPython,
        },
        {
          name: "FFMPEG",
          icon: SiFfmpeg,
        },
        {
          name: "Spotify API",
          icon: BiLogoSpotify,
        },
      ],
      duration: 57,
      delivary: "On going",
      github: "https://github.com/FindMalek/Syncify",
    },
  },
  {
    name: "Syncify",
    description:
      "Syncify is an open-source application. It allows you to download your Spotify Playlists, Albums and Tracks with full meta-data.",
    icon: BiLogoSpotify,
    display: {
      type: "gif",
      src: "https://i.pinimg.com/originals/68/7c/ea/687cea8aabd579611223b9f6332f1cbb.gif",
      alt: "A gif of Syncify application.",
      height: 2.78,
      width: 500,
    },
    details: {
      about:
        "Syncify was created to allow users to download their Spotify Playlists, Albums and Tracks with full meta-data. It is an open-source application that is available on Windows, macOS and Linux. It is build with Python, FFMPEG and Spotify API.",
      tech: [
        {
          name: "Python",
          icon: BiLogoPython,
        },
        {
          name: "FFMPEG",
          icon: SiFfmpeg,
        },
        {
          name: "Spotify API",
          icon: BiLogoSpotify,
        },
      ],
      duration: 57,
      delivary: "On going",
      github: "https://github.com/FindMalek/Syncify",
    },
  },
];

export function GridProjects() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="mt-4 pt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        <div>
          {projects.slice(0, Math.ceil(projects.length / 2)).map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
        <div>
          {projects.slice(Math.ceil(projects.length / 2)).map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
