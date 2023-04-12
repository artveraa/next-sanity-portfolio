"use client";
import {getPage} from "@/sanity/sanity-utils";
import {PortableText} from "@portabletext/react";

export default async function Page({ params }) {
    const page = await getPage(params.slug);

    return (
        <>
            <h1>{page.title}</h1>
            <PortableText value={page.content} />
        </>
    );

}