"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Triangle } from 'lucide-react';



export default function Aboutme() {
    let x = 1;
    const recentLanguages = ["TypeScript", "Python", "Java", "Next.js / React", "Spring Boot", "Node.js / Express", "PostgreSQL", "Docker", "Jest / Playwright", "LLM APIs / MCP"]
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <div className='flex items-center gap-4'>
                <h1 className='text-2xl md:text-4xl font-bold'>/ about me</h1>
                <hr className='hidden md:block w-[30%] mt-4' />
            </div>

            <div className='my-12 text-md md:text-lg space-y-4'>
                <p>I'm a Computer Science student at Brock University with a focus on full-stack web development. Most recently I was a Software Developer at the Carleton Immersive Media Studio, where I built interactive public exhibits for Library and Archives Canada in Next.js and TypeScript. In January 2027 I'm joining RBC as a Network Security Automation Analyst Co-op.</p>
                <p>Here are some technologies I have been working with:</p>
                <div className='grid grid-cols-2 gap-x-8 gap-y-1 max-w-[460px]'>
                    {recentLanguages.map((language, index) => {
                        // if index is an odd number 
                        if (index % 2 === 0) {
                            return (
                                <motion.div
                                    key={language}
                                    className='flex items-center gap-2 whitespace-nowrap'
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.0, delay: index * 0.1, ease: "easeOut" }} // 1
                                >
                                    <Triangle className='rotate-90 size-2 fill-accent-foreground' />
                                    <span>{language}</span>
                                </motion.div>
                            )

                        }
                        else { //even
                            return (
                                <motion.div
                                    key={language}
                                    className='flex items-center gap-2 whitespace-nowrap'
                                    initial={{ opacity: 0, y: 200 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.0, delay: (index - 1) * 0.1, ease: "easeOut" }} // 1
                                >
                                    <Triangle className='rotate-90 size-2 fill-accent-foreground' />
                                    <span>{language}</span>
                                </motion.div>
                            )
                        }

                    })}
                </div>
                <p>When I’m not coding, I enjoy learning about AI, exploring new developer tools, and playing video games.</p>
            </div>

        </motion.div >
    )
}
