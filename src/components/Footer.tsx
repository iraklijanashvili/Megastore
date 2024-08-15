import styled from "styled-components";
import footerArrow from "../assets/svg/footerArrow.svg";
import americanExpress from "../assets/svg/americanExpress.svg";
import americanExpressBlue from "../assets/svg/americanExpressBlue.svg";
import visa from "../assets/svg/visa.svg";
import visaBlue from "../assets/svg/visaBlue.svg";
import masterCard from "../assets/svg/masterCard.svg";
import Logo from "./Logo";
import hisense from "../assets/png/hisense.png";
import hitachi from "../assets/png/hitachi.png";
import lenovo from "../assets/png/lenovo.png";
import philips from "../assets/png/philips.png";
import saeco from "../assets/png/saeco.png";
import samsung from "../assets/png/samsung.png";
import simfer from "../assets/png/simfer.png";
import skyworth from "../assets/png/skyworth.png";
import toshiba from "../assets/png/toshiba.png";
import location from "../assets/svg/location.svg";
import mobileIcon from "../assets/svg/footerMobileIcon.svg";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import mail from "../assets/svg/mail.svg";
import FooterEmailInput from "./FooterEmailInput";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: 20px;
  color: white;
  background-color: #e85257;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 992px) {
    background-color: white;
    color: black;
    border-top: 2px solid #e85257;
  }
`;

const TopOfPageButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  cursor: pointer;
  background-color: #fa6368;
  @media (min-width: 992px) {
    display: none;
  }
`;

const TopOfPageText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 3px;
  @media (min-width: 992px) {
    display: none;
  }
`;

const FooterNavigation = styled.nav`
  max-width: 1440px;
  width: 100%;
  padding: 50px 44px;
  @media (min-width: 992px) {
    padding: 0px 16px;
  }
`;

const MobileNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media (min-width: 992px) {
    display: none;
  }
`;

const DesktopNavList = styled.ul`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`;

const NavListItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    max-width: 100%;
    border-right: 1px solid #dfdfdf;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    margin-bottom: 0px;
    height: 35px;
    cursor: pointer;
    &:first-child {
      padding: 0px;
      padding-right: 10px;
    }
  }
`;

const NavLinkText = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #802d30;
  padding: 20px;
  p {
    padding: 0px 20px;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const PaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0px 15px;
  }
  @media (min-width: 992px) {
    img {
      width: 70px;
      height: 70px;
    }
  }
`;

const FooterColumn = styled.div`
  width: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const ContactInfoRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

const ContactIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const PhoneNumber = styled.p`
  color: red;
`;

const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 20px 20px;
`;

const BrandsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

const IconsAndEmailInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavItem = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;

  &:hover {
    color: #e85257;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
  div {
    margin-right: 30px;
  }
`;

const FooterLogo = styled.div`
  width: 100%;
  margin: 15px 0px 0px 0px;
`;

interface BrandItem {
  src: string;
  alt: string;
}

interface SliderProps {
  items: BrandItem[];
}

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
`;

const SliderItem = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

const BrandImage = styled.img`
  width: 100%;
  height: auto;
`;

const BrandsSlider: React.FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 3; // Adjust for faster/slower swipe
    if (Math.abs(walk) > 50) {
      // Threshold for swipe
      setCurrentIndex((prevIndex) => {
        const newIndex =
          walk > 0
            ? Math.max(prevIndex - 1, 0)
            : Math.min(prevIndex + 1, items.length - 5);
        return newIndex;
      });
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseUpEvent = () => handleMouseUp();
    track.addEventListener("mouseup", handleMouseUpEvent);
    track.addEventListener("mouseleave", handleMouseUpEvent);

    return () => {
      track.removeEventListener("mouseup", handleMouseUpEvent);
      track.removeEventListener("mouseleave", handleMouseUpEvent);
    };
  }, []);

  return (
    <SliderContainer>
      <SliderTrack
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
      >
        {items.map((item, index) => (
          <SliderItem key={index}>
            <BrandImage src={item.src} alt={item.alt} />
          </SliderItem>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const MobileNavigation: React.FC = () => (
    <MobileNavList>
      {MobileNavItems.map((item, index) => (
        <NavListItem onClick={scrollToTop} key={index}>
          <NavLinkText to={item.to}>{item.text}</NavLinkText>
        </NavListItem>
      ))}
    </MobileNavList>
  );

  const DesktopNavigation: React.FC = () => (
    <DesktopNavList>
      <FooterColumn>
        <FooterLogo>
          <Logo />
        </FooterLogo>
        {ContactInfo.map((item, index) => (
          <ContactInfoRow key={index}>
            <ContactIcon src={item.icon} alt={item.alt} />
            {item.isPhone ? (
              <PhoneNumber>{item.text}</PhoneNumber>
            ) : (
              <p>{item.text}</p>
            )}
          </ContactInfoRow>
        ))}
      </FooterColumn>
      <Container>
        <BrandsContainer>
          <BrandsSlider items={DesktopNavItems} />
        </BrandsContainer>
        <IconsAndEmailInputContainer>
          <div>
            <FooterEmailInput />
          </div>
          <PaymentMethodsContainer>
            <img src={visaBlue} alt="Visa" />
            <img src={masterCard} alt="MasterCard" />
            <img src={americanExpressBlue} alt="American Express" />
          </PaymentMethodsContainer>
        </IconsAndEmailInputContainer>
        <TextContainer>
          <div>
            {MobileNavItems.slice(0, 4).map((item, index) => (
              <NavItem key={index} href={item.to}>
                {item.text}
              </NavItem>
            ))}
          </div>
          <div>
            {MobileNavItems.slice(4, 8).map((item, index) => (
              <NavItem key={index} href={item.to}>
                {item.text}
              </NavItem>
            ))}
          </div>
          <div>
            {MobileNavItems.slice(8, 12).map((item, index) => (
              <NavItem key={index} href={item.to}>
                {item.text}
              </NavItem>
            ))}
          </div>
          <div>
            {MobileNavItems.slice(12).map((item, index) => (
              <NavItem key={index} href={item.to}>
                {item.text}
              </NavItem>
            ))}
          </div>
        </TextContainer>
      </Container>
    </DesktopNavList>
  );

  const FooterInfo: React.FC = () => (
    <FooterInformation>
      <PaymentMethodsContainer>
        <img src={visa} alt="Visa" />
        <img src={masterCard} alt="MasterCard" />
        <img src={americanExpress} alt="American Express" />
      </PaymentMethodsContainer>
      <p>
        © 2024 Megastore. All Rights Reserved Developed By Irakli Janashvili
      </p>
    </FooterInformation>
  );

  return (
    <FooterWrapper>
      <TopOfPageButton onClick={scrollToTop}>
        <img src={footerArrow} alt="Scroll to top" />
        <TopOfPageText>TOP OF PAGE</TopOfPageText>
      </TopOfPageButton>
      <FooterNavigation>
        <MobileNavigation />
        <DesktopNavigation />
      </FooterNavigation>
      <FooterInfo />
    </FooterWrapper>
  );
}

const MobileNavItems = [
  { text: "Plus ქულებით შეძენა", to: "/help/Plus ქულებით შეძენა" },
  { text: "კომპანიის შესახებ", to: "/help/კომპანიის შესახებ" },
  { text: "ონლაინ განვადება", to: "/help/ონლაინ განვადება" },
  {
    text: "ვებგვერდის მოხმარების წესები და პირობები",
    to: "/help/ვებგვერდის მოხმარების წესები და პირობები",
  },
  { text: "მიწოდების პირობები", to: "/help/მიწოდების პირობები" },
  {
    text: "საგარანტიო ტალონი",
    to: "/help/საგარანტიო ტალონი",
  },
  {
    text: "საგარანტიო ტალონი იურიდიული პირებისთვის",
    to: "/help/საგარანტიო ტალონი იურიდიული პირებისთვის",
  },
  {
    text: "პროდუქციის შეკეთების, გადაცვლის და დაბრუნების პოლიტიკა",
    to: "/help/პროდუქციის შეკეთების, გადაცვლის და დაბრუნების პოლიტიკა",
  },
  { text: "კორპორატიული გაყიდვები", to: "/help/კორპორატიული გაყიდვები" },
  {
    text: "Electrolux-ის საგარანტიოს რეგისტრაცია",
    to: "/help/Electrolux-ის საგარანტიოს რეგისტრაცია",
  },
  { text: "ონლაინ შეძენა", to: "/help/ონლაინ შეძენა" },
  { text: "Cookie პოლიტიკა", to: "/help/Cookie პოლიტიკა" },
  { text: "კონფიდენციალობის პოლიტიკა", to: "/help/კონფიდენციალობის პოლიტიკა" },
  { text: "Tax Free", to: "/help/Tax Free" },
];

const DesktopNavItems = [
  { src: hisense, alt: "Hisense logo" },
  { src: samsung, alt: "Samsung logo" },
  { src: simfer, alt: "Simfer logo" },
  { src: toshiba, alt: "Toshiba logo" },
  { src: lenovo, alt: "Lenovo logo" },
  { src: hitachi, alt: "Hitachi logo" },
  { src: philips, alt: "Philips logo" },
  { src: saeco, alt: "Saeco logo" },
  { src: skyworth, alt: "Skyworth logo" },
];

const ContactInfo = [
  { icon: location, text: "ბესარიო ჟღენტის 84", alt: "Location icon" },
  { icon: mobileIcon, text: "592 239 179", alt: "Phone icon", isPhone: true },
  { icon: facebook, text: "Facebook", alt: "Facebook icon" },
  { icon: instagram, text: "Instagram", alt: "Instagram icon" },
  { icon: mail, text: "Iraklijanashvili1999@gmail.com", alt: "Email icon" },
];
