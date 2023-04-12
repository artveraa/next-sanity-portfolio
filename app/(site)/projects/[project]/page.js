"use client";
import {getProject} from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


export default async function Project({params}) {
    const slug = params.project;
    const project = await getProject(slug);
    return (
        <div>
            <header>
                <h1>{project.name}</h1>

                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    All projects
                </a>
            </header>

            <main>
                <PortableText value={project.content} />
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1080}
                    />
                )}

            </main>
        </div>
    );
}