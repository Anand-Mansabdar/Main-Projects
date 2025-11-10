import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectOneRef = useRef(null);
  const projectTwoRef = useRef(null);
  const projectThreeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const projects = [
      projectOneRef.current,
      projectTwoRef.current,
      projectThreeRef.current,
    ];

    projects.forEach((card, index) => {
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
    <section ref={sectionRef} id="work" className="app-showcase ">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={projectOneRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Project 1" />
            </div>

            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-friendly App
                called ...
              </h2>
              <p className="text-white md:text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                repellat dignissimos possimus, ab architecto sint error earum
                dicta dolor sapiente!
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={projectTwoRef}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Project 2" />
              </div>
              <h2>Project - 2</h2>
            </div>

            <div ref={projectThreeRef} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Project 3" />
              </div>
              <h2>Project - 3</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
