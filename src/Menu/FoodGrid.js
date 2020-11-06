import Title from '../Styles/title';
import styled from 'styled-components';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const Food = styled(Title)`
    height: 200px;
    background-position: center;
    background-size: cover;
    background-image: ${({img}) => `url(${img});` }
    box-shadow: 0 0px 7px 2px grey;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`

export const FoodLabel = styled.div`
    position: absolute;
    background-color: #000;
    padding: 5px;
`