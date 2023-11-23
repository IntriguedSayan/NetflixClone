"use client"
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import netflixsvg from "../../assets/netflix-svgrepo-com.svg"
import Image from "next/image"

function Navbar() {
  const [data, setData] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      id: "home",
      title: "Home",
      path: "/browse",
    },
    {
      id: "tv",
      title: "TV",
      path: "/tv",
    },
    {
      id: "movies",
      title: "Movies",
      path: "/movies",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      
      if (typeof window !== undefined) {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //tailwind-merge
  return (
    <div className="bg-black h-44 ">
      <div>
        <Image src={netflixsvg} className="h-40"  alt="Netflix" priority />
      </div>
      <h1
        className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[#1414141] `}
      >
      
              
        
    
      </h1>
    </div>
  );
}

export default Navbar;
