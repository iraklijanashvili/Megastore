import { useState } from "react";
import { styled } from "styled-components";
import ProductList from "./ProductList";
import NavBar from "./NavBar";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <HomeContainer>
      <NavBar
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductContainer>
        <ProductList
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </ProductContainer>
    </HomeContainer>
  );
}
