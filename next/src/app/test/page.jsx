"use client";
import React from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

const page = () => {
  const { ref, hasMore, data } = useInfiniteScroll();

  return (
    <div className="mt-[10rem]">
      {data?.map((item) => (
        <div className="p-3 bg-red-400  m-3  h-[400px]" key={item._id}>
          <p>{item.user.username}</p>
          <p>{item.title}</p>
          <p>{item.overview}</p>
        </div>
      ))}
      {hasMore && <div ref={ref}>Load more items</div>}
    </div>
  );
};

export default page;
