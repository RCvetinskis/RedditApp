"use client";
import { useEffect, useState } from "react";
import axios from "axios";
const useGetData = (API) => {
  const [data, setData] = useState({
    isLoading: true,
    message: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        setData((prevData) => ({ ...prevData, isLoading: true }));
        const response = await axios.get(API);
        setData({
          isLoading: false,
          message: "",
          ...response.data,
        });
      } catch (error) {
        console.error("Error in getData:", error);
      }
    };

    getData();
  }, [API]);

  return { data, setData };
};

export default useGetData;
