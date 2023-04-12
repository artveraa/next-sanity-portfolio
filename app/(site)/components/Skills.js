import gsap from "gsap";
import styles from '../styles/Skills.module.scss';
import React, {useEffect, useState, useRef} from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {PortableText} from "@portabletext/react";

const Skills = ({content}) => {

    // if (typeof window !== 'undefined') {
    //     gsap.registerPlugin(ScrollTrigger, SplitText);
    // }

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    });

    const skillsTitleRef = useRef(null);
    const skillsContainerRef = useRef(null);
    const skillRef = useRef(null);

    useEffect(() => {


        if (hasRendered) {
            ScrollTrigger.create({
                trigger: skillsTitleRef.current,
                start: 'top 5%',
                end: '+=1000',
                scrub: true,
                pin: true,
                pinSpacing: false,
                // markers: true,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsContainerRef.current,
                    start: 'top 70%',
                    end: '+=1000',
                    scrub: true,
                    // markers: true,
                }
            });

            const skills = document.querySelectorAll('.skill');

            gsap.set(skills, {autoAlpha: 0, x: -70});

            tl.to(skills, {autoAlpha: 1, x: 0, duration: 1, ease: "power2.out", stagger: .2})


        }

    }, [hasRendered]);


    return (
        <section className={styles.skillsLayout}>
            <h2 ref={skillsTitleRef}>
                <PortableText value={content.introduction}/>
            </h2>
            <div className={styles.skillsContainer} ref={skillsContainerRef}>
                {
                    content.skills.map((skill) => {
                        return (
                            <div className={styles.skill + ' skill'} ref={skillRef} key={skill.title}>
                                <h3>{skill.title}</h3>
                                <PortableText value={skill.description}/>
                            </div>
                        )

                    })
                }
            </div>
        </section>
    )
}

export default Skills;