import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers/index";

import { CartItem } from "./CartItem";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  let initialTotal = [];
  storeItems.map((item) => initialTotal.push(item?.quantity * item?.price));
  let calculatedTotal = initialTotal.reduce((a, b) => a + b, 0);
  let formattedTotal = calculatedTotal / 100;

  return (
    <Wrapper>
      <Div>
        <Header>Your Cart</Header>
        <Items>{storeItems.length} items</Items>
      </Div>
      <Div>
        <ItemWrapper>
          <QuantityWrapper>
            {storeItems.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                />
              );
            })}
          </QuantityWrapper>
          <Div>
            <p>Total: ${formattedTotal}</p>
            <PurchaseButton>Purchase</PurchaseButton>
          </Div>
        </ItemWrapper>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background: #f2c7c1;
  margin-top: -20px;
  position: relative;
`;

const Div = styled.div`
  padding-left: 20px;
  margin: 0;
`;

const ItemWrapper = styled.div`
  margin-top: 30px;
  height: 200px;
  width: 90%;
  color: white;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuantityWrapper = styled.div``;

const Header = styled.h1`
  color: white;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

const Items = styled.p`
  color: grey;
  margin: 0;
`;

const PurchaseButton = styled.button`
  border-radius: 5px;
  width: 90px;
  height: 20px;
  border: none;
  color: white;
  background: #409cff;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;
export default Cart;
