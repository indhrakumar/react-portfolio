import indhar from "../assets/indhar.jpg";
import banner from "../assets/banner.png";
import { useState, useEffect, useRef } from "react";
import { ArrowBigRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { usePage } from "../context/PageProvider";

const roles = [
  "Aspiring FullStack Developer",
  "Aspiring MernStack Developer",
  "Web Developer",
  "Frontend Developer",
];

function useTypingEffect(
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1);

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

function About({ handlePage }) {
  const [cardVisible, setCardVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const { isDark } = useTheme();
  const cardRef = useRef(null);
  const infoRef = useRef(null);
  const { singlePage } = usePage();

  const typedRole = useTypingEffect(roles);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === cardRef.current) {
            setCardVisible(entry.isIntersecting);
          }
          if (entry.target === infoRef.current) {
            setInfoVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const aboutParagraph = `Aspiring Software Developer with a strong foundation in Java, HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy turning ideas into clean, responsive, and user-friendly web experiences — focusing on maintainable code, sharpening my problem-solving skills, and continuously exploring new technologies to grow as a Full Stack Developer.`;

  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/indhrakumar",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/indhrakumar1718/",
      label: "LinkedIn",
    },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_innocent_boy_i17/",
      label: "Instagram",
    },
  ];

  const cardShadow = isDark
    ? "shadow-[inset_1px_5px_18px_rgba(255,255,255,0.4),5px_5px_15px_rgba(214,210,210,0.5)]"
    : "shadow-[inset_0_0_20px_black,4px_10px_25px_rgba(0,0,0,0.5)]";

  return (
    <div className="min-h-screen px-6 sm:px-10 pt-25 pb-20 flex flex-col items-center gap-3 w-full font-mulish overflow-hidden">
      <h1
        style={{ textShadow: isDark ? "1px 3px 50px" : "" }}
        className="text-6xl text-text1 text-center font-bold mb-10 font-poppins">
        ABOUT <span className="font-mulish text-text2">ME</span>
      </h1>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-12">
        <div
          ref={cardRef}
          className={`relative w-full max-w-sm mx-auto rounded-3xl bg-bgCard ${cardShadow} transition-all duration-1000 ${
            cardVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-[100px]"
          }`}>
          <div className="h-56 w-full overflow-hidden rounded-t-3xl">
            <img
              src={banner}
              alt="Banner"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-6 top-40 h-28 w-28 rounded-full overflow-hidden border-4 border-bgCard shadow-lg">
            <img
              src={indhar}
              alt="Indhra Kumar"
              title="Indhra Kumar"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-6 pt-16 pb-6 text-text">
            <p className="text-lg italic tracking-wide">
              I am a passionate graduate, eager to build my career in software
              development.
            </p>
          </div>
        </div>

        <div
          ref={infoRef}
          className={`w-full text-text transition-all duration-1000 delay-300 ${
            infoVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[100px]"
          }`}>
          <p className="text-4xl font-semibold font-poppins mb-2">
            Hii.. It's <span className="text-text2">Indhra Kumar R M</span>
          </p>

          <p className="text-xl sm:text-xl font-medium text-text2 mb-6 h-8">
            {typedRole}
            <span className="inline-block w-[2px] h-5 bg-current ml-1 align-middle animate-pulse" />
          </p>

          <p className="text-lg text-justify leading-relaxed mb-8 max-w-xl">
            {aboutParagraph}
          </p>

          <div className="mb-6">
            <p className="text-sm uppercase tracking-widest text-text2 mb-3">
              Find me on
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`h-12 w-12 flex items-center justify-center rounded-full border  border-text/30 text-text hover:border-text2 hover:text-black hover:-translate-y-1 transition-all duration-300 ${
                    isDark
                      ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-text2"
                      : "hover:shadow-md hover:bg-black hover:text-white"
                  }`}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 text-text py-2.5 rounded-full border-2 border-text2 font-medium hover:bg-text2 hover:text-bgCard transition-colors duration-300">
              <Mail size={18} />
              Contact me
            </a>
            <a
              href="/react-portfolio/src/assets/ResumePDF/Resume.pdf"
              className="flex items-center gap-2 px-6 py-2.5 text-text rounded-full border border-text2  font-medium hover:opacity-90 transition-opacity duration-300">
              <Download size={18} />
              View Resume
            </a>
          </div>
        </div>
      </div>

      {singlePage && (
        <button
          onClick={() => handlePage("education")}
          className="flex cursor-pointer animate-pulse text-text px-7 py-0.5 rounded-full opacity-90 gap-3 text-xl items-center mt-8">
          Education <ArrowBigRight className="mt-5 -translate-y-2" />
        </button>
      )}
    </div>
  );
}

export default About;
