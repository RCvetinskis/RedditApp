"use client";
import SingleComment from "./SingleComment";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";
import useGetSocket from "@/app/hooks/useGetSocket";

const AllComments = ({ API, socketCallName }) => {
  const { data, setData, ref, hasMore } = useInfiniteScroll(API, 10);

  useGetSocket(data, setData, socketCallName);

  return (
    <>
      <div className="mt-10 p-3  text-gray-500  flex flex-col gap-5  ">
        {data?.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}

        {hasMore ? (
          <div ref={ref} className="animate-bounce  semi-light-purpole-color">
            Loading Items
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AllComments;
