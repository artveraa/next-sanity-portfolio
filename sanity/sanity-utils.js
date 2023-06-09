import {createClient} from 'next-sanity'
import groq from 'groq'
import clientConfig from "@/sanity/config/client-config";

export async function getProjects() {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"] {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        }`
    )
}

export async function getProject(slug) {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0] {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        }`,
        {slug}
    );

}

export async function getPages() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`
    )
}

export async function getPage(slug) {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0] {
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content,
        }`,
        {slug}
    )
}

export async function getHomeBanner() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "homeBanner"][0] {
            _id,
            _createdAt,
            nom,
            prenom,
            introduction,
            job1,
            job2,
            "backgroundImage": backgroundImage.asset->url,
        }`
    )
}

export async function getSkills() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "skills"][0] {
            _id,
            _createdAt,
            introduction,
            "skills": skills[] {
                _key,
                _type,
                title,
                description,
            }
        }`
    )
}