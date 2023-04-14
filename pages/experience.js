import Image from "next/image";
import Edu from "../public/Education.gif"
import Exp from "../public/experience.gif"
import Resp from "../public/reponsibilities.gif"

import { useState, useEffect } from "react";
import AOS from 'aos'

export default function Experience() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (<div><h3 data-aos="slide-up" className="fontt animate-pulse text-4xl ml-20  dark:text-teal-600 lg:text-center lg:ml-40">EXPERIENCE AND QUALIFICATIONS</h3><br /><br /><br /><br />
    <div data-aos="slide-up"className="grid lg:grid-cols-4 gap-11 lg:pr-20 mx-20">
      <div></div>
      <div className=" from-teal-500 w-50 h-30">
        <Image src={Edu} className="h-10 w-30" />
      </div >
      <div className=" from-teal-500 w-50 h-30">
        <Image src={Exp} className="h-10 w-30" />
      </div >
      <div className=" from-teal-500 w-50 h-30">
        <Image src={Resp} className="h-10 w-30" />
      </div >
    </div></div>);
}