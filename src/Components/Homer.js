const Home = () => {
    return ( 
        <div className="home">
            <img src={`${process.env.PUBLIC_URL}/data/home-background.jpg`} alt="image?" />
            <div className = "home-text">
            <h1> Jeffrey Liang</h1>
            <h2> Web and App Developer, Machine Learning Enthusiast</h2>
            </div>
        </div>
     );
}
export default Home;