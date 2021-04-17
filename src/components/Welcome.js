import Logo from "../img/Logo.png";

const Welcome = () => {
    return (
        <div className="text-center">
            <br></br>
            <h1>Welcome to CodeTrack</h1>
                <img
                src={[Logo]} 
                width="800"
                height="900"
                ></img>
            <br></br>
        </div>
    )
}

        
export default Welcome; 
