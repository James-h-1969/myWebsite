import { Image } from "react-bootstrap";


export function ExperienceBox({title, img, description, skills}){
    return(
        <div className="mt-3 d-flex align-items-center">
            <img src={img} style={{width:"200px", height:"200px", borderRadius:"50%", objectFit:"cover"}}/>
            <div className="ms-5" style={{width:"70%"}}>
                <div style={{fontWeight:"bold", fontSize:"20px"}}>{title}</div>
                <div>{description}</div>
                <div style={{fontSize:"20px"}}><em>Skills: {skills}</em></div>
            </div>
        </div>
    )
}