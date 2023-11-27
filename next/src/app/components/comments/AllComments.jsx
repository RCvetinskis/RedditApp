"use client";
import React, { useContext, useEffect } from "react";
import useGetData from "@/app/hooks/useGetData";
import { SERVER_API } from "../../../../utils/API";
import SingleComment from "./SingleComment";
import LoadingScreen from "../LoadingScreen";
import MyContext from "@/app/context/MyContext";

const AllComments = ({ postId: id }) => {
  const { socket } = useContext(MyContext);
  const API = SERVER_API.getComment(id);

  const { data, setData } = useGetData(API);

  const { isLoading, comments } = data;
  useEffect(() => {
    socket.on("new-comment", (newComment) => {
      setData((prevData) => ({
        ...prevData,
        comments: [newComment, ...prevData?.comments],
      }));
    });
    return () => {
      socket.off("new-comment");
    };
  }, [socket]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {comments?.map((comment) => (
            <SingleComment key={comment._id} comment={comment} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllComments;
