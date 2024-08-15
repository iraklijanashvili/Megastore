import { styled } from "styled-components";
import ProductList from "../components/ProductList";
import Products from "./products";

const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <ProductContainer>
      <ProductList />
    </ProductContainer>
  );
}
