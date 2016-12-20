const color = (state = {changeColor:true}, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        changeColor: !state.changeColor
      }
    default:
      return state
  }
}

export default color
