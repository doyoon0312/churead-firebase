import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiEditBoxFill, RiHome5Fill, RiHome5Line } from "react-icons/ri";
// import { RiHome5Fill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
// import { RiEditBoxFill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa6";
import { FaRegUser, FaUser } from "react-icons/fa6";

const Nav = () => {
  // logic
  /**
   * 1. navList라는 변수를 만든다(배열)
   * 2. navList 배열에는 각 네비게이션에 대한 데이터를 객체로 작성
   * 3. li태그 한개만 놔두고 다 삭제
   * 4. html부분에서 li태그를 navList의 map을 이용해서 반복 생성함
   * 5. li태그에 key라는 prop에 요소의 id값 연결
   * 6. html요소에 속성(to, icon)을 navList의 각 객체의 값으로 연결
   */

  const location = useLocation(); // 현재 머무르는 페이지 정보 객체
  /**
   * 사용자가 현재 머무르는 페이지에 따라 nav 아이콘 활성환 아이콘으로 변경
   * 1. 사용자가 현재 머무르는 페이지의 pathname 가져오기
   * 2. 해당 pathname과 map을 돌리는 nav라는 요소의 pathname이 같은지 체크
   * 3. 체크한 값이 true면 activeIcon으로 변경
   * 4. 체크한 값이 false면 icon으로 보여주기
   */

  const navList = [
    {
      id: 1,
      pathname: "/",
      icon: <RiHome5Line size={"28px"} />,
      activeIcon: <RiHome5Fill size={"28px"} />,
    },
    {
      id: 2,
      pathname: "/post",
      icon: <RiEditBoxLine size={"28px"} />,
      activeIcon: <RiEditBoxFill size={"28px"} />,
    },
    {
      id: 3,
      pathname: "/profile",
      icon: <FaRegUser size={"24px"} />,
      activeIcon: <FaUser size={"24px"} />,
    },
  ];

  // view
  return (
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        {navList.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.pathname} className="block p-6">
              {/* 사용자가 현재 머무르는 페이지 pathname과 요소의 pathname 같은지 체크하여 activeIcon 보여주기 */}
              {location.pathname === nav.pathname ? nav.activeIcon : nav.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
