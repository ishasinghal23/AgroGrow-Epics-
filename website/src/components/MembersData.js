import "./MembersStyles.css";

function MembersData(props){
    return(
        <div className="m-card">
            <div className="m-image"> 
                <img src={props.img} alt="image"></img>
            </div>     
        <h4>{props.heading}</h4>
        <p className="m-text">{props.text}</p>
        </div>
    );
}

export default MembersData;