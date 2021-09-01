import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`

const Nav = () => {
  return (
      <NavWrapper>
        <ul>
          <li>
            <Link to="/tags">标签页面</Link>
          </li>
          <li>
            <Link to="/">记账页面</Link>
          </li>
          <li>
            <Link to="/statistics">统计页面</Link>
          </li>
        </ul>
      </NavWrapper>
  )
}

export default Nav;