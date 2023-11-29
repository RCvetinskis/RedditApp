import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";

const useGetSocket = (callName, data, setData) => {
  const { socket } = useContext(MyContext);
  useEffect(() => {
    socket.on(callName, (newPost) => {
      setData((prevData) => {
        const updatedData =
          prevData.length === 0 ? [newPost] : [newPost, ...prevData];
        return updatedData;
      });
    });
    return () => {
      socket.off(callName);
    };
  }, [socket]);
  return data;
};

export default useGetSocket;
