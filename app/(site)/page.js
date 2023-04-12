import {getProjects} from "@/sanity/sanity-utils";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

    const projects = await getProjects();

    return (

        <div className={styles.projectsContainer}>

            <h1>Hello !</h1>

            <div className={styles.projectsGrid}>
                {projects.map((project) => (

                        <Link href={`/projects/${project.slug}`} key={project._id} className={styles.projectCard}>
                            <h2>{project.name}</h2>
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={500}
                                    height={500}
                                />
                            )}
                        </Link>

                ))}
            </div>

        </div>

    )
}
