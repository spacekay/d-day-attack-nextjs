import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
<nav className="navbar navbar-expand-sm bg-dark justify-content-center fixed-top">
<a className="navbar-brand text-light" href="/">D Day Attack(로고)</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link text-white" href="/dday">디데이 관리</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="/alarm">알람 조회</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href="/logout">로그아웃</a>
    </li>
  </ul>
</nav>
  );
};

export default Navbar;