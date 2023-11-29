"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

const useInfiniteScroll = (API, limit) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const lastEntry = entries[entries.length - 1];

      if (lastEntry.isIntersecting && hasMore) {
        fetchMoreItems(API);
      }
    });

    if (observer && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [hasMore, ref, page]);

  // req
  const fetchMoreItems = async (API) => {
    const params = {
      limit,
      page,
    };
    try {
      const { data } = await axios.get(API, {
        params,
      });

      if (!data.error) {
        setData((prev) => [...prev, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error fetching more items:", error);
    }
  };

  return { ref, hasMore, data, setData };
};

export default useInfiniteScroll;
