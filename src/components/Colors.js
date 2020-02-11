import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Color from "./Color"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 94%;
  margin: 15px auto;
  padding: 7px 12px 7px 7px;
  box-shadow: 2px 2px 12px grey;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`

const Colors = () => {
  const colors = useSelector(state => state.colors)
  return (
    <Container>
      {colors.map(clr => (
        <Color key={clr.id} id={clr.id} color={clr.color} name={clr.name} selected={clr.selected} />
      ))}
    </Container>
  )
}

export default Colors
