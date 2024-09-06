import { FaAws } from "react-icons/fa6";
import { SiExpress, SiFramer, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiRender, SiTailwindcss, SiTypescript } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Projects = () => {
    const projects = [
        {
            title: "PaceDream - Property rentals & Booking Platform",
            tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiMongodb, SiExpress, SiNodedotjs, SiGit, FaAws],
            link: "https://pacedream.com",
            cover: "/pacedream.png",
            background: "bg-indigo-500"
        },
        {
            title: "Work Order System - Hospitality Maintenance Software Tracker",
            tech: [SiReact, SiJavascript, SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiNodedotjs, SiGit, SiRender],
            link: "https://work-orders.online/",
            cover: "/work-order.png",
            background: "bg-green-500"
        },
        {
            title: "PTC Hospitality Systems Ltd - IT Services Website",
            tech: [SiReact, SiJavascript, SiTailwindcss, SiGit, SiFramer, SiRender],
            link: "https://ptc.co.ke",
            cover: "/ptc.png",
            background: "bg-purple-500"
        },
        {
            title: "QR-Code Generator",
            tech: [SiJavascript, SiReact, SiTailwindcss, SiGit, SiRender],
            link: "https://qr-code-generator-3z0z.onrender.com/",
            cover: "/qr-code.png",
            background: "bg-rose-500"
        },
        {
            title: "Pet Website",
            tech: [SiJavascript, SiReact, SiTailwindcss, SiFramer, SiGit, SiRender],
            link: "https://petapp-react.onrender.com/",
            cover: "/pet-app.png",
            background: "bg-lime-500"
        },
        {
            title: "Nike Website",
            tech: [SiJavascript, SiReact, SiTailwindcss, SiGit, SiRender],
            link: "https://nike-app-0d05.onrender.com/",
            cover: "/nike-web.png",
            background: "bg-teal-500"
        },
        {
            title: "Data Finance Website",
            tech: [SiJavascript, SiReact, SiTailwindcss, SiFramer, SiGit, SiRender],
            link: "https://data-finance-react.onrender.com/",
            cover: "/finance.png",
            background: "bg-amber-500"
        },
    ];

    return (
        <div className="py-10 p-5 sm:p-0">
            <Title text="Projects 🎨" className="flex flex-col items-center justify-center rotate-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project) => {
                    return (
                        <Link href={project.link} target="_blank" key={project.title}>
                            <div className={cn("p-5 rounded-md", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                                    <div className="space-y-5">
                                        <h1 className="text-2xl">{project.title}</h1>
                                        <div className="flex items-center gap-5">
                                            {project.tech.map((Icon, index) => {
                                                return <Icon className="w-8 h-8" key={index}/>
                                            })}
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;