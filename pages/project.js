import data from './data.json';
import { useState, useEffect } from "react";


export default function Project(props) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(data.projects);
    }, []);
    return (
        <div className=" grid grid-cols-3 gap-5">
            {projects.map((project) => (
                <div key={project.id}>

                    <div className="textWithBlurredBg">
                        <img className=" w-[100%] h-auto" src={project.image} alt={project.title} /><br />
                        <p className="text-lg text-teal-600 mb-[20px]">{project.description}</p>
                    </div>
                    <a href={project.github}><h2 className="text-xl text-center underline text-teal-600 mb-10px ">{project.title}</h2></a><br />

                </div>
            ))}
        </div>
    );



}