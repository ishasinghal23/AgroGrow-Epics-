import "./ServicesStyles.css";
import { Link } from 'react-router-dom';

function ServicesData(props){
    return(
        
            <div className="s-card">
                <div className="s-image">                     
                <Link to={props.pageUrl}>
                    <img src={props.img} alt="image" />
                </Link>
                </div>     
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
       
    );
}

export default ServicesData;
