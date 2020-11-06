import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import Title from '../Styles/title';

const Dialog = styled.div`
    width: 500px;
    height: 2000px;
    background-color: white;
    position: fixed;
    margin: 0 auto;
    top: 75px;
    z-index:5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
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

function FoodDialog({ openFood, setOpenFood }) {
    function close() {
        setOpenFood();
    }
    if (!openFood) return null;
    return (
        openFood ? (
            <>
                <DialogShadow onClick={close} />
                <Dialog>
                    <DialogBanner img={openFood.img}>
                        <DialogBannerName>{openFood.name}</DialogBannerName>
                    </DialogBanner>
                </Dialog>
            </>
        ) : null
    );
}

export default FoodDialog;