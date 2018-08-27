export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND":
      let newFriendsArray = state.friends
      newFriendsArray.push(action.friend)
      return {friends: newFriendsArray}
    case "REMOVE_FRIEND":
      return {friends: state.friends.filter(friend => friend.id !== action.id)}
    default:
      return state
  }
}
