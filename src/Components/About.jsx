


export function AboutMe() {
    return (
        <div className="mt-5 d-flex flex-column">
            <div style={{fontSize: "50px", fontWeight: "bold", position: "absolute", right: "12%"}}>
                About me
            </div>
            <div style={{marginLeft:"10%", marginTop:'120px', width:"80%", textAlign:"center", fontSize:"20px"}}> I am currently a 3rd year student at the <span style={{fontWeight:'bold'}}>University Of Sydney</span> doing 
                a double degree in Mechatronic Engineering (Space) and Computer Science. I have a strong passion for AI, robotics, and mathematics which I have developed throughout 
                my time at university.
            </div>
            <div style={{marginLeft:"10%", marginTop:'20px', width:"80%", textAlign:"center", fontSize:"20px"}}>I am currently working at <span style={{fontWeight:'bold'}}>26 Degrees Global Markets</span> as a Quantative 
            Researcher, performing analysis to calculate risk and performance over large sets of trading data. For my first time in the Fintech world, this job has been 
            invaluable in teaching me how to apply my engineering skills into different, real world industries.</div>
            <div style={{marginLeft:"10%", marginTop:'20px', width:"80%", textAlign:"center", fontSize:"20px"}}>I enjoy building apps and coming up with new ideas. I am currently working on 
            <a style={{color: "blue", textDecoration: "none", fontWeight:"bold"}} href="https://github.com/James-h-1969/liverun"> LiveRun</a>, an app where you can communicate with your friends while they run.
            </div>
        </div>
    );
}

