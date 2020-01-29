const initialState = {
  colors: [
    { id: 0, name: "ASBESTOS", color: "#7f8c8d", selected: false },
    { id: 1, name: "TURQUOISE", color: "#1abc9c", selected: false },
    { id: 2, name: "EMERALD", color: "#2ecc71", selected: false },
    { id: 3, name: "PETER RIVER", color: "#3498db", selected: false },
    { id: 4, name: "AMETHYST", color: "#9b59b6", selected: false },
    { id: 5, name: "WET ASPHALT", color: "#34495e", selected: false },
    { id: 6, name: "GREEN SEA", color: "#16a085", selected: false },
    { id: 7, name: "NEPHRITIS", color: "#27ae60", selected: false },
    { id: 8, name: "BELIZE HOLE", color: "#2980b9", selected: false },
    { id: 9, name: "WISTERIA", color: "#8e44ad", selected: false },
    { id: 10, name: "MIDNIGHT BLUE", color: "#2c3e50", selected: false },
    { id: 11, name: "SUN FLOWER", color: "#f1c40f", selected: false },
    { id: 12, name: "CARROT", color: "#e67e22", selected: false },
    { id: 13, name: "ALIZIRIN", color: "#e74c3c", selected: false },
    { id: 14, name: "CLOUDS", color: "#ecf0f1", selected: false },
    { id: 15, name: "CONCRETE", color: "#95a5a6", selected: false },
    { id: 16, name: "ORANGE", color: "#f39c12", selected: false },
    { id: 17, name: "PUMPKIN", color: "#d35400", selected: false },
    { id: 18, name: "POMEGRANATE", color: "#c0392b", selected: false },
    { id: 19, name: "SILVER", color: "#bdc3c7", selected: false }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SELECT":
      const toggledColors = state.colors.map((clr, _, array) => {
        if (clr.id === action.id) {
          const updatedColor = {
            ...clr,
            selected: !array[action.id].selected
          }
          return updatedColor
        } else return clr
      })
      return {
        ...state,
        colors: toggledColors
      }
    case "UNSELECT":
      const unselectedColors = state.colors.map((clr, _, array) => {
        if (clr.id === action.id) {
          const updatedColor = {
            ...clr,
            selected: false
          }
          return updatedColor
        } else return clr
      })
      return {
        ...state,
        colors: unselectedColors
      }
    default:
      return state
  }
}

export default reducer
