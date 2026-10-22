"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { Triangle } from 'lucide-react';
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';

export default function Experience() {
    const [displayExperience, setDisplayExperience] = React.useState("RBC");
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 1000)
        return () => clearTimeout(timeout)
    }, [show])
    const experience = [
        {
            company: "RBC",
            title: "Network Security Automation Analyst Co-op @ Royal Bank of Canada",
            duration: "INCOMING · JAN 2027 - AUG 2027",
            description: [
                {
                    order: "rbc-first",
                    list: (
                        <RoughNotationGroup show={show}>
                            Incoming co-op on the
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                Network Security Site Reliability Engineering (GS)
                            </RoughNotation>
                            team in
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                Technology &amp; Operations
                            </RoughNotation>
                            at the Royal Bank of Canada.
                        </RoughNotationGroup>
                    )
                }
            ]
        },
        {
            company: "CIMS",
            title: "Software Developer @ Carleton Immersive Media Studio",
            duration: "APR 2026 - AUG 2026",
            description: [
                {
                    order: "cims2-first",
                    list: (
                        <RoughNotationGroup show={show}>
                            Engineered the front-end for the
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                Library and Archives Canada immersive vault
                            </RoughNotation>
                            (a 10×2 portrait video wall) in
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                Next.js, React, and TypeScript
                            </RoughNotation>
                            , locking the stage to the wall's native
                            <RoughNotation className="mx-1" type="box" color="currentColor" animationDelay={700} multiline={true}>
                                10,800 × 3,840
                            </RoughNotation>
                            resolution with a resize-driven CSS transform that auto-scales to any dev monitor, plus toggleable 5-/10-column layouts mapped to the physical panel hardware.
                        </RoughNotationGroup>
                    )
                },
                {
                    order: "cims2-second",
                    list: (
                        <RoughNotationGroup show={show}>
                            Prototyped
                            <RoughNotation className="mx-1" type="box" color="currentColor" animationDelay={700} multiline={true}>
                                four immersive interaction concepts
                            </RoughNotation>
                            for exhibiting archival records with low-risk capture: a before/after conservation wipe (UV/raking lighting over real
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700}>
                                NEF
                            </RoughNotation>
                            imagery), a 3D page-curl flipbook, an anaglyph/wiggle stereoscope, and a drag-to-rotate globe.
                        </RoughNotationGroup>
                    )
                },
                {
                    order: "cims2-third",
                    list: (
                        <RoughNotationGroup show={show}>
                            Built the
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                frontend unit-testing suite
                            </RoughNotation>
                            (
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                Jest + React Testing Library
                            </RoughNotation>
                            ) for a Next.js/React/TypeScript geospatial and BIM platform, adding
                            <RoughNotation className="mx-1" type="box" color="currentColor" animationDelay={700} multiline={true}>
                                200+ test cases across 30+ files
                            </RoughNotation>
                            spanning utilities, hooks, HTTP adapters, reducers, and form components, and caught a case-sensitivity bug in admin authorization that had silently misclassified permissions.
                        </RoughNotationGroup>
                    )
                },
                {
                    order: "cims2-fourth",
                    list: (
                        <RoughNotationGroup show={show}>
                            Defined a
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                behavior-driven test strategy
                            </RoughNotation>
                            (asserting each distinct behavior once instead of chasing line coverage), documented in a team TESTING.md guide, and isolated side-effectful hooks by mocking
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                fetch, SWR cache, and NextAuth
                            </RoughNotation>
                            .
                        </RoughNotationGroup>
                    )
                }
            ]
        },
        {
            company: "CIMS ",
            title: "Software Developer @ Carleton Immersive Media Studio",
            duration: "JAN 2026 - APR 2026",
            description: [
                {
                    order: "cims1-first",
                    list: (
                        <RoughNotationGroup show={show}>
                            Built an interactive touchscreen
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                media-wall exhibit for Library and Archives Canada
                            </RoughNotation>
                            in
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                Next.js, React, and TypeScript
                            </RoughNotation>
                            , guiding visitors through curated historical stories as an unattended, all-day public installation.
                        </RoughNotationGroup>
                    )
                },
                {
                    order: "cims1-second",
                    list: (
                        <RoughNotationGroup show={show}>
                            Shipped a visitor-participation feature ("Where is Home?") that records guests' home countries to a
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                serverless Postgres
                            </RoughNotation>
                            database and surfaces live aggregate statistics, backed by a scheduled
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700}>
                                cron job
                            </RoughNotation>
                            that auto-exports quarterly engagement analytics to
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700}>
                                Excel
                            </RoughNotation>
                            .
                        </RoughNotationGroup>
                    )
                },
                {
                    order: "cims1-third",
                    list: (
                        <RoughNotationGroup show={show}>
                            Designed a
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                screen-space clustering engine
                            </RoughNotation>
                            (grid bucketing + Union-Find) that reduced
                            <RoughNotation className="mx-1" type="box" color="currentColor" animationDelay={700} multiline={true}>
                                O(n²) comparisons to near-linear time
                            </RoughNotation>
                            , keeping the wall responsive while rendering thousands of points in real time.
                        </RoughNotationGroup>
                    )
                },
                {
                    order: "cims1-fourth",
                    list: (
                        <RoughNotationGroup show={show}>
                            Wrote
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700}>
                                Python
                            </RoughNotation>
                            scripts to
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                clean and reconcile historical Canadian census tables (Excel)
                            </RoughNotation>
                            spanning
                            <RoughNotation className="mx-1" type="box" color="currentColor" animationDelay={700} multiline={true}>
                                14 census years (1825–1926)
                            </RoughNotation>
                            , joining district populations to boundary geometries and normalizing them into
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                GeoJSON/PMTiles
                            </RoughNotation>
                            map layers (2,700+ district polygons) rendered on the wall's interactive
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700}>
                                MapLibre
                            </RoughNotation>
                            map.
                        </RoughNotationGroup>
                    )
                },
                {
                    order: "cims1-fifth",
                    list: (
                        <RoughNotationGroup show={show}>
                            Implemented
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                bilingual (EN/FR) localization
                            </RoughNotation>
                            ,
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700}>
                                kiosk-reliability
                            </RoughNotation>
                            behavior (idle-timeout that prompts then resets to home), and a
                            <RoughNotation className="mx-1" type="underline" color="currentColor" animationDelay={700} multiline={true}>
                                Sanity CMS
                            </RoughNotation>
                            integration so non-developers can edit exhibit content.
                        </RoughNotationGroup>
                    )
                }
            ]
        },
        {
            company: "BROCK",
            title: "Front-End Web Developer @ Brock University",
            duration: "SEP 2024 - PRESENT",
            description: [
                {
                    order: "first-first",
                    list: (
                        <RoughNotationGroup show={show}>
                            Increased student engagement and learning outcomes by developing and customizing interactive Brightspace (D2L) course features such as flash cards, accordions, tabs, quizzes, etc. for
                            <RoughNotation
                                className="mx-1"
                                type="box"
                                color="currentColor"
                                animationDelay={700}
                            >
                                3,000+
                            </RoughNotation>
                            students and instructors using
                            <RoughNotation
                                className="mx-1"
                                type="underline"
                                color="currentColor"
                                animationDelay={700}
                            >
                                React
                            </RoughNotation>
                            ,
                            <RoughNotation
                                className="mx-1"
                                type="underline"
                                color="currentColor"
                                animationDelay={700}
                            >
                                Tailwind CSS
                            </RoughNotation>
                            , and
                            <RoughNotation
                                className="mx-1"
                                type="underline"
                                color="currentColor"
                                animationDelay={700}
                                multiline={true}
                            >
                                modern web technologies
                            </RoughNotation>
                            .
                        </RoughNotationGroup>

                    )
                }
                ,

                {
                    order: "first-second",
                    list: (
                        <span key={"first-second"}>
                            <RoughNotationGroup show={show}>
                                Enhanced course functionality and user experience by
                                <RoughNotation
                                    className="mx-1"
                                    type="underline"
                                    color="currentColor"
                                    animationDelay={700}
                                >
                                    identifying
                                </RoughNotation>
                                ,
                                <RoughNotation
                                    className="mx-1"
                                    type="underline"
                                    color="currentColor"
                                    animationDelay={700}
                                >
                                    troubleshooting
                                </RoughNotation>
                                , and
                                <RoughNotation
                                    className="mx-1"
                                    type="underline"
                                    color="currentColor"
                                    animationDelay={700}
                                    multiline={true}
                                >
                                    resolving frontend issues
                                </RoughNotation>
                                in Brightspace for both students and faculty.
                            </RoughNotationGroup>
                        </span>
                    )
                }
            ]

        },
        {
            company: "BROCK ",
            title: "Administrative Technology Assistant @ Brock University",
            duration: "SEP 2024 - PRESENT",
            description: [
                {
                    order: "second-first",
                    list: (
                        <RoughNotationGroup show={show}>
                            Improved operational efficiency by implementing and maintaining key administrative features, such as user roles, authentication, email templates, digital tax form processing, etc. using
                            <RoughNotation
                                className="mx-1"
                                type="underline"
                                color="currentColor"
                                animationDelay={700}
                                multiline={true}
                            >
                                Modern Campus Destiny One
                            </RoughNotation>
                            , effectively
                            <RoughNotation
                                className="mx-1"
                                type="box"
                                color="currentColor"
                                animationDelay={700}
                                multiline
                            >
                                doubling workflow speed
                            </RoughNotation>
                            and
                            <RoughNotation
                                className="mx-1"
                                type="box"
                                color="currentColor"
                                animationDelay={700}
                                multiline
                            >
                                streamlining backend operations
                            </RoughNotation>
                            for the department.
                        </RoughNotationGroup>
                    )
                }
                ,
                {
                    order: "second-second",
                    list: (
                        <RoughNotationGroup show={show}>
                            Supported educational technology initiatives by coordinating with internal departments and external vendors to ensure smooth
                            <RoughNotation
                                className="mx-1"
                                type="underline"
                                color="currentColor"
                                animationDelay={700}
                                multiline={true}
                            >
                                project execution
                            </RoughNotation>
                            ,
                            <RoughNotation
                                className="mx-1"
                                type="underline"
                                color="currentColor"
                                animationDelay={700}
                                multiline={true}
                            >
                                system configuration
                            </RoughNotation>
                            , and
                            <RoughNotation
                                className="mx-1"
                                type="underline"
                                color="currentColor"
                                animationDelay={700}
                                multiline={true}
                            >
                                communication
                            </RoughNotation>
                            .
                        </RoughNotationGroup>
                    )
                }
            ]

        }
    ];
    const match = experience.find(((exp) => exp.company === displayExperience))
    const activeIndex = experience.findIndex(exp => exp.company === displayExperience);

    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='min-h-[400px]'

        >
            <div className='flex items-center gap-4'>
                <h1 className='text-2xl md:text-4xl font-bold'>/ experience</h1>
                <hr className='hidden md:block w-[30%] mt-4' />
            </div>
            <div className='sm:flex gap-10 my-12 text-md md:text-lg space-y-4 '>
                {/* Tabs */}
                <div className='relative flex flex-col border-r-2 space-y-4 '>
                    <motion.div
                        layoutId="active-indicator"
                        className="absolute right-0 w-0.5 h-9 bg-accent-foreground rounded"
                        style={{
                            top: `${activeIndex * 40}px`,
                            transition: 'top 0.3s ease',
                        }}
                    />
                    {experience.map((exp) => {
                        return (
                            <Button
                                key={exp.company}
                                variant="text"
                                color="inherit"
                                sx={{
                                    whiteSpace: "nowrap", whiteSpace: "nowrap",
                                    fontWeight: displayExperience === exp.company ? 'bold' : 'normal',
                                    color: displayExperience === exp.company ? '' : 'gray',
                                    pr: {
                                        xs: "50%",
                                        sm: "100px"
                                    },
                                    pl: {
                                        sm: "40px"
                                    },


                                }}
                                onClick={() => {
                                    setShow(false);
                                    setDisplayExperience(exp.company)
                                }}

                            >
                                {exp.company}
                            </Button>
                        )
                    })}
                </div>


                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <h1 className='text-xl md:text-2xl font-bold'>{match?.title}</h1>
                        <p className='text-gray-500'>{match?.duration}</p>
                    </div>
                    {match?.description.map((m, index) => {
                        return (
                            <motion.div
                                key={m.order}
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                                onViewportEnter={() => {
                                    setShow(false);
                                    const timeout = setTimeout(() => setShow(true), 1500)
                                    return () => clearTimeout(timeout)
                                }}
                            >
                                <motion.div
                                    className="flex gap-4"
                                    initial={{ opacity: 0, y: 200 }}
                                    viewport={{ once: true }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}

                                >
                                    <Triangle className="size-2 flex-shrink-0 mt-2 rotate-90 fill-accent-foreground" />
                                    <span>{m.list}</span>
                                </motion.div>
                            </motion.div>


                        )
                    })}

                </div>


            </div>
        </motion.div >
    )
}
