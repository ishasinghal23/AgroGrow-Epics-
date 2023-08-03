import "./FooterStyles.css";

const Footer  = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>AgroGrow</h1>
                    <p>Growing together, Sustainably with AgroGrow</p>
                </div>
                <div>
                   <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                   </a> 
                   <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                   </a>
                   <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                   </a>
                   <a href="/">
                    <i className="fa-solid fa-envelope-square"></i>
                   </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>About</h4>
                    <a href ="/">GitHub</a>
                    <a href="/">Project</a>
                    <a href="/">Farming Techniques</a>
                    <a href="/">Pesticides</a>
                </div>
                <div>
                    <h4>Services</h4>
                    <a href ="/">Crop Recommendation</a>
                    <a href="/">Disease Prediction</a>
                    <a href="/">Fertilizer Recommendation</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href ="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/contact">Contact Us</a>   
                </div>
                <div>
                    <h4>Others</h4>
                    <a href ="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/contact">License</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;