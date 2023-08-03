import "./MembersStyles.css";
import Isha from "../assets/isha.jpg";
import Simran from "../assets/simran.jpg";

import MembersData from "./MembersData";
function Members(){
    return (
        
        <div className="members">
            <h1>Following are the members:</h1>
           
            <div className="membercard">
            <div className="row1">
                <MembersData
                    img={Simran}
                    heading = "Simran Mustafa"
                    text="https://github.com/SimranMustafa"
                >
                </MembersData>
                <MembersData
                    img={Isha}
                    heading = "Isha Singhal"
                    text="https://github.com/readytolearn23"
                >
                </MembersData>
                
                </div>
           
                
            </div>
        </div>
    );
}

export default Members;