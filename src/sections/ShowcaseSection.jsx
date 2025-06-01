import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/MyBiatCorpo.png" alt="Ryde App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                MyBiat Corporate – A Modern Banking Experience
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                MyBiat Corporate is a cutting-edge digital banking platform tailored for businesses.
                                It empowers corporate clients with seamless access to financial services, advanced user management,
                                real-time transaction tracking, and secure integrations—all within an intuitive and scalable interface.
                                Designed with performance and flexibility in mind, the platform supports complex banking operations while
                                ensuring compliance and a premium user experience.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#adb5bd]">
                                <img
                                    src="/images/E-KYC.png"
                                    alt="Library Management Platform"
                                />
                            </div>
                            <h2>E-KYC Zitouna Bank (Electronic-Know Your Customer)</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#adb5bd]">
                                <img src="/images/TradeApp.png" alt="YC Directory App" />
                            </div>
                            <h2>Trade App - Simplifying Banking Operations for Administrative Agents</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;