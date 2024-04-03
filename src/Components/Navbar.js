import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const navigateToContacts = () => {
    // Use the history object to navigate to the contacts page
    navigate('/Contacts');
  };

    return ( <nav className="navbar">
      <h1>Jeffrey Liang</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About Me</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experiences</Link>
        <button onClick={navigateToContacts} style={{
          color: "white",
          backgroundColor: "#66cdaa",
          borderRadius: "50px",
          border: "none",
          padding: "8px",
          cursor: "pointer"
        }}>
          Contacts
        </button>
      </div>
    </nav> );
}
 
export default Navbar;