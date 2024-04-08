import Image from 'next/image';
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
<nav className="navbar navbar-expand-sm bg-dark justify-content-center fixed-top">
<a className="navbar-brand text-light" href="/">
<Image src={"/images/logo-no-background.svg"} width={250} height={100} alt={"D Day Attack 로고"} />  
</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link text-white" href="/dday">기념일 관리</a>
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