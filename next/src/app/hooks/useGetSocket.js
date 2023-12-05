import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";

const useGetSocket = (data, setData, socketCallName) => {
  const { socket } = useContext(MyContext);
  useEffect(() => {
    const handleNewPost = (newPost) => {
      setData((prevData) => {
        let updatedData = prevData.map((comment) => {
          if (
            newPost.parentComment &&
            comment._id === newPost.parentCommentId
          ) {
            return {
              ...comment,
              replies: [newPost, ...comment],
            };
          }

          return comment;
        });

        if (!newPost.parentComment) {
          updatedData = [newPost, ...updatedData];
        }

        return updatedData;
      });
    };
    socket.on(socketCallName, handleNewPost);
    return () => {
      socket.off(socketCallName, handleNewPost);
    };
  }, [socket, socketCallName]);

  return data;
};

export default useGetSocket;
