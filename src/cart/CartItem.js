import React from "react";
import styled from "styled-components";
import { removeItem, updateQuantity } from "../actions";
import { useDispatch } from "react-redux";

export const CartItem = ({ title, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Button onClick={() => dispatch(removeItem({ id }))}>X</Button>
      </Header>
      <Body>
        <Span>Quantity: </Span>
        <Input
          onChange={(event) => {
            dispatch(updateQuantity({ id: id, quantity: event.target.value }));
          }}
          value={quantity}
        />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ff406e;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 5px rgba(255, 255, 220, 0.21);
  margin: 10px;
  padding: 5px;
  color: white;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.h3``;

const Input = styled.input`
  border-radius: 5px;
  width: 25px;
  border: none;
`;

const Button = styled.button`
  height: 20px;
  width: 20px;
  background: #effcf7;
  border-radius: 15px;
  border: none;
  color: black;
  text-align: center;
`;

const Span = styled.span``;

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  border-top: 2px dotted white;
  padding: 4px;
  opacity: 90%;
`;
