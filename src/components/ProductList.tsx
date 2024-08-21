import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import burgerMenu from "../assets/svg/burgerMenu.svg";
import accordionArrow from "../assets/svg/accordionArrow.svg";
import slider1 from "../assets/png/slider1.png";
import slider2 from "../assets/png/slider2.png";
import slider3 from "../assets/png/slider3.png";
import slider4 from "../assets/png/slider4.png";
import slider5 from "../assets/png/slider5.png";
import slider6 from "../assets/png/slider6.png";
import slider7 from "../assets/png/slider7.png";
import giftIcon from "../assets/svg/giftIcon.svg";
import tvIcon from "../assets/svg/tvIcon.svg";
import mobileIcon from "../assets/svg/mobileIcon.svg";
import computerIcon from "../assets/svg/computerIcon.svg";
import refrigeratorIcon from "../assets/svg/refrigeratorIcon.svg";
import washingMachineIcon from "../assets/svg/washingMachineIcon.svg";
import conditionerIcon from "../assets/svg/conditionerIcon.svg";
import dishwasherIcon from "../assets/svg/dishwasherIcon.svg";
import ovenIcon from "../assets/svg/ovenIcon.svg";
import kitchenItemsIcon from "../assets/svg/kitchenItemsIcon.svg";
import microwaveIcon from "../assets/svg/microwaveIcon.svg";
import vacuumClenerIcon from "../assets/svg/vacuumCleanerIcon.svg";
import hairDryerIcon from "../assets/svg/hairDryerIcon.svg";
import boilerIcon from "../assets/svg/boilerIcon.svg";
import waterDispnserIcon from "../assets/svg/waterDispenserIcon.svg";
import { Products } from "./products";

interface NavItem {
  icon: string;
  title: string;
}

const sliderImages: string[] = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
];

const navItems: NavItem[] = [
  { icon: giftIcon, title: "სასაჩუქრე ბარათი" },
  { icon: tvIcon, title: "ტელევიზორები" },
  { icon: computerIcon, title: "კომპიუტერული ტექნიკა" },
  { icon: mobileIcon, title: "მობილური ტექნიკა" },
  { icon: refrigeratorIcon, title: "მაცივარი" },
  { icon: washingMachineIcon, title: "სარეცხი / საშრობი მანქანები" },
  { icon: conditionerIcon, title: "გათბობა / გაგრილება" },
  { icon: dishwasherIcon, title: "ჭურჭლის სარეცხი მანქანა" },
  { icon: ovenIcon, title: "გაზქურა" },
  { icon: kitchenItemsIcon, title: "ღუმელი / გამწოვი / ზედაპირი" },
  { icon: microwaveIcon, title: "მიკროტალღური / საცხობი" },
  { icon: vacuumClenerIcon, title: "მტვერსასრუტი / უთო" },
  { icon: hairDryerIcon, title: "ესთეტიკა და სილამაზე" },
  { icon: boilerIcon, title: "სამზარეულოს წვრილი ტექნიკა" },
  { icon: waterDispnserIcon, title: "წყლის დისპენსერი" },
];

const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ProductListNav = styled.div`
  max-width: 1440px;
  height: 100%;
`;

interface ProductListMenuProps {
  isOpen: boolean;
}

const ProductListMenu = styled.div<ProductListMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin: 0 7px 23px;
  border: 1px solid grey;
  border-width: 0px 1px 1px 1px;

  @media (min-width: 992px) {
    border: 0px solid grey;
    margin: 0 16px 23px;
    width: 290px;
    display: block;
  }
`;

const ProductListMenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px;
  height: 64px;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

const ProductListMenuItem = styled.div`
  padding: 10px 5px;
  border-top: 1px solid grey;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #e2e2e2;
  cursor: pointer;

  @media (min-width: 992px) {
    border-top: 0px solid grey;
  }
`;

const ProductListMenuIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 11px;
`;

const ProductListMenuTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;

  &:hover {
    color: #f0364d;
  }
`;

const BurgerMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

interface AccordionArrowProps {
  isOpen: boolean;
}

const AccordionArrow = styled.img<AccordionArrowProps>`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
  cursor: pointer;

  @media (min-width: 992px) {
    max-width: 1118px;
  }
`;

const SliderImage = styled.img`
  width: 100%;
  transition: transform 0.5s ease-in-out;
  user-select: none;

  @media (min-width: 992px) {
    max-width: 1118px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

interface DotProps {
  isActive: boolean;
}

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#f0364d" : "#ccc")};
  cursor: pointer;
`;

interface ProductListProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.pageX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const diff = startX - e.pageX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      slider.addEventListener("touchmove", handleTouchMove, { passive: true });
      slider.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);
  useEffect(() => {
    setSelectedCategory(null);
  }, [searchQuery]);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const diff = startX - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <ProductContainer>
      <ProductListNav>
        <ProductListMenuHeader onClick={toggleAccordion}>
          <FlexRow>
            <BurgerMenuIcon src={burgerMenu} alt="Menu" />
            <ProductListMenuTitle>კატეგორიები</ProductListMenuTitle>
          </FlexRow>
          <AccordionArrow src={accordionArrow} alt="Arrow" isOpen={isOpen} />
        </ProductListMenuHeader>
        <ProductListMenu isOpen={isOpen}>
          {navItems.map(({ icon, title }, index) => (
            <ProductListMenuItem
              key={index}
              onClick={() => {
                setSelectedCategory(title);
                setSearchQuery("");
              }}
            >
              <ProductListMenuIcon src={icon} alt={title} />
              <ProductListMenuTitle>{title}</ProductListMenuTitle>
            </ProductListMenuItem>
          ))}
        </ProductListMenu>
      </ProductListNav>
      <SliderContainer
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <SliderImage
          src={sliderImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          draggable="false"
        />
        <DotsContainer>
          {sliderImages.map((_, index) => (
            <Dot
              key={index}
              isActive={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
        <Products
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />
      </SliderContainer>
    </ProductContainer>
  );
};

export default ProductList;
