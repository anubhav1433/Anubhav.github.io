import { useEffect } from "react";
import AOS from 'aos'

export default function Experience() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (<div><h3 data-aos="slide-up" className="animate-pulse text-4xl ml-20  dark:text-teal-600 md:text-center ">EXPERIENCE AND QUALIFICATIONS</h3><br /><br /><br /><br />
    <div data-aos="slide-up" className="grid lg:grid-cols-3 md:grid-cols-2 gap-11 lg:pr-20 mx-20">
      {/* Education */}
      <div className=" from-teal-500 w-50 h-30 hover:bg-gray-900">
        <h4 className="fontt  text-teal-500 text-center text-4xl">MY EDUCATION</h4><br />
        {/* 3 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  ">☁️<span className=" text-center"> B-TECH,CSE</span></h6>
          <p className=" ml-10">PES UNIVERSITY,</p>
          <p className="ml-10">Bangalore<br />2021-2025<br />CGPA: 9.21</p>
        </div> <br />
        {/* 2 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  ">☁️<span className=" text-center">12TH GRADE</span></h6>
          <p className=" ml-9">JVM SHYAMALI,</p>
          <p className="ml-10">Ranchi<br />2019-2021<br />Percentage: 94.2%</p>
        </div> <br />
        {/* 1 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className=" ">☁️<span className=" text-center">10TH GRADE</span></h6>
          <p className=" ml-10">ST. ANTHONY&apos;S</p>
          <p className="ml-10">Ranchi<br />2007-2019<br />Percentage: 95%</p>
        </div>
      </div >
      {/* Experience */}
      <div className=" from-teal-500 w-50 h-30 hover:bg-gray-900">
        <h4 className="fontt text-teal-500 text-center text-4xl">MY EXPERIENCE</h4><br />
        {/* 3 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  ">☁️<span className=" text-center">MANY MORE TO COME</span></h6>
        </div> <br /><br />
        {/* 2 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className=" ">☁️<span className="text-center">WEB DEVELOPER</span></h6>
          <p className="ml-9">CodeChef PESUECC</p>
          <p className="ml-9">Apr&apos;23-Present</p>
        </div> <br /><br />
        {/* 1 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className=" ">☁️<span className="text-center">WEB DEV INTERN</span></h6>
          <p className="ml-10">CodeClause</p>
          <p className="ml-10">Apr&apos;23-May&apos;23</p>
        </div>
      </div >
      {/* Responsibilities */}
      <div className=" from-teal-500 w-50 h-30 hover:bg-gray-900">
        <h4 className="fontt  text-teal-500 text-center text-3xl ">MY<br></br> RESPONSIBILITIES</h4><br />
        {/* 3 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className=" ">☁️<span className="text-center">HEAD OF HOSPITALITY,</span></h6>
          <p className=" ml-8">SHUNYA PESUECC</p>
          <p className="ml-8">Oct&apos;22-Present</p>
        </div> <br /> <br />
        {/* 2 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className=" ">☁️<span className="text-center">CORE VOLUNTEER</span></h6>
          <p className="ml-10">NGO,UPHAAR</p>
          <p className="ml-10">May&apos;20-Mar&apos;22</p>
        </div> <br /> <br />
        {/* 1 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="">☁️<span className="text-center">SPORTS CAPTAIN</span></h6>
          <p className=" ml-10">ST. ANTHONY&apos;S</p>
          <p className="ml-10">Jan&apos;17-Jan&apos;18</p>
        </div>
      </div >
    </div></div>);
}