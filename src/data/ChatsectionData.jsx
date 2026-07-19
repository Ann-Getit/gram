import Chatsectioncard from "../pages/Chatsectioncard";

const ChatsectionData = () => {

     const chat1lists = [
            {
            id: 1,
            username: "john doeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "hallo, how are you ",
        },
        {
            id: 2,
            username: "john doeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "hallo, how are you ",
        },
        ]
    return(
        <>
         <div className="lists-chat">
        {chat1lists.map((chat1list) => (
        <Chatsectioncard
          key={chat1list.id}
          avatar={chat1list.avatar}
          username={chat1list.username}
          message={chat1list.message} 
        />
      ))}
      </div>
        </>
    );
};
export default ChatsectionData;