import React from 'react';
import styled from 'styled-components';
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


export function Order({orders}) {
    return (
    <OrderStyled>
      {orders.length === 0 ? <OrderContent>Your Order is Awesome!</OrderContent> :
    <div>Found {orders.length} orders</div>}

        <DialogContent>Your order is here</DialogContent>
        <DialogFooter><ConfirmButton>Checkout</ConfirmButton></DialogFooter>
    </OrderStyled >
    )
}