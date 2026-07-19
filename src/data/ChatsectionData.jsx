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
            username: "john doeXjohndoeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "Hallo, world ",
        },
            {
            id: 3,
            username: "john doeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "hallo, how are you ",
        },
        {
            id: 4,
            username: "john doeXjohndoeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "Hallo, world ",
        },
            {
            id: 5,
            username: "john doeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "hallo, how are you ",
        },
        {
            id: 6,
            username: "john doeXjohndoeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "Hallo, world ",
        },
            {
            id: 7,
            username: "john doeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "hallo, how are you ",
        },
        {
            id: 8,
            username: "john doeXjohndoeX",
            avatar: "pics/vogel-unsplash.jpg",
            message: "Hallo, world ",
        },
        ]
    return(
        <>
 
        {chat1lists.map((chat1list) => (
        <Chatsectioncard
          key={chat1list.id}
          avatar={chat1list.avatar}
          username={chat1list.username}
          message={chat1list.message} 
        />
      ))}
  
        </>
    );
};
export default ChatsectionData;