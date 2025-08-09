import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/animations.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.position = 'relative';
    }

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      gsap.fromTo("#meet-george-text",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#george-section",
            start: "top center",
            end: "center center",
            scrub: 1,
          }
        }
      );

      gsap.fromTo("#george-image", 
        {
          scale: 1,
          opacity: 0,
        },
        {
          scale: 1.3,
          opacity: 1,
          scrollTrigger: {
            trigger: "#george-section",
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          }
        }
      );
    }
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      gsap.fromTo("#meet-leone-text",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#leone-section",
            start: "top center",
            end: "center center",
            scrub: 1,
          }
        }
      );

      gsap.fromTo("#leone-image", 
        {
          scale: 1,
          opacity: 0,
        },
        {
          scale: 1.3,
          opacity: 1,
          scrollTrigger: {
            trigger: "#leone-section",
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          }
        }
      );


      gsap.fromTo("#meet-bryant-text",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#bryant-section",
            start: "top center",
            end: "center center",
            scrub: 1,
          }
        }
      );

      gsap.fromTo("#bryant-image", 
        {
          scale: 1,
          opacity: 0,
        },
        {
          scale: 1.3,
          opacity: 1,
          scrollTrigger: {
            trigger: "#bryant-section",
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          }
        }
      );
    }
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, observerOptions);

      const fadeElements = document.querySelectorAll('.fade-section');
      const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right');

      fadeElements.forEach(element => observer.observe(element));
      slideElements.forEach(element => observer.observe(element));

      return () => {
        fadeElements.forEach(element => observer.unobserve(element));
        slideElements.forEach(element => observer.unobserve(element));
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <span className="keyhole" aria-hidden="true"></span>
      <span className="arrow" aria-hidden="true">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 -5 30 30">
          <path d="M 0 10 H 20 L 10 0 M 20 10 L 10 20" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
      </span>
      {/* Landing section - Red */}
      <section className="section--primary min-h-screen flex items-center justify-center relative bg-primary text-white py-16 md:py-0 fade-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto px-4 md:px-6 relative z-10"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight">
            Empowering Independence
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-90 mb-6 md:mb-8">
            Guide Dogs for the Visually Impared
          </p>
          <Link href="/donate">
            <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 bg-white text-primary hover:bg-white/90">
              Support Our Mission
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Scrolling sections */}
      <div className="relative">
        {/* White section */}
        <section className="min-h-screen flex items-center justify-center bg-white py-16 md:py-0 fade-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">What do we do?</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-4xl mx-auto">
              Guide Dogs Malta supports Malta's visually impaired community. We collaborate with Norwegian training centers to bring internationally certified guide dogs to Malta, a place where specialized training facilities are unavailable. By raising funds from generous organizations and individuals, we provide these life-changing companions to visually impaired Maltese residents at no cost. We believe visual impairment should not hinder a life of independence, dignity, and fulfillment!
            </p>
          </div>
        </section>

        {/* Red section - George's Story Part 1 */}
        <section className="min-h-screen flex items-center justify-center bg-primary text-white py-16 md:py-0" id="george-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <img
                src="/images/george-guide-dog.jpg"
                alt="George with his guide dog, showing the close bond between them"
                className="rounded-[2rem] rounded-tr-[4rem] rounded-bl-[4rem] shadow-lg w-full h-[70vh] object-cover hover:scale-[1.02] transition-transform duration-300"
                id="george-image"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
                }}
              />
            </div>
          </div>
        </section>

        {/* Red section - George's Story Part 2 */}
        <section className="min-h-screen flex items-center justify-center bg-primary text-white py-16 md:py-0">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 
              id="meet-george-text"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12"
            >
              Meet George
            </h2>
            <div className="max-w-2xl mx-auto mt-8">
              <p className="text-lg md:text-xl lg:text-2xl text-white text-center leading-relaxed">
                Diagnosed with Retinitis Pigmentosa at three, our founder George began losing his sight in his twenties and has been blind for over a decade. After losing his guide dog, Bryer, a GoFundMe campaign brought Vilma into his life, restoring his mobility, dignity, and confidence. George is now determined to help others gain the same transformative support.

                He is a successful business owner, physiotherapist, and motivational speaker. His journey—from receiving help to championing others—fuels our work at Guide Dogs Malta every day.
              </p>
            </div>
          </div>
        </section>

        {/* White section - Leone's Story Part 1 */}
        <section className="min-h-screen flex items-center justify-center bg-white py-16 md:py-0 fade-section" id="leone-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <img
                src="images/LEONE-SCIBERRAS-1024x576.jpg"
                alt="Leone Sciberras, politician and advocate"
                className="rounded-[3rem] rounded-tl-[5rem] rounded-br-[5rem] shadow-lg w-full h-[70vh] object-cover object-[30%_center] md:object-center hover:scale-[1.02] transition-transform duration-300"
                id="leone-image"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                }}
              />
            </div>
          </div>
        </section>

        {/* White section - Leone's Story Part 2 */}
        <section className="min-h-screen flex items-center justify-center bg-white py-16 md:py-0">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 
              id="meet-leone-text"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12"
            >
              Meet Leone
            </h2>
            <div className="max-w-2xl mx-auto mt-8">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center leading-relaxed">
                Leone Sciberras is a visually impaired leader who lives by the belief that where there is a will, there is a way. With determination, discipline, and a passion for lifelong learning, he is committed to making a difference in his community.

                Leone has held leadership roles in both local and international organizations, working to support vulnerable individuals and young people. His dedication to service was recognized when he was awarded the Medal of the Order pro Merito Melitensi by the Sovereign Military Order of Malta for his contributions.

                Now a dedicated public servant and an emerging voice in Maltese politics, Leone is driven by a deep desire to advocate for the Maltese people. His guide dog played a pivotal role in restoring his independence and dignity—an experience that fuels his mission to help others overcome challenges and thrive.

                Leone's journey is a testament to resilience, and his unwavering commitment continues to inspire us every day.
              </p>
            </div>
          </div>
        </section>

        {/* Red section - Bryant's Story Part 1 */}
        <section className="min-h-screen flex items-center justify-center bg-primary text-white py-16 md:py-0 fade-section" id="bryant-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <img
                src="images/Bryant.jpeg"
                alt="Bryant Soorkia, a key member of Guide Dogs Malta"
                className="rounded-[4rem] rounded-tr-[2rem] rounded-bl-[2rem] shadow-lg w-full h-[70vh] object-cover hover:scale-[1.02] transition-transform duration-300"
                id="bryant-image"
              />
            </div>
          </div>
        </section>

        {/* Red section - Bryant's Story Part 2 */}
        <section className="min-h-screen flex items-center justify-center bg-primary text-white py-16 md:py-0">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 
              id="meet-bryant-text"
              className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 font-bold"
            >
              Meet Bryant
            </h2>
            <div className="max-w-2xl mx-auto mt-8">
              <p className="text-lg md:text-xl lg:text-2xl text-white text-center leading-relaxed">
                    Bryant's passion for helping others has defined his life. Inspired by his grandfather and cousin, who lost their eyesight, he has made it his mission to support the visually impaired.

                    Bryant has lived a third of his life abroad in places like China, the US, the UK, and Malta, building a career in technology and international business. His philanthropic journey began at age 13, when he went door-to-door after school collecting gold coin donations to enable him to travel to rural areas of China and Ghana to donate educational materials to schools and orphanages. These early experiences shaped his purpose, driving him to pursue a career that allows him to maximize his impact on others.

                    These early experiences shaped his purpose, driving him to pursue a career that allows him to maximize his impact on others.
              </p>
            </div>
          </div>
        </section>

        {/* White section - Partner section */}
        <section className="min-h-screen flex items-center justify-center bg-white py-16 md:py-0 fade-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-900">Our Partners</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-4xl mx-auto">
              Guide Dogs Malta proudly partners with Lund Guide Dog Services (Lund Hundetjenester AS), a top-tier training facility in Råde, Norway, celebrated for its rigorous standards. With over 15 years of experience, they provide 6-8 months of intensive training and a 4-week co-training course, forging deep bonds between dogs and owners. Certified by the International Guide Dog Federation, their rural facility ensures excellence, especially in matching Labradors to owners.
            </p>
            <div className="mb-8 md:mb-12">
              <a
                href="https://www.guidedog.no"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg md:text-xl px-6 md:px-8 py-4 md:py-6"
                >
                  Lund Guide Dog Services
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="py-4">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">IGDF</div>
                <div className="text-gray-700 text-base md:text-lg">Certified Training</div>
              </div>
              <div className="py-4">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">15+</div>
                <div className="text-gray-700 text-base md:text-lg">Years Experience</div>
              </div>
              <div className="py-4">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">200+</div>
                <div className="text-gray-700 text-base md:text-lg">Dogs Trained and Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final section - Red Banner */}
        <section className="min-h-screen flex items-center justify-center bg-primary py-16 md:py-0 fade-section">
          <div className="text-center max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">Join Our Mission</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-4xl mx-auto">
              Partner with us today and support more individuals in need.
            </p>
            <Link href="/donate">
              <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 bg-white text-primary hover:bg-white/90">
                Donate Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}