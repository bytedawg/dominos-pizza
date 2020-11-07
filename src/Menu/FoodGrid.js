import Title from '../Styles/title';
import styled from 'styled-components';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const Food = styled.div`
    height: 200px;
    background-position: center;
    background-size: cover;
    background-image: ${({img}) => `url(${img});` }
    transition-property: box-shadow;
    filter:contrast(75%);
    transition-duration: .1s;
    box-shadow: 0px 0px 2px 0px grey;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
        filter: contrast(100%);
        box-shadow: 0px 0px 10px 0px grey;
    }
`

export const FoodLabel = styled(Title)`
    position: absolute;
    background-color: #000;
    padding: 5px;
`