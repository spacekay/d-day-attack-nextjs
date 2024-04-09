import Image from 'next/image';
import { useState } from "react";
import logoImage from '../public/images/logo-no-background.svg';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { data: session } = useSession();

  return (
<nav className="navbar navbar-expand-sm bg-dark justify-content-center fixed-top">
<a className="navbar-brand text-light" href="/">
  <div className="logo">
  <Image src={logoImage} priority alt={"D Day Attack 로고"} />
    </div>  
</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link text-white" href="/dday">기념일 관리</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="/alarm">알람 조회</a>
    </li>
    {(session) &&
        <li className="nav-item">
        <a className="nav-link text-secondary" href="/logout">로그아웃</a>
      </li>
    }
  </ul>
</nav>
  );
};

export default Navbar;