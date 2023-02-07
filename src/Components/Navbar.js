function Navbar(){
    return(
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt= ""></img>
                <span className = "user">Ayush</span>
                <button className = "logout">Logout</button>
            </div>
        </div>
    )
}

export default Navbar;