import styled from "styled-components";
import giftCard100 from "../assets/products/giftCard/giftCard100.png";
import giftCard200 from "../assets/products/giftCard/giftCard200.png";
import giftCard300 from "../assets/products/giftCard/giftCard300.png";
import giftCard500 from "../assets/products/giftCard/giftCard500.png";
import tv1 from "../assets/products/televisions/tv1.png";
import tv2 from "../assets/products/televisions/tv2.png";
import tv3 from "../assets/products/televisions/tv3.png";
import tv4 from "../assets/products/televisions/tv4.png";
import comp1 from "../assets/products/computers/comp1.png";
import comp2 from "../assets/products/computers/comp2.png";
import comp3 from "../assets/products/computers/comp3.png";
import comp4 from "../assets/products/computers/comp4.png";
import mob1 from "../assets/products/mobiles/mob1.png";
import mob2 from "../assets/products/mobiles/mob2.png";
import mob3 from "../assets/products/mobiles/mob3.png";
import mob4 from "../assets/products/mobiles/mob4.png";
import ref1 from "../assets/products/refrigerators/ref1.jpg";
import ref2 from "../assets/products/refrigerators/ref2.jpg";
import ref3 from "../assets/products/refrigerators/ref3.jpg";
import ref4 from "../assets/products/refrigerators/ref4.jpg";

import productCart from "../assets/svg/Productcart.svg";

interface Product {
  id?: number;
  image?: string;
  title?: string;
  brand?: string;
  price?: number;
  category?: string;
}
interface ProductsProps {
  selectedCategory: string | null;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Nav = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const NavLi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  width: 80%;
  margin-bottom: 20px;
  height: 100%;
  @media (min-width: 768px) {
    width: 48%;
  }

  @media (min-width: 1440px) {
    width: 25%;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 210px;
  transition: transform 0.3s ease-in-out;
  ${NavLi}:hover & {
    transform: scale(1.02);
  }
`;

const Title = styled.p`
  color: #0066c0;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
  width: 100%;
  height: 100%;
`;

const BrandName = styled.p`
  color: grey;
  font-size: 14px;
  font-weight: 700;
  text-align: start;
  width: 100%;
  line-height: 14px;
  height: 36px;
`;

const Price = styled.p`
  color: #e4494e;
  font-size: 19px;
  font-weight: 700;
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  line-height: 19px;
  height: 36px;

  span {
    font-size: 9px;
    font-weight: 700;
    line-height: 12px;
    margin-left: 2px;
  }
`;

const PriceCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

const AddCart = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e4494e;
  width: 150px;
  height: 25px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b43d41;
  }
`;

const CartImg = styled.img`
  width: 17px;
  height: 17px;
`;

const CartText = styled.p`
  font-size: 10px;
  color: white;
`;

export default function Products({ selectedCategory }: ProductsProps) {
  const productData: Product[] = [
    {
      id: 1,
      image: giftCard100,
      title: "სასაჩუქრე ბარათი",
      brand: "by Megastore",
      price: 100,
      category: "სასაჩუქრე ბარათი",
    },
    {
      id: 2,
      image: giftCard200,
      title: "სასაჩუქრე ბარათი",
      brand: "by Megastore",
      price: 200,
      category: "სასაჩუქრე ბარათი",
    },
    {
      id: 3,
      image: giftCard300,
      title: "სასაჩუქრე ბარათი",
      brand: "by Megastore",
      price: 300,
      category: "სასაჩუქრე ბარათი",
    },
    {
      id: 4,
      image: giftCard500,
      title: "სასაჩუქრე ბარათი",
      brand: "by Megastore",
      price: 500,
      category: "სასაჩუქრე ბარათი",
    },
    {
      id: 5,
      image: tv1,
      title: "ტელევიზორები TOSHIBA 43V35ME",
      price: 669,
      brand: "by Toshiba",
      category: "ტელევიზორები",
    },
    {
      id: 6,
      image: tv2,
      title: "ტელევიზორები TOSHIBA 43V35ME",
      brand: "by Samsung",
      price: 679,
      category: "ტელევიზორები",
    },
    {
      id: 7,
      image: tv3,
      title: "ტელევიზორი Samsung Full HD SMART UE32T5300AUXCE",
      brand: "by Samsung",
      price: 749,
      category: "ტელევიზორები",
    },
    {
      id: 8,
      image: tv4,
      title: "ტელევიზორი LG 32LQ63006LA.AMCN Full HD SMART",
      brand: "by LG",
      price: 679,
      category: "ტელევიზორები",
    },

    {
      id: 9,
      image: comp1,
      title: "ნოუთბუქი ASUS TUF 15 90NR0AV3-M001V0(i7-12650h/RTX3070/16GB/512)",
      brand: "by Asus",
      price: 4619,
      category: "კომპიუტერული ტექნიკა",
    },
    {
      id: 10,
      image: comp2,
      title: "ნოუთბუქი ASUS ROG STRIX G614JV-N4070 (i5-13450HX/RTX4060/16/512)",
      brand: "by Asus",
      price: 4339,
      category: "კომპიუტერული ტექნიკა",
    },
    {
      id: 11,
      image: comp3,
      title: "ნოუთბუქი ASUS ROG STRIX G614JI-N3126 (i5-13450HX/RTX4070/16/512)",
      brand: "by Asus",
      price: 5199,
      category: "კომპიუტერული ტექნიკა",
    },
    {
      id: 12,
      image: comp4,
      title: "სმარტფონი Infinix Infinix Smart 6 HD 2GB/32GB X6512 Blue",
      brand: "by Infinix",
      price: 249,
      category: "კომპიუტერული ტექნიკა",
    },
    {
      id: 13,
      image: mob1,
      title: "სმარტფონი Infinix Infinix Smart 6 HD 2GB/32GB X6512 Blue",
      brand: "by Infinix",
      price: 249,
      category: "მობილური ტექნიკა",
    },
    {
      id: 14,
      image: mob2,
      title: "სმარტფონი Samsung A04 Black 4GB/64GB SM-A045FZKGCAU",
      brand: "by Samsung",
      price: 249,
      category: "მობილური ტექნიკა",
    },
    {
      id: 15,
      image: mob3,
      title: "სმარტფონი Realme C25Y 4GB/64GB RMX3269 Blue",
      brand: "by Realme",
      price: 249,
      category: "მობილური ტექნიკა",
    },
    {
      id: 16,
      image: mob4,
      title: "სმარტფონი Samsung A04s Green 3GB/32GB SM-A047FZGDCAU",
      brand: "by Samsung",
      price: 249,
      category: "მობილური ტექნიკა",
    },
    {
      id: 17,
      image: ref1,
      title: "მაცივარი Hisense DT27DR4-White",
      brand: "by Hisense",
      price: 549,
      category: "მობილური ტექნიკა",
    },
    {
      id: 18,
      image: ref2,
      title: "მაცივარი Hisense DT27DR4-SILVER",
      brand: "by Hisense",
      price: 589,
      category: "მობილური ტექნიკა",
    },
    {
      id: 19,
      image: ref3,
      title: "მაცივარი Hisense DT27DR4-Black",
      brand: "by Hisense",
      price: 629,
      category: "მობილური ტექნიკა",
    },
    {
      id: 20,
      image: ref4,
      title: "მაცივარი Hisense RD-31DR4SA",
      brand: "by Hisense",
      price: 729,
      category: "მობილური ტექნიკა",
    },
  ];
  const filteredProducts = selectedCategory
    ? productData.filter((product) => product.category === selectedCategory)
    : productData;

  return (
    <Container>
      <Nav>
        <NavUl>
          {filteredProducts.map((product) => (
            <NavLi key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <Title>{product.title}</Title>
              <BrandName>{product.brand}</BrandName>
              <PriceCartContainer>
                <Price>
                  {product.price} <span>ლარი</span>
                </Price>
                <AddCart>
                  <CartImg src={productCart} alt="Cart" />
                  <CartText>კალათაში</CartText>
                </AddCart>
              </PriceCartContainer>
            </NavLi>
          ))}
        </NavUl>
      </Nav>
    </Container>
  );
}
