import Gallery from "../images/gallery.png"

function ChatInput(){
    return(
        <div className ="chatInput">
            <input type="text" placeholder="write your message here"></input>
            <div className="send">
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Gallery} alt = "Gallery" style={{height : "20px"}}/>
                </label>
                <button className="sendBtn">Send</button>
            </div>
        </div>
    )
}

export default ChatInput;