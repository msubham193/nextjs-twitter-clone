import { useRouter } from "next/router";
import React from "react";

const SidebarMenuItem = ({ text, Icon, active }) => {

   const router = useRouter()


  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3" onClick={()=>text=="Home"?router.push("/"):""}   >
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
};

export default SidebarMenuItem;
