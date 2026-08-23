import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const SkillsCard = ({
  title,
  logo,
  cato,
  txtcolour,
  colour,
  bgColor,
  percent,
  discrip,
  dropShadow,
  delay = 0,
}) => {
  const { isDark } = useTheme();

  const cardRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`p-3 bg-bgCard ${
        isDark
          ? "shadow-[inset_1px_5px_18px_rgba(255,255,255,0.2)]"
          : "shadow-[inset_0_0_20px_black]"
      } backdrop-blur-sm rounded-2xl flex flex-col
      transition-all duration-700 ease-out
      ${show ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}>
      <h1
        className={`text-center text-xl lg:text-3xl ${txtcolour} font-bold tracking-widest`}>
        {title}
      </h1>

      <div
        className={`${txtcolour} ${
          isDark ? dropShadow : ""
        } w-full text-8xl flex mt-5 items-center justify-center`}>
        {logo}
      </div>

      <p className="text-muted text-center text-md lg:text-lg my-5">
        {discrip}
      </p>

      <div className="mt-auto">
        <div className="flex items-center mt-auto justify-between mb-4">
          <span
            className="font-mulish text-text font-bold tracking-wider"
            style={{
              textShadow: isDark ? `0 0 15px ${colour}` : "none",
            }}>
            {cato}
          </span>

          <span className="font-bold text-text">{percent}%</span>
        </div>

        <div className="mb-5 flex">
          <div className="bg-gray-600 mt-auto rounded-full overflow-hidden w-full h-3">
            <div
              className={`h-full rounded-full ${bgColor}`}
              style={{ width: `${percent}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
