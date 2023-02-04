import Gallery from "../images/gallery.png"

function Register() {
    return(
        <div className = "formContainer">
            <div className = "formWrapper">
                <span className = "logo">Chat App</span>
                <span className = "title">Register</span>
                <form>
                    <input type = "text" placeholder = "display name"/>
                    <input type = "email" placeholder = "email"/>
                    <input type = "password" placeholder = "password"/>
                    <input type = "file" id="avatar" style={{display : "none"}}/>
                    <label htmlFor="avatar">
                        <img src={Gallery} alt = "gallery-icon" width="40" height="40"/>
                        <span>Add your avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Have an Account ? Login</p>
            </div>
        </div>
    )
}

export default Register;