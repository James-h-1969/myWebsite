import { Image } from "react-bootstrap";
import ProfileImg from "/profile.jpg";



export function Header(){
    return(
        <div className="d-flex flex-row justify-content-between mt-3" style={{marginLeft:"10%"}}>
            <div style={{width:"50%"}}>
                <span style={{fontSize:"100px", fontWeight:"bold"}}>Hi, I'm James Hocking 👋</span>
                <div className="pt-3" style={{fontSize:"40px"}}>
                    Mechatronic Engineer | Computer Scientist | Quantative Researcher
                </div>
            </div>
            <div style={{marginRight:"140px"}}>
                <Image src={ProfileImg} style={{width:"400px", height:"400px", borderRadius:"50%"}}/>
            </div>
        </div>
    )
}