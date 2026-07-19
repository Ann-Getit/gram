
import "./Chatsectioncard.css";

function Chatsectioncard ({

  avatar,
  username,
  message,
})
 {

    return (
        <>
        <div className="lists-chat">
     <div className="profilecirkel">
                <img src={avatar} className="mini-profilepic-content"/>
         </div>

     <div className="chatandnames">
        <div className="namedprofile">{username}</div>

        <div className="reactieprofile">{message}</div>
    </div>
    </div>
        </>
    );
};

export default Chatsectioncard; 





