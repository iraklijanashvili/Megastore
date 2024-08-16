import styled from "styled-components";
import globe from "../assets/svg/globe.svg";
import location from "../assets/svg/location.svg";
import user from "../assets/svg/user.svg";
import cart from "../assets/svg/cart.svg";
import telephone from "../assets/svg/telephone.svg";
import searchIcon from "../assets/svg/searchIcon.svg";
import geoFlag from "../assets/svg/geoFlag.svg";
import Logo from "./Logo";
import { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Nav = styled.div`
  max-width: 1440px;
  padding: 14px 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    border-bottom: 1px solid #cfcfcf;
  }
`;
interface NavLiProps {
  width?: string;
  height?: string;
  borderRight?: string;
  justifyContent?: string;
  display?: string;
}
const NavLi = styled.div<NavLiProps>`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: center;
  border-right: ${(props) => props.borderRight || "1px solid #cfcfcf"};
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    display: ${(props) => props.display || "flex"};
    width: ${(props) => props.width || "150px"};
  }
`;
interface IconsProps {
  width?: string;
  height?: string;
}
const Icons = styled.img<IconsProps>`
  width: ${(props) => props.width || "17px"};
  height: ${(props) => props.height || "17px"};
  display: flex;
  cursor: pointer;
  transition: transform 0.3s ease;
  ${NavLi}:hover & {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    width: ${(props) => props.width || "20px"};
    height: ${(props) => props.height || "20px"};
  }
`;

const NavUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputForm = styled.input`
  width: 100%;
  height: 24px;
  border: 2px solid #bbbaba;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: none;
  padding: 15px 10px;
  color: black;
  font-size: 16px;

  ::placeholder {
    color: black;
  }
  &:focus {
    border-color: black;
    border-right: none;
    outline: none;
  }
`;

const SearchBtn = styled.button`
  border: 0px;
  background-color: rgb(240, 54, 77);
  height: 24px;
  width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 17px 20px;
  cursor: pointer;
  outline: none;
  border-left: 2px solid rgb(240, 54, 77);
  p {
    color: grey;
  }
  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 16px;
  @media (min-width: 1024px) {
    max-width: 600px;
    margin-left: 30px;
  }
`;
const DesktopSearchContainer = styled(SearchContainer)`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const MobileSearchContainer = styled(SearchContainer)`
  display: flex;

  @media (min-width: 1024px) {
    display: none;
  }
`;
const LanguageSelectorContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;
interface IconsTitleProps {
  padding?: string;
}
const IconsTitle = styled.p<IconsTitleProps>`
  font-size: 14px;
  font-weight: 600;
  display: none;
  padding: ${(props) => props.padding || "0px"};
  cursor: pointer;
  transition: color 0.3s ease;

  ${NavLi}:hover & {
    color: #f0364d; // Change this to your preferred hover color
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavBar: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <Header>
        <Nav>
          <NavUl>
            <NavLi width="100%" height="100%" borderRight="0px">
              <Logo />
            </NavLi>
          </NavUl>
          <DesktopSearchContainer>
            <InputForm
              type="text"
              placeholder=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSearch(searchQuery);
                }
              }}
            />
            <SearchBtn onClick={() => onSearch(searchQuery)}>
              <img src={searchIcon} alt="Search" />
            </SearchBtn>
          </DesktopSearchContainer>

          <NavUl>
            <NavLi>
              <Icons src={globe} alt="" />
              <LanguageSelectorContainer>
                <Icons width="16px" height="16px" src={geoFlag} alt="" />
                <IconsTitle padding="0px 0px 0px 5px">GE</IconsTitle>
              </LanguageSelectorContainer>
            </NavLi>
            <NavLi>
              <Icons src={location} alt="" />
              <IconsTitle>მაღაზია</IconsTitle>
            </NavLi>
            <NavLi>
              <Icons src={user} alt="" />
              <IconsTitle>ჩემი ანგარიში</IconsTitle>
            </NavLi>
            <NavLi display="none">
              <Icons src={telephone} alt="" />
            </NavLi>
            <NavLi borderRight="0px" justifyContent="end">
              <Icons src={cart} alt="" />
            </NavLi>
          </NavUl>
        </Nav>
        <MobileSearchContainer>
          <InputForm
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSearch(searchQuery);
              }
            }}
          />
          <SearchBtn onClick={() => onSearch(searchQuery)}>
            <img src={searchIcon} alt="Search" />
          </SearchBtn>
        </MobileSearchContainer>
      </Header>
    </>
  );
};
export default NavBar;
