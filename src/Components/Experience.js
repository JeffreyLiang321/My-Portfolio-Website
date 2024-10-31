// Experience.js
import ExperienceHeader from "./ExperienceHeader";
import { FaDotCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience">
      <ExperienceHeader />

      <div className="rows">
        {/* <FaDotCircle className="icon" /> */}
        <img src={`${process.env.PUBLIC_URL}/data/BTCG.png`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Brown Consulting and Technology Group </h2>
            <h3> September 2024 - Present, Project Lead </h3>
          </div>
          <p>
            - Managing three workflows for DayGuard, a Brown startup alcohol aid gel stick CPG business, including in-person retail, campus ambassadorship, and online expansion. <br />
            - Providing direct support to facilitating in-person retail negotiations, developing an ambassador recruitment and training plan, and supporting social media marketing strategies to drive brand awareness and sales. <br />
            - Maintaining clear communication within the team, manage schedules, and designate weekly tasks to ensure smooth progress, while providing oversight and adjusting timelines as needed. <br />
          
          </p>
        </div>
      </div>
      <div className="rows">
        {/* <FaDotCircle className="icon" /> */}
        <img src={`${process.env.PUBLIC_URL}/data/Blue_Harbor.png`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Blue Harbor </h2>
            <h3> September 2022 - Present, Co-Founder </h3>
          </div>
          <p>
            - Co-founded Blue Harbor, an organization dedicated to combating the lack of autism-support services across China.<br />
            - Defined a framework for creating autism-friendly videos and organized initiative events, establishing our club across 7 Chinese
              international schools with 200+ members, focused on teaching autonomy and social skills to those on the autism spectrum. <br />
            - Collaborating with 10 autism service centers to consult experts, host charity events, and autism employment events.<br />
            - Distributed over 100+ created videos since Blue Harbor’s creation and raised $6000 just this year.

          </p>
        </div>
      </div>
      <div className="rows">
        {/* <FaDotCircle className="icon" /> */}
        <img src={`${process.env.PUBLIC_URL}/data/Xiaomi1.png`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Xiaomi Technology </h2>
            <h3> June 2024 - August 2024, Internship </h3>
          </div>
          <p>
            - Worked within Xiaomi phone department in exploring and dictating current leading AI models for multiple medias <br />
            - Helped form technical reports stating the fundamental strengths within model architectures, and methods for improving inference performance.<br />
          </p>
        </div>
      </div>
      <div className="rows">
        {/* <FaDotCircle className="icon" /> */}
        <img src={`${process.env.PUBLIC_URL}/data/Kognitiv-Edge.png`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Kognitiv Edge </h2>
            <h3> January 2024 - August 2024, Internship </h3>
          </div>
          <p>
            - Working with startup company Kognitiv Edge on backup development.<br />
            - Using terraform and microsoft azure with an intern team.<br />
            - Applying skills of continuous integration and continuous delivery, infrastructure as code.
          </p>
        </div>
      </div>
      <div className="rows">
        {/* <FaDotCircle className="icon" /> */}
        <img src={`${process.env.PUBLIC_URL}/data/Dojo.png`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Innovation Dojo </h2>
            <h3> Feb 2024 - May 2024, Project Pitcher </h3>
          </div>
          <p>
            - Interviewed over 10+ private equity associates, primary care and specialist doctors to validate ”Docferral”. <br />
            - Pitched ”Docferral”, a startup idea for private practice doctors to form necessary connections with specialized doctors and conduct electronic patient referrals.<br />
            - Performed competitor analysis across 4 core health components against 5 leading telemedicine and electronic health referral
              companies. <br />
              - Awarded 3rd place pitching Docferral, a private practice work and media startup idea in Innovation Dojo competition to esteemed judges. <br />
          </p>
        </div>
      </div>
      
      <div className="rows">
        {/* <FaDotCircle className="icon" /> */}
        <img src={`${process.env.PUBLIC_URL}/data/Brown.jpg`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Brown University </h2>
            <h3> September 2023 - Present, Undergraduate Degree </h3>
          </div>
          <p>
            - Concentrating in Computer Science and Economics Joint Major
          </p>
        </div>
      </div>
      
      <div className="rows">
        {/* <FaDotCircle size={25} className="icon" /> */}
        <img src={`${process.env.PUBLIC_URL}/data/SAS.jpg`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Shanghai American School Pudong </h2>
            <h3> August 2019 - June 2023, High School Degree </h3>
          </div>
        </div>
      </div>
    </div>

    

    
  );
};

export default Experience;

