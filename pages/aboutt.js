
import Image from "next/image";
import About from "../public/about.jpeg"


export default function Aboutt(){
    return(
        <div  className="sm:text-lg md:text-2xl">
            <h3  className="fontt  animate-pulse text-7xl py-1 dark:text-teal-600 text-center">ABOUT ME</h3><br /><br /><br /><br /><br />
            <div className="grid grid-cols-3 gap-5">
              <p className=" text-md pt-100 text-2xl leading-8 text-gray-800 dark:text-gray-200">
                I'm currently pursuing B.Tech in CSE from PES University, Bangalore.<br /><br />
                Highly motivated and dedicated student with strong<br /> problem-solving and analytical skills<br /><br />
                A quick learner with
                excellent teamwork skills
              </p>
              <div className=" from-teal-500 w-30 h-30">
                <Image src={About} className="pd-50" />
              </div >
              <div className="text-teal-600 border-solid"><button class="font-face my-20 ml-20 rounded-full" onClick={() => { window.scrollTo({ top: 5000, behavior: "smooth" }) }}>Ping Me: 📲</button></div>

            </div>
          </div>
    );
}