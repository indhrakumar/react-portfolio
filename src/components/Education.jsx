import { GraduationCap, School, School2, ArrowBigRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

const Education = ({ setPage }) => {
  const [Educard1, setEducard1] = useState(false);
  const [Educard2, setEducard2] = useState(false);
  const [Educard3, setEducard3] = useState(false);

  const eduCard1ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // First card
          setEducard1(true);

          // Second card after first animation
          setTimeout(() => {
            setEducard2(true);
          }, 500);

          // Third card after second animation
          setTimeout(() => {
            setEducard3(true);
          }, 1000);

          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (eduCard1ref.current) {
      observer.observe(eduCard1ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const { isDark } = useTheme();

  return (
    <div className="flex w-full p-10">
      <div className="mt-5 w-full">
        <h1 className={`text-6xl font-bold font-mulish text-center text-text `}>
          Education
        </h1>

        <div className="mx-5">
          {/* B.Tech */}
          <div
            ref={eduCard1ref}
            className={`flex w-full justify-start transition-all duration-500 ${
              Educard1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[200px]"
            }`}>
            <Card
              qualification={"B.Tech"}
              name={"University College of Engineering BIT Campus"}
              city={"Trichy"}
              year={"2021 - 2024"}
              dept={"Information Technology"}
              icon={<GraduationCap size={35} />}
            />
          </div>

          {/* Diploma */}
          <div
            className={`flex w-full justify-center transition-all duration-500 ${
              Educard2
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[200px]"
            }`}>
            <Card
              qualification={"Diploma"}
              name={"CSI Polytechnic College"}
              city={"Salem"}
              year={"2018 - 2021"}
              dept={"Electronics and Communication Engineering"}
              icon={<School2 size={35} />}
            />
          </div>

          {/* SSLC */}
          <div
            className={`flex w-full justify-end transition-all duration-500 ${
              Educard3
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[200px]"
            }`}>
            <Card
              qualification={"SSLC"}
              name={"St.Paul's Higher Secondary School"}
              city={"Salem"}
              year={"2017 - 2018"}
              dept={"State Board"}
              icon={<School size={35} />}
            />
          </div>
        </div>

        <div className={`w-full flex items-center justify-center text-text`}>
          <button
            onClick={() => setPage("skills")}
            className="flex cursor-pointer gap-3 px-5 py-2 rounded-full border border-gray-600 bg-red-700 text-3xl items-center mt-8">
            My Skills
            <ArrowBigRight className="mt-5 -translate-y-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
