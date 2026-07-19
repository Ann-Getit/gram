
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
        <p className="namedprofile">{username}</p>

        <p className="reactieprofile">{message}</p>
    </div>
         </div>

   
        </>
    );
};

export default Chatsectioncard; 





