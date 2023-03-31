/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect } from "react";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { userState } from "../atom/userAtom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { sidebarState } from "../atom/sideBarAtom";

const Sidebar = () => {
  const router = useRouter();
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [hasSidebar, setSidebar] = useRecoilState(sidebarState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const docRef = doc(db, "users", auth.currentUser.providerData[0].uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          }
        };
        fetchUser();
      }
    });
  });

  const onSignOut = () => {
    signOut(auth);
    setCurrentUser(null);
  };

  return (
    <div className="">
      <div className="sm:flex hidden">
        <div className="hideen sm:flex flex-col p-2 xl:items-start fixed z-50 bg-white h-screen">
          <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image
              width="50"
              height="50"
              alt="yyy"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
            ></Image>
          </div>
          <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            {currentUser && (
              <>
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
              </>
            )}
          </div>

          {currentUser ? (
            <>
              <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                Tweet
              </button>

              {/* Mini-Profile */}

              <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img
                  onClick={onSignOut}
                  src={currentUser.userImg}
                  alt="user-img"
                  className="h-10 w-10 rounded-full xl:mr-2"
                />
                <div className="leading-5 hidden xl:inline">
                  <h4 className="font-bold">{currentUser.name}</h4>
                  <p className="text-gray-500">
                    {currentUser.email.split("@")[0]}
                  </p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
              </div>
            </>
          ) : (
            <div>
              {" "}
              <button
                onClick={() => router.push("/auth/Signin")}
                className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
              >
                Sign in
              </button>
              <div
                className="xl:hidden bg-sky-100 rounded-2xl"
                onClick={() => router.push("/auth/Signin")}
              >
                <SidebarMenuItem text="Explore" Icon={UserIcon} />{" "}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sm:hidden">
        {hasSidebar ? (
          <div className="hideen transition translate-x-1 duration-300 sm:flex flex-col p-2 xl:items-start fixed z-50 bg-white h-screen">
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
              <Image
                width="50"
                height="50"
                alt="yyy"
                src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              ></Image>
            </div>
            <div className="mt-4 mb-2.5 xl:items-start">
              <SidebarMenuItem text="Home" Icon={HomeIcon} active  />
              <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
              {currentUser && (
                <>
                  <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                  <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                  <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                  <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                  <SidebarMenuItem text="Profile" Icon={UserIcon} />
                  <SidebarMenuItem
                    text="More"
                    Icon={DotsCircleHorizontalIcon}
                  />
                </>
              )}
            </div>

            {currentUser ? (
              <>
                <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
                  Tweet
                </button>

                {/* Mini-Profile */}

                <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                  <img
                    onClick={onSignOut}
                    src={currentUser.userImg}
                    alt="user-img"
                    className="h-10 w-10 rounded-full xl:mr-2"
                  />
                  <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold">{currentUser.name}</h4>
                    <p className="text-gray-500">
                      {currentUser.email.split("@")[0]}
                    </p>
                  </div>
                  <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
                </div>
              </>
            ) : (
              <div>
                {" "}
                <button
                  onClick={() => router.push("/auth/Signin")}
                  className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
                >
                  Sign in
                </button>
                <div
                  className="xl:hidden bg-sky-100 rounded-2xl"
                  onClick={() => router.push("/auth/Signin")}
                >
                  <SidebarMenuItem text="Explore" Icon={UserIcon} />{" "}
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidebar;
