import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const ColorContainer = styled.div`
  & > .colorBlock {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.color};
    width: 110px;
    height: 110px;
    margin: 0.5%;
    border: ${props => props.selected && "7px solid #2c3e50"};
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px grey;
    cursor: pointer;
    &:hover {
      transition: all 0.4s ease;
      border: 2px solid #2c3e50;
      opacity: 0.8;
    }
    & > p {
      color: white;
      text-shadow: 1px 1px 6px #2c3e50;
      font-size: 0.9rem;
      font-weight: bold;
    }
@media (max-width: 768px) {
    width: 31%;
    height: 110px;
  }
  }
`

const Color = props => {
  const dispatch = useDispatch()
  return (
    <ColorContainer {...props} onClick={() => dispatch({ type: "UNSELECT", id: props.id })}>
      <div className='colorBlock'>
        <p>{props.name}</p>
      </div>
    </ColorContainer>
  )
}

export default Color
