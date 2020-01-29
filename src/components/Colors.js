import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Color from "./Color"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 15px auto;
  box-shadow: 2px 2px 12px grey;
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
