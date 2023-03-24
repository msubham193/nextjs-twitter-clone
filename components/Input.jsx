/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import {
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";
const Input = () => {
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null);
    const currentUser={
        userImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"

    }

    const sendPost = async () => {
       
    
    }


     const onSignOut = ()=>{

     }
  const addImageToPost = ()=>{

  }
  return (
    <>
    {currentUser && (
      <div className="flex  border-b border-gray-200 p-3 space-x-3">
        <img
          onClick={onSignOut}
          src={currentUser?.userImg}
          alt="user-img"
          className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
        />
        <div className="w-full divide-y divide-gray-200">
          <div className="">
            <textarea
              className="w-full border border-gray-200 text-gray-600 p-1  focus:outline-none  text-base  tracking-wide min-h-[50px] "
              rows="2"
              placeholder="What's happening?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
          </div>
          {selectedFile && (
            <div className="relative">
              <XIcon
                onClick={() => setSelectedFile(null)}
                className="border h-7 text-black absolute cursor-pointer shadow-md border-white m-1 rounded-full"
              />
              <img
                src={selectedFile}
                className={`${loading && "animate-pulse"}`}
              />
            </div>
          )}
          <div className="flex items-center justify-between pt-2.5">
            {!loading && (
              <>
                <div className="flex">
                  <div
                    className=""
                    onClick={() => filePickerRef.current.click()}
                  >
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <input
                      type="file"
                      hidden
                      ref={filePickerRef}
                      onChange={addImageToPost}
                      
                    />
                  </div>
                  <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                </div>
                <button
                  onClick={sendPost}
                  disabled={!input.trim()}
                  className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                >
                  Tweet
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Input