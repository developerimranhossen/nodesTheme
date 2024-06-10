"use client";
import Image from "next/image";
import HamburgerImg from "../public/hamburger.svg";
import CrossImg from "../public/cross.svg";

import { useState } from "react";
import CustomLink from "./CustomLink";

function HamburgerMenu() {
  const navs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Elements", path: "/elements" },
    { name: "Contact", path: "/contact" },
  ];
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? (
          <Image src={HamburgerImg} height={40} width={40} alt="" />
        ) : (
          <Image src={CrossImg} height={40} width={40} alt="" />
        )}
      </button>
      <ul>
        {navs.map((nav) => (
          <li key={nav.name}>
            <CustomLink path={nav.path}>{nav.name}</CustomLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HamburgerMenu;
