"use client"

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Direct Bank Integration",
            content: (
                <div className="w-1/2 object-contain" >
                    <video className=" bg-transparent rounded-4xl" autoPlay muted loop src="/features/a1.mp4"></video>
                </div>
            ),
        },
        {
            title: "Smart Receipt Scanner",
            content: (
                <div className="w-1/2 object-contain" >
                    <video className=" bg-transparent rounded-4xl" autoPlay muted loop src="/features/a2.mp4"></video>
                </div>
            ),
        },
        {
            title: "Advanced Analytics ",
            content: (
                <div className="w-1/2 object-contain" >
                    <video className=" bg-transparent rounded-4xl" autoPlay muted loop src="/features/a3.mp4"></video>
                </div>
            ),
        },
        {
            title: "Multi-Account Support ",
            content: (
                <div className="w-1/2 object-contain" >
                    <video className=" bg-transparent rounded-4xl" autoPlay muted loop src="/features/a4.mp4"></video>
                </div>
            ),
        },


    ];
    return (
        <div className="relative w-full mx-auto overflow-clip " >
            <Timeline data={data} />
        </div>
    );
}
