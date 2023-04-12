
import Image from "next/image";
import Edu from "../public/Education.gif"
import Exp from "../public/experience.gif"
import Resp from "../public/reponsibilities.gif"

export default function Experience(){
    return(<div><h3 className="fontt animate-pulse text-5xl pr-20 dark:text-teal-600 text-right">EXPERIENCE AND QUALIFICATIONS</h3><br /><br /><br /><br />
    <div className="grid grid-cols-4 gap-11 pr-20">
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