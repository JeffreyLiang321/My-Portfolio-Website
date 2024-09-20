import React from "react";
import { Link } from "react-router-dom";
import { FaTags, FaGithub} from "react-icons/fa";
import { FaG, FaLink } from "react-icons/fa6";



// Correctly destructure props, including `project` from the props object
const Popup = ({ trigger, setTrigger, children, project }) => {
    const images = [];
    for (let i = 1; i <= 9; i++) {
        images.push(<img key={i} src={`${process.env.PUBLIC_URL}/data/Tennis App Photos/Photo_${i}.png`} alt={`Screenshot ${i}`} />);
      }
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>
        <div className="h2-color">
        <h2>{project.title}</h2>
        </div>
        {children}
        {/* Now, `project` is correctly received from props, and we can access its properties */}
        

        {/* Tennis Webscraper */}
        {project.id ==="1" && (
        <>
        <h3> Idea Background: </h3>
        <p> In this project, I tried familiarizing myself with the general framework of BeautifulSoup. After trying to scrape multiple websites like Etsy where websites often had dynamic html elements, I searched for multiple solutions to handle dynamic content. Eventually, I came to Selenium Webdriver, a tool for automating web applications that interact with web pages directly instead of downloading and filtering static content. By combining BeautifulSoup and Selenium Webdriver, I was able to automate web browser scraping of tennis statistics via the tennis abstract website.</p>
        <h3> Constructing: </h3>
        <p>Extracting match statistics across the top 20 male ATP players, I working to combine certain factors and excluded less meaningful statistics by filtering the data through MySQL workbench. Then, by building an interactive UI element, I want to let my website display head-by-head data showing the difference in stats between players.
Later on, through learning neural networks I hope to develop a machine learning algorithm with a friend to predict match outcomes according to name matchups.</p>
          <div className="tags-item">
                    <FaTags size={25} className="icon"/>
                    <p> Selenium Webdriver, Python, MySQL Workbench</p>
          </div>
        </>
        )}

        {/* Tenis App */}
        {project.id ==="2" && (
        <>
        <div className="app-popup-image">
        {images}
        </div>
        <h3> Idea Background: </h3>
        <p> Currently, in the field of tennis, tennis apps fall under three main categories: trackers, get-together apps, and teaching apps. Smooth Tennis would fall under the teaching category, though I believe the purpose of my app is unique compared to existing products: Instead of having set-up pro vs player comparisons or pre-made videos, players will be able to upload their videos in real-time and receive fresh feedback from various coaches with little delay. Players will no longer have to spend days critiquing minute, technique-related issues, or combing through videos to look for mechanical errors. With a plethora of coaches providing assistance and technical advice at their fingertips, players can receive personalized, detailed feedback just as if a coach were standing on the court watching them.</p>
        <h3> App Background: </h3>
        <p>  The background of the app uses Firebase. Using Firestore Database, I’m able to track and update user information including their posts, login information, and interactions with other players and coaches. Using Firebase Authentication, I’m able to authenticate whether a user’s login information is recorded or correct. Lastly, I use Firebase Storage to store necessary profile pictures, tennis images, and videos according to what player’s post. </p>
        <h3> The Actual App: </h3>
        <p>  Using Xcode, I coded the entire app in the Swift language. The app was constructed with an MVC model in mind. The main view controllers cost of a tennis posts page which divulges into more specific post pages dedicated to each tennis technique, a create posts page for players to make new posts, a profile page to view coaches and players, and a tracking page that tracks the best responses from coaches and helps coaches see how they were percieved with their responses. To see all the code behind the app, check out my GitHub repository. To checkout my website dedicated to the app providing my complete thought process and numerous mini-updates going over each page and their functions, check out my blog.</p>
        <div className="github-item">
                    <FaGithub size={25} className="icon"/>
                    <a href="https://github.com/JeffreyLiang321/Smooth-Tennis" target="_blank" rel="noopener noreferrer">App Code</a>
          </div>
        <div className="links-item">
                    <FaLink size={25} className="icon"/>
                    <a href="https://www.appjourneyjeffrey.com/" target="_blank" rel="noopener noreferrer">App Simulation Blog</a>
        </div>
        <div className="tags-item">
                    <FaTags size={25} className="icon"/>
                    <p> Xcode, Swift, Firebase</p>
          </div>
        </>
        )} 

        {/* Drone Wing */}
        {project.id === "3" && (
          <>
          <img src={`${process.env.PUBLIC_URL}/data/DroneEndGraph.png`} alt="image?" />
          <h3>Project Abstract</h3>
          <p>
            For this project, I was assisted by an STJU applied mathematics professor. Nowadays, more and more unmanned aerial vehicles are used in the logistics industry. Yet only large drones like the Global Hawk, are capable of carrying lots of heavy packages which smaller common delivery drones can’t do. Still, they need to be charged very often making them inefficient in practical use. We hope to solve these issues by reducing the weight of large drone wings by using an elastic transportation network based on energy optimization. This would help extend the work time of these drones and allowing for maximum transportation amount. We first figured out the total elastic potential energy of the wings and the gravity potential energy. Then we minimized the total energy to find the best geometric value(radius of each pipeline within the wings). Next, simulated on MATLAB, wings were built according to the pipeline wing radius and the total energy result was updated continuously to constantly minimize the energy with a more ideal pipeline radius. We expect a final pipeline elastic structure similar to that of a dragonfly’s wing with minimum total energy that will significantly help reduce the weight of large drone wings. This project will help design significantly lighter wings of drones based on elastic transportation networks mainly through MATLAB simulations. Normal delivery drones can then be expanded in size and utilize these newly designed wings to transport more products while flying for long periods without constant recharging.
          </p>
          <div className="links-item">
                    <FaLink size={25} className="icon"/>
                    <a href="https://www.hillpublisher.com/UpFile/202307/20230731173237.pdf" target="_blank" rel="noopener noreferrer">Full Project Paper</a>
          </div>
          <div className="tags-item">
                    <FaTags size={25} className="icon"/>
                    <p> Applied Mathematics, Matlab, Machine Learning</p>
          </div>
          </>
        )}

        {/* Robocar */}
        {project.id === "4" && (
          <>
          <h3> Project Question: </h3>
          <p> How can drivers use a low cost and computational requiring way to make correct decisions and safely maneuver narrow roads that also have people and objects present? </p>
          <h3> Hypothesis: </h3>
          <p> By using just one pair of left and right infrared sensors and a single ultrasound sensor to substitute for the uses of a car radar, combined with a SSD video detection camera and a Raspberry Pie computer board connected to an Intel Neural Compute Stick, this method will not only lower costs but also lower computational requirements for navigating this driver scenario.</p>
          <h3> Procedure: </h3>
          <div className="Car-Building Part">
          <p> First, I had to construct the Raspbot Car. Then, I checked and modified the existing 
            python code for the infrared sensors, motor wheels, ultrasound sensor, and camera of the vehicle. </p>
          <div className="car-1-popup-image">
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/CarTest-1-ezgif.com-gif-to-mp4-converter.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/CarTest-2-ezgif.com-gif-to-mp4-converter.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/ezgif.com-gif-to-mp4-converter.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/ezgif.com-gif-to-mp4-converter (2).mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          </div>

          <div className="Car-Model-Part">
          <p>     
            Then to establish the video detection: <br/>
            1) Load the "person-vehicle-bike-detection-crossroad-0078" <br/>
            2) Use the video camera to capture the video stream  <br/>
            3) The program sends the video frame to the OpenVINO  <br/>
            4) Use the model to detection the person and vehicle  <br/>
            5) Return the result based on the classification to the camera display screen  <br/>
          </p>
          <img src={`${process.env.PUBLIC_URL}/data/Robocar Photos/OpenVino.png`} alt="huh?" />
          <div className="car-2-popup-image">
          <video className = "bottom-image" width="320" height="240" controls>
            <source src={`data/Robocar Photos/ModelTest-1-ezgif.com-gif-to-mp4-converter.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className = "bottom-image" width="320" height="240" controls>
            <source src={`data/Robocar Photos/ModelTest-2-ezgif.com-gif-to-mp4-converter.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          </div>

          <div className="Car-Testing-Part">
          <p>     
            Now that the classification model is incoporated, we can modify the controls
            to avoid bikes, vehicles, or people. In the testing trials, the robocar follows two basic logical frameworks:
          </p>
          <div className="car-3-popup-image">
          <img src={`${process.env.PUBLIC_URL}/data/Robocar Photos/Framework1.png`} alt="image?" />
          <img src={`${process.env.PUBLIC_URL}/data/Robocar Photos/Framework2.png`} alt="image?" />
          </div>
          <p>Finally, we can initiate our testing trials for cases where
            an object is in front, to the left or right, or offers no movable path.
          </p>
          <div className="car-1-popup-image">
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/TrialTest-1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/TrialTest-2.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/TrialTest-3.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src={`data/Robocar Photos/TrialTest-4.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          </div>

          <div className="Car-Final">
            <p> Overall, this project has enabled me to create an innovate but simple 
              assisted car driving system on a low computation robocar with cheap 
              tools like infrared and ultrasound sensors. Using an SSD(Single Shot Dectotor) detection model, I was able to achieving an average 
              of 7.5 fps, which is extremely effecient with only a raspberry pi 
              and intel nueral stick. When comparing to using RCNN, Faster RCNN, Yolo 3.0, SSD
              was the best option. There is a lot more of this project that can be developed, 
              and I hope to one day develop a detection model myself and continue this project on.
            </p>
          </div>
          <div className="tags-item">
                    <FaTags size={25} className="icon"/>
                    <p> OpenVino, SSD-Vision-Detection, Python</p>
          </div>
          </>
        )}

        {project.id === "5" && (
          <>
          <img src={`${process.env.PUBLIC_URL}/data/Blue_Harbor.png`} alt="image?" style={{ width: '200px', height: 'auto' }} />
          <p>
            I helped co-found Blue Harbor Club, an organization across multiple international schools mainly in Shanghai. We collaborate with several local autism service centers to find solutions to help the autism population in China. Our main agenda is to create and distribute autism-friendly videos teaching skills of self-sufficiency in everyday tasks. 
            Currently, we are unable to host an online databse of our own videos yet due to restrictions but have distributed our videos to local autism centers and their online channels.
          </p>
          <div className="github-item">
                    <FaLink size={25} className="icon"/>
                    <a href="https://blue-harbor.org/index.html#home" target="_blank" rel="noopener noreferrer">Website Link</a>
          </div>
          </>
        )}

        {project.id === "6" && (
          <>
          <img src={`${process.env.PUBLIC_URL}/data/home-background.jpg`} alt="image?" />
          <p>
            Created own personal website for showing resume, projects, and experiences. Used Javascript and CSS under React framework
          </p>
          <div className="github-item">
                    <FaGithub size={25} className="icon"/>
                    <a href="https://github.com/JeffreyLiang321/My-Portfolio-Website" target="_blank" rel="noopener noreferrer">Website Code</a>
          </div>
          <div className="tags-item">
                    <FaTags size={25} className="icon"/>
                    <p> CSS, Javascript, React-App</p>
          </div>
          </>
        )}

  
      
        
        
      </div>
    </div>
  ) : "";
};

export default Popup;
