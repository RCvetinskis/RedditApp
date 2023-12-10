import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

const SendMessage = () => {
  const [inputValue, setInputValue] = useState("");
  const handleMessage = (e) => {
    console.log(inputValue);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleMessage} className="flex gap-3 items-center">
      <textarea
        className="textarea  textarea-bordered w-full resize-none h-[50px]"
        placeholder="Aa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></textarea>
      <button type="submit" className="btn btn-ghost">
        <IoMdSend size={16} />
      </button>
    </form>
  );
};

export default SendMessage;
