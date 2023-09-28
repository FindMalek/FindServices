"use client";

import {
  ChatBubbleIcon,
  EnvelopeIcon,
  UserIcon,
  UsersIcon,
} from "@/components/overall/Icons";

import Project from "@/components/sections/projects/Project";

const projects = [
  {
    href: "#",
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, consequat a velit. Morbi euismod...",
    icon: UserIcon,
  },
  {
    href: "#",
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, consequat a velit. Morbi euismod...",
    icon: UserIcon,
  },
  {
    href: "#",
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, consequat a velit. Morbi euismod...",
    icon: UserIcon,
  },
];

export function GridProjects() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className=" mt-4 grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.href} project={project} />
        ))}
      </div>
    </div>
  );
}