"use client";
import {getHomeBanner, getProjects, getSkills} from "@/sanity/sanity-utils";
import HomeBanner from "@/app/(site)/components/HomeBanner";
import Skills from "@/app/(site)/components/Skills";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

    const projects = await getProjects();
    const homeBanner = await getHomeBanner();
    const skills = await getSkills();

    return (
        <>
            <HomeBanner content={homeBanner}/>
            <Skills content={skills}/>
        </>

    )
}
