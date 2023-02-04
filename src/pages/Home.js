import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

function Home() {
    return(
        <div className="homeContainer">
            <div className="homeWrapper">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}

export default Home;