
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
    items,
    className,
    }: {
    items: {
        text: string;
        Icon: IconType;
    }[];
    className?: string;
    }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
        className={cn(
            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4  py-10",
            className
        )}
        >
        {items.map((item, idx) => {
            const Icon = item.Icon;
            return (
            <div
                key={item?.text}
                className="relative group  block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <AnimatePresence>
                    {hoveredIndex === idx && (
                    <motion.span
                        className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-lg"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                        }}
                        exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                        }}
                    />
                    )}
                </AnimatePresence>
                <div className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 ring-green-500 relative z-20 transition-all duration-500 cursor-pointer">
                    <div className="py-6 sm:py-8 z-50 relative space-y-4">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                        <p className="text-base sm:text-lg md:text-xl font-bold text-center text-gray-300 break-words">{item.text}</p>
                    </div>
                </div>
            </div>
        )})}
        </div>
    );
};
