import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const ColorContainer = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  width: 130px;
  height: 130px;
  margin: 0.65%;
  background-color: ${props => props.color};
  border: ${props => props.selected && "7px solid #2c3e50"};
  border-radius: 8px;
  box-shadow: 2px 2px 2px grey;
  cursor: pointer;
  opacity: ${props => (props.selected ? 1 : 0.4)};
  transition: all 0.2s ease;

  &:hover {
    opacity: ${props => (props.selected ? 1 : 0.8)};
    border: ${props => (props.selected ? "7px solid #2c3e50" : "1px solid #2c3e50")};
  }

  & > p {
    color: white;
    text-shadow: 1px 1px 6px #2c3e50;
    font-size: 0.8rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 110px;
  }
`

const Color = props => {
  const dispatch = useDispatch()
  return (
    <ColorContainer {...props} onClick={() => dispatch({ type: "TOGGLE_SELECT", id: props.id })}>
      <p>{props.name}</p>
    </ColorContainer>
  )
}

export default Color
