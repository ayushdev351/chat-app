import Messages from "./Messages";
import ChatInput from "./ChatInput";

function Chat() {
    return (
        <div className="chat">
            <div className="header">
                <span>User</span>
                <div className="icons">
                    <span>im1</span>
                    <span>im1</span>
                    <span>im1</span>
                </div>
            </div>
            <Messages/>
            <ChatInput/>
        </div>
    )
}

export default Chat;