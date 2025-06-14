import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import { techStackIcons } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {
    // Animate the tech cards in the skills section
    useGSAP(() => {
        // This animation is triggered when the user scrolls to the #skills wrapper
        // The animation starts when the top of the wrapper is at the center of the screen
        // The animation is staggered, meaning each card will animate in sequence
        // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                // Final values
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="How I Can Contribute & My Key Skills"
                    sub="🤝 What I Bring to the Table"
                />
                <div className="tech-grid">
                    {/* Loop through the techStackIcons array and create a component for each item.
              The key is set to the name of the tech stack icon, and the classnames are set to
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg
              classes are only applied on larger screens. */}
                    {techStackIcons.map((icon) => (
                        <div
                            key={icon.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            {/* The tech-card-animated-bg div is used to create a background animation when the
                  component is hovered. */}
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                {/* The tech-icon-wrapper div contains the TechIconCardExperience component,
                    which renders the 3D model of the tech stack icon. */}
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon} />
                                </div>
                                {/* The padding-x and w-full classes are used to add horizontal padding to the
                    text and make it take up the full width of the component. */}
                                <div className="padding-x w-full">
                                    {/* The p tag contains the name of the tech stack icon. */}
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* This is for the img part */}
                    {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
                </div>
            </div>
        </div>
    );
};

export default TechStack;