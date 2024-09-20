

// setting up a picture, and also word text as an intro
import ExperienceHeader from "./ExperienceHeader";
const Resume = () => {
    const openResume = () => {
        window.open(`${process.env.PUBLIC_URL}/data/Jeffrey_Liang_Resume_Recent.pdf`, '_blank');
      };
    
    return (
        <div className="resume">
        <div className="wrapper">
            <img src={`${process.env.PUBLIC_URL}/data/headshot.jpeg`} alt="image?" />
            <div className="text-box">
                <h2>Welcome To My Website</h2>
                <p> Hi everyone, I'm Jeffrey Liang. I'm a current sophmore studying Computer Science and Economics at Brown University. 
                I'm interested in UI/UX interface of website and mobile applications, fullstack, and machine learning specifically for 
                prediction models. Besides computer science, I am involved in BTCG(Brown Technology Consulting Club) and completed a
                pitch for a business model for the Dojo Entreprenuership Program. 
                Thanks for viewing my portfolio website! </p>
                <button className = "btn" onClick={openResume}> Download CV </button>
            </div>
        </div>
    </div> 

    );
}
 
export default Resume;