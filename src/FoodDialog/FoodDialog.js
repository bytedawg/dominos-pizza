import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import Title from '../Styles/title';
import pizzaRed from '../Styles/color';
import { formatPrice } from "../Data/PizzaData";
import { QuantityInput } from "./QuantityInput";
import {useQuantity} from "../Hooks/useQuantity";

const Dialog = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    margin: 0 auto;
    top: 75px;
    z-index:5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }) => `background-image: url(${img});`}
    background-position:center;
    background-size:cover;

`;

const DialogBannerName = styled(FoodLabel)`
    top: 0px;
    font-size:30px;
    padding: 10px 20px 20px 10px;
`;

export const DialogContent = styled.div`
    overflow: auto;
    height: 100%;
    padding: 20px;
`;

export const DialogFooter = styled.div`
    box-shadow: 0px 2px 20px 0px grey;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: #fff;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${pizzaRed}
`;

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
    const quantity = useQuantity(openFood && openFood.quantity);
    function close() {
        setOpenFood();
    }
    if (!openFood) return null;

    const order = {
        ...openFood
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }

    return (
        openFood ? (
            <>
                <DialogShadow onClick={close} />
                <Dialog>
                    <DialogBanner img={openFood.img}>
                        <DialogBannerName>{openFood.name}</DialogBannerName>
                    </DialogBanner>
                    <DialogContent><QuantityInput {...quantity}/>
                    </DialogContent>
                    <DialogFooter>
                        <ConfirmButton onClick={addToOrder}>
                            Add to Order: {formatPrice(openFood.price)}
                        </ConfirmButton>
                    </DialogFooter>
                </Dialog>
            </>
        ) : null
    );
}


function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}

export default FoodDialog;