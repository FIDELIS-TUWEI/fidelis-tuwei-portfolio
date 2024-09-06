"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import { SiDocker, SiExpress, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiReactquery, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { DiRedis } from "react-icons/di";

const Skills = () => {
    const skills = [
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss
        },
        {
            text: "Redux-toolkit",
            Icon: SiRedux
        },
        {
            text: "React-Query",
            Icon: SiReactquery
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
        },
        {
            text: "Express",
            Icon: SiExpress
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs
        },
        {
            text: "Docker",
            Icon: SiDocker
        },
        {
            text: "MySQL",
            Icon: SiMysql
        },
        {
            text: "Git",
            Icon: SiGit
        },
        {
            text: "Javascript",
            Icon: SiJavascript
        },
        {
            text: "AWS",
            Icon: FaAws
        },
        {
            text: "Redis",
            Icon: DiRedis
        },
    ]
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title text="Skills 🧑🏻‍🔧" className="flex flex-col items-center justify-center -rotate-6" />
            <HoverEffect items={skills} />
        </div>
    )
}

export default Skills;