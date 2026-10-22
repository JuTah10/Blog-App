"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Trophy, Triangle } from 'lucide-react';

export default function Hackathons() {
    const hackathons = [
        {
            award: "1st Place – Solace Challenge",
            event: "uOttaHack 8",
            host: "University of Ottawa · Ottawa, ON",
            date: "JAN 2026",
            // Add bullet points here later, e.g. "Built an event-driven, multi-agent system on Solace Agent Mesh..."
            description: []
        }
    ]

    return (
        <motion.div
            id="hackathons"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <div className='flex items-center gap-4'>
                <h1 className='text-2xl md:text-4xl font-bold'>/ hackathons</h1>
                <hr className='hidden md:block w-[30%] mt-4' />
            </div>

            <div className='my-12 text-md md:text-lg space-y-10'>
                {hackathons.map((hack, index) => (
                    <motion.div
                        key={`${hack.event}-${hack.award}`}
                        className='space-y-4'
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1'>
                            <div className='space-y-1'>
                                <h2 className='flex items-center gap-2 text-xl md:text-2xl font-bold'>
                                    <Trophy className='size-5 md:size-6 flex-shrink-0' />
                                    <span>{hack.award}, {hack.event}</span>
                                </h2>
                                <p className='text-gray-500'>{hack.host}</p>
                            </div>
                            <p className='text-gray-500 sm:whitespace-nowrap'>{hack.date}</p>
                        </div>

                        {hack.description.length > 0 && (
                            <div className='space-y-3'>
                                {hack.description.map((line, i) => (
                                    <div key={i} className='flex gap-4'>
                                        <Triangle className='size-2 flex-shrink-0 mt-2 rotate-90 fill-accent-foreground' />
                                        <span>{line}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
