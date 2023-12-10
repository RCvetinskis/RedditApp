import React from "react";
import SingleConversation from "./SingleConversation";
const Conversations = ({ handleOpenChat }) => {
  const dummyUsers = [
    {
      avatar:
        "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
      username: "Martynas",
      _id: 1,
      conversation: {
        _id: 1,
      },
    },
    {
      avatar:
        "https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/305197593_632869784871777_2654896424939907776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vIFoXl2YJccAX_VBv44&_nc_ht=scontent.fvno8-1.fna&oh=00_AfA1CH2g_B_WRi_7eVF7T2O9uQGpSaRLttxw_s9YK6dc4w&oe=6579D07F",
      username: "Antanas",
      _id: 2,
      conversation: {
        _id: 1,
      },
    },
    {
      avatar:
        "https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/305197593_632869784871777_2654896424939907776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vIFoXl2YJccAX_VBv44&_nc_ht=scontent.fvno8-1.fna&oh=00_AfA1CH2g_B_WRi_7eVF7T2O9uQGpSaRLttxw_s9YK6dc4w&oe=6579D07F",
      username: "Juozas",
      _id: 3,
      conversation: {
        _id: 1,
      },
    },
    {
      avatar:
        "https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/305197593_632869784871777_2654896424939907776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vIFoXl2YJccAX_VBv44&_nc_ht=scontent.fvno8-1.fna&oh=00_AfA1CH2g_B_WRi_7eVF7T2O9uQGpSaRLttxw_s9YK6dc4w&oe=6579D07F",
      username: "Kazys",
      _id: 4,
      conversation: {
        _id: 1,
      },
    },
    {
      avatar:
        "https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/305197593_632869784871777_2654896424939907776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vIFoXl2YJccAX_VBv44&_nc_ht=scontent.fvno8-1.fna&oh=00_AfA1CH2g_B_WRi_7eVF7T2O9uQGpSaRLttxw_s9YK6dc4w&oe=6579D07F",
      username: "Algis",
      _id: 5,
      conversation: {
        _id: 1,
      },
    },
  ];
  const dummyConversations = [
    {
      _id: 1,
      users: [
        dummyUsers[0],
        dummyUsers[1],
        dummyUsers[2],
        dummyUsers[3],
        dummyUsers[4],
      ],
      messages: [
        {
          user: dummyUsers[0],
          message: "Hi Antanas",
        },
        {
          user: dummyUsers[1],
          message:
            "Hi Martynas hi hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        },
        {
          user: dummyUsers[2],
          message: "Kurva lohai",
        },
        {
          user: dummyUsers[3],
          message: "Kurva lohai",
        },
        {
          user: dummyUsers[4],
          message: "Kurva lohai",
        },
        {
          user: dummyUsers[0],
          message: "Jebac ja avatar!?!",
        },
      ],
    },
    {
      _id: 2,
      users: [dummyUsers[0], dummyUsers[1]],
      messages: [
        {
          user: dummyUsers[0],
          message: "Hi Antanas",
        },
        {
          user: dummyUsers[1],
          message:
            "Hi Martynas hi hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        },
      ],
    },
  ];

  return (
    <div className="h-[100vh]  overflow-auto">
      {dummyConversations.map((conversation) => (
        <SingleConversation
          key={conversation._id}
          conversation={conversation}
          handleOpenChat={handleOpenChat}
        />
      ))}
    </div>
  );
};

export default Conversations;
