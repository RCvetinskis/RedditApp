import { useEffect, useState } from "react";

const useTimeDifference = (createdAt) => {
  const [timeAgo, setTimeAgo] = useState("");
  const timeDifference = (current, previous) => {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    const elapsed = current - previous;

    const minutes = Math.round(elapsed / msPerMinute);
    const hours = Math.round(elapsed / msPerHour);
    const days = Math.round(elapsed / msPerDay);

    if (minutes < 1) {
      return "Just now";
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (days < 7) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else {
      const formattedDate = new Date(previous).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return `on ${formattedDate}`;
    }
  };

  useEffect(() => {
    const currentTime = new Date();
    const postTime = new Date(createdAt);
    setTimeAgo(timeDifference(currentTime, postTime));
  }, [createdAt]);
  return timeAgo;
};

export default useTimeDifference;
