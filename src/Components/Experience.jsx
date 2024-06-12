import { ExperienceBox } from "./ExperienceBox";

import JSONdata from "../assets/experience.json";


export function Experience() {
    return (
        <div className="mt-5 d-flex flex-column" >
            <div style={{fontSize: "50px", fontWeight: "bold", position: "absolute", left: "12%"}}>
                Experience/Projects
            </div>
            <div style={{marginTop:"100px", marginLeft:"10%"}}>
                {JSONdata.data.map((val, i) => (
                    <ExperienceBox title={val.title} description={val.description} skills={val.skills} img={val.img} />
                ))}
            </div>
        </div>
    );
}

