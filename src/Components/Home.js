

// setting up a picture, and also word text as an intro
const Home = () => {
    const openResume = () => {
        window.open('/data/Jeffrey_Liang_Resume.pdf', '_blank');
      };
    
    return (
        <div className="home">
        <div className="wrapper">
            <img src = "/data/headshot.jpeg" alt="image?"/>
            <div className="text-box">
                <h2>Welcome To My Website</h2>
                <p> Hi everyone, I'm Jeffrey Liang. I'm a current freshmen studying Computer Science and Economics at Brown University. 
                I'm interested in UI/UX interface of website and mobile applications, fullstack, and machine learning specifically for 
                prediction models. Besides computer science, I am involved in BTCG(Brown Technology Consulting Club) and am currently 
                involved in a pitch for a business model for the Dojo Entreprenuership Program. 
                Thanks for viewing my portfolio website! </p>
                <button onClick={openResume}> Download CV </button>
            </div>
        </div>
    </div> 

    );
}
 
export default Home;