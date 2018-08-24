export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const friendsArr = [...state.friends]
      const filteredFriends = friendsArr.filter(element => element.id !== action.id)
      return { friends: filteredFriends }
    default:
      return state;
  }
}
