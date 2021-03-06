import React from 'react';
import styled from 'styled-components';
import {formatPrice} from "../Data/PizzaData";
import {getPrice}  from '../FoodDialog/FoodDialog';

import {
    DialogContent,
    DialogFooter,
    ConfirmButton
  } from "../FoodDialog/FoodDialog";

const OrderStyled =  styled.div`
    position: fixed;
    right: 0px;
    top: 67px;
    width: 340px;
    background-color: white;
    height: calc(100% - 100px);
    z-index: 10;
    box-shadow: 4px 0px 5px 4px grey;
    display: flex;
    flex-direction: column;
`; 

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;


export function Order({orders}) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const tax = subtotal * .05;
  const total = subtotal + tax;
    return (
    <OrderStyled>
      {orders.length === 0 ? (
      <OrderContent>Your Order is Awesome!</OrderContent>
      ) : (
    <OrderContent>{""}
    <OrderContainer>Your order:</OrderContainer>{""}
    {orders.map(order => (
      <OrderContainer>
        <OrderItem key={order.id}>
        <div>{order.quantity}</div>
          {order.name}
          <div>{formatPrice(getPrice(order))}</div>
        </OrderItem>
      </OrderContainer>
    ))}

    <OrderContainer>
      <OrderItem>
      <div />
      <div>Sub-Total: </div>
        <div>{formatPrice(subtotal)}</div>
      </OrderItem>
      <OrderItem>
      <div />
      <div>Tax: </div>
        <div>{formatPrice(tax)}</div>
      </OrderItem>
      <OrderItem>
      <div />
      <div>Total: </div>
        <div>{formatPrice(total)}</div>
      </OrderItem>
    </OrderContainer>
    </OrderContent>
    )}

        <DialogContent></DialogContent>
        <DialogFooter><ConfirmButton>Checkout</ConfirmButton></DialogFooter>
    </OrderStyled >
    )
}