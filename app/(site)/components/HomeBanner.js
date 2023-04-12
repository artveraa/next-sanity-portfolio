import {getHomeBanner} from "@/sanity/sanity-utils";
import {PortableText} from "@portabletext/react";
import styles from "../styles/Banner.module.scss";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";


const HomeBanner = ({content}) => {

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    }, []);

    useEffect(() => {
        if (hasRendered) {
            gsap.registerPlugin(ScrollTrigger, SplitText);

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: banner.current,
                    start: 'bottom bottom',
                    end: '+=1000',
                    scrub: true,
                    // markers: true,
                    pin: true,
                    pinSpacing: true,
                },
            });

            gsap.set(leftTextRef.current, {autoAlpha: 0, y: 100});
            gsap.set(rightTextRef.current, {autoAlpha: 0, y: 100});

            tl2.to("#navbar", {y: -100, duration: .3, ease: "power2.out"})
                .to(introRef.current, {y: 100, duration: .3, autoAlpha: 0, ease: "power2.out"})
                .to(maskRef.current, {width: '50%', height: '50%', duration: .3, ease: "power2.out"})
                .to(leftTextRef.current, {y: 0, autoAlpha: 1, duration: .3, ease: "power2.out"})
                .from(surnameRef.current, {x: -20, duration: .3, ease: "power2.out"}, "-=.3")
                .from(nameRef.current, {x: 20, duration: .3, ease: "power2.out"}, "-=.3")
                .to(rightTextRef.current, {y: 0, autoAlpha: 1, duration: .3, ease: "power2.out"}, "-=.3")
                .from(jobPart1Ref.current, {x: -20, duration: .3, ease: "power2.out"}, "-=.3")
                .from(jobPart2Ref.current, {x: 20, duration: .3, ease: "power2.out"}, "-=.3")
        }



    }, [hasRendered]);


    console.log(content)


    const introRef = useRef(null);
    const maskRef = useRef(null);
    const containerImgRef = useRef(null);
    const banner = useRef(null);
    const leftTextRef = useRef(null);
    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const rightTextRef = useRef(null);
    const jobPart1Ref = useRef(null);
    const jobPart2Ref = useRef(null);


    return (


        <div className={styles.banner} ref={banner}>
            <div className={styles.mask} ref={maskRef}>
                <div className={styles.imgContainer}>
                    {/*<img src={content.backgroundImage} alt="background"/>*/}
                    <Image
                        src={content.backgroundImage}
                        alt="background"
                        quality={100}
                        width={1920}
                        height={1080}
                    />
                    {/*<video autoPlay muted loop id="myVideo">*/}
                    {/*    <source src="/videos/bg.mp4" type="video/mp4"/>*/}
                    {/*</video>*/}
                </div>

                <div className={styles.leftTextContainer} ref={leftTextRef}>
                    <div className={styles.surname} ref={surnameRef}>
                        {content.prenom}
                    </div>
                    <div className={styles.name} ref={nameRef}>
                        {content.nom}
                    </div>
                </div>

                <div className={styles.rightTextContainer} ref={rightTextRef}>
                    <div className={styles.jobPart1} ref={jobPart1Ref}>
                        {content.job1}
                    </div>

                    <div className={styles.jobPart2} ref={jobPart2Ref}>
                        {content.job2}
                    </div>
                </div>
            </div>
            <div className={styles.intro} ref={introRef}>
                <div className={styles.introText}>
                    <PortableText value={content.introduction}/>
                </div>
            </div>


        </div>
    )


}

export default HomeBanner;