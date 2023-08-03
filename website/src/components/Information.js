import img1 from "../assets/leaf.jpg";
import "./InformationStyles.css";

const Information = () =>{
    return(
        <><div className="information">
             <h1>What is AgroGrow?</h1> 
            <div className="textinfo">          
                <div className="text">
                <p>Welcome to AgroGrow, your go-to destination for a user-friendly website that provides valuable insights into crop selection, fertilizer recommendations, and disease management. Our primary goal is to empower individuals by helping them make informed decisions based on their unique soil health and the specific illnesses affecting their plants.</p>
                <p>With AgroGrow, you no longer have to rely on guesswork or trial-and-error. We leverage the power of data analysis and advanced algorithms to offer you precise guidance on crop selection and fertilizer usage, based on the specific characteristics of your soil. Whether you're a seasoned farmer or just starting out, our intuitive platform will help you make the right choices for your unique agricultural needs.</p>
                </div>
                <div className="image">
                <img alt="img" src={img1}/>
                </div>
               
        </div>
      
     
    </div>
            
            </>

    )
}

export default Information;