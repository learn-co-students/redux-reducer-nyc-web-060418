export function manageFriends(state, action){

  switch(action.type) {
    case 'ADD_FRIEND':
      return { ...state, ...state.friends.push({name: 'Joe', hometown: 'Boston', id: 101}) }
    case 'REMOVE_FRIEND':
      return { ...state, friends:state.friends.filter(friend => friend.id !== action.id) }
    default:
      return state;
  }
}
