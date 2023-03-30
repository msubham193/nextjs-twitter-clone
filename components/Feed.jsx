import React, { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import Input from "./Input";
import Post from "./Post";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atom/sideBarAtom";
const Feed = () => {
  // const posts = [
  //   {
  //     id:1,
  //     name:"Subham Mishra",
  //     username:"msubham193",
  //     img:"https://images.unsplash.com/photo-1679933094710-35d909ec94b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
  //   },
  //   {
  //     id:2,
  //     name:"Anil kumar Biswal",
  //     username:"anil@123",
  //     img:"https://images.unsplash.com/photo-1679957907556-f79705b23c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
  //   },
  //   {
  //     id:3,
  //     name:"Nirmalya Jena",
  //     username:"jena@143",
  //     img:"https://images.unsplash.com/photo-1679678691014-eba529defb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
  //   }
  // ]

  const [posts, setPosts] = useState([]);
  const [hasSidebar, setSidebar] = useRecoilState(sidebarState);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0  bg-white border-b border-gray-200 ">
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
          <Image
            width="50"
            height="50"
            alt="yyy"
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          ></Image>
        </div>
        <div
          className=" hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9"
          onClick={() => setSidebar(!hasSidebar)}
        >
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post.id} id={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Feed;
