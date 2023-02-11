import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

import Products from "../Components/Products";

import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    //     console.log(filters);
  };
  return (
    <Container>
      <Navbar />
     
      <Title> {cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products : </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>pink</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>red</Option>
            <Option>yellow</Option>
            <Option>brown</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Product</FilterText>
          <Select  onChange={(e) => setSort(e.target.value)}>
            <Option value="newest"> Newest</Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="desc">Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      
      <Footer />
    </Container>
  );
};

export default ProductList;
