import styled from "styled-components";
import { useMatch } from "react-router-dom";

import { PATH } from "../constants/constants.ts";
import { Icons } from "./header-components/icons.tsx";
import { PageLink } from "./header-components/page-link.tsx";

const Nav = styled.nav``;

const Logo = styled.svg``;
const Items = styled.ul`
  display: flex;
  background-color: black;
  height: 100px;
`;

const Header = () => {
  const pathNames = [
    PATH.POPULAR,
    PATH.COMINGSOON,
    PATH.NOWPLAYING,
    PATH.DISNEY,
    PATH.MARVEL,
  ];
  const pageNames = [
    "POPULAR",
    "COMING SOON",
    "NOW PLAYING",
    "DISNEY",
    "HEROS",
  ];
  const pathDatas = pathNames.map((path, index) => [
    path,
    Boolean(useMatch(path)),
    pageNames[index],
  ]);
  return (
    <>
      <Nav>
        {/* <Logo /> */}
        <Items>
          {pathDatas.map((pathInfo, index) => {
            const [path, match, pageName] = pathInfo;
            return (
              <>
                <PageLink
                  key={index}
                  path={path as string}
                  match={match as boolean}
                  text={pageName as string}
                  icon={Icons[index]}
                ></PageLink>
              </>
            );
          })}
        </Items>
      </Nav>
    </>
  );
};

export default Header;
