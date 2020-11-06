import React from 'react';
import styled from 'styled-components';
import  {foods} from '../Data/PizzaData';
import {Food, FoodGrid, FoodLabel} from './FoodGrid';

const MenuStyled = styled.div`
    margin: 0px 10rem;
    height: 1000px;
`

function Menu(){
    return (
    <div>
        <MenuStyled>
        {Object.entries(foods).map(([subMenuName, foods]) => 
        <>
        <h1>{subMenuName}</h1>
        <FoodGrid>    
            {foods.map(food => (
          <Food img={food.img}>
              <FoodLabel>
              {food.name}
              </FoodLabel>
           </Food>  
        ))}
        </FoodGrid>
        </>
        
        )}
  

        </MenuStyled>
    </div>);
}



export default Menu;