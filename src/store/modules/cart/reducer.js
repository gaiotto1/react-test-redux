export default function cart(state = [], action) {
  console.log('state', state);
  // console.log('action', action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
