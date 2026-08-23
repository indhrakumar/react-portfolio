import indhar from "../assets/indhar.jpg";
import banner from "../assets/banner.png";
import { useState, useEffect, useRef } from "react";
import { ArrowBigRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { usePage } from "../context/PageProvider";

function About({ handlePage }) {
  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);
  const { isDark } = useTheme();
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const { singlePage } = usePage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === card1Ref.current) {
            setCard1Visible(entry.isIntersecting);
          }

          if (entry.target === card2Ref.current) {
            setCard2Visible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (card1Ref.current) {
      observer.observe(card1Ref.current);
    }

    if (card2Ref.current) {
      observer.observe(card2Ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const content1 = `Aspiring Software Developer with a strong foundation in Java, HTML, CSS, JavaScript, React.js, and Tailwind CSS. Passionate about building responsive web applications and learning modern technologies.`;

  const content2 = `I enjoy turning ideas into clean, responsive, and user-friendly web experiences. I focus on writing maintainable code, improving my problem-solving skills, and continuously exploring new technologies to grow as a Full Stack Developer.`;

  return (
    <div className="min-h-screen px-10 pt-25 pb-20   flex flex-col items-center gap-3 w-full  font-mulish  overflow-hidden">
      {/* Heading */}
      <h1
        style={{
          textShadow: isDark ? "1px 3px 50px" : "",
        }}
        className="text-6xl text-text1 text-center font-bold mb-10 font-poppins">
        ABOUT <span className="font-mulish text-text2">ME</span>
      </h1>

      {/* First Card */}
      <div
        ref={card1Ref}
        className={`tracking-widest z-[0] ${
          isDark
            ? "shadow-[inset_1px_5px_18px_rgba(255,255,255,0.4),5px_5px_15px_rgba(214,210,210,0.5)]"
            : "shadow-[inset_0_0_20px_black,4px_10px_25px_rgba(0,0,0,0.5)]"
        } w-full sm:w-3/4 lg:w-1/2 rounded-lg overflow-hidden mx-auto lg:mx-0 lg:me-auto bg-bgCard flex flex-col lg:flex-row gap-5 italic text-text transition-all duration-1000 z-1 ${
          card1Visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[200px]"
        }`}>
        <div className="order-2 my-auto px-4 py-3 text-xl text-justify lg:order-1">
          <p>{content1}</p>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src={indhar}
            alt="Indhra Kumar"
            title="Indhra Kumar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Second Card */}
      <div
        ref={card2Ref}
        className={`w-full ${
          isDark
            ? "shadow-[inset_1px_5px_18px_rgba(255,255,255,0.4),5px_5px_15px_rgba(214,210,210,0.5)]"
            : "shadow-[inset_0_0_20px_black,4px_10px_25px_rgba(0,0,0,0.5)]"
        }  tracking-widest sm:w-3/4 lg:w-1/2 mx-auto lg:mx-0 lg:ms-auto mt-10 rounded-lg overflow-hidden bg-bgCard flex flex-col lg:flex-row gap-5 italic text-text transition-all duration-1000 delay-500 ${
          card2Visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[200px]"
        }`}>
        <div className="order-2 text-left px-4 py-3 text-xl my-auto">
          <p>{content2}</p>
        </div>

        <div className="order-1">
          <img
            src={banner}
            className="object-cover w-full h-full"
            alt="Banner"
          />
        </div>
      </div>
      {singlePage && (
        <button
          onClick={() => handlePage("education")}
          className="flex cursor-pointer animate-pulse text-text px-7 py-0.5   rounded-full  opacity-90 gap-3 text-xl items-center mt-8 ">
          Education <ArrowBigRight className="mt-5 -translate-y-2" />
        </button>
      )}
    </div>
  );
}

export default About;
