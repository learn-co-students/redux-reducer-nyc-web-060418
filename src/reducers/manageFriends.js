export function manageFriends(state, action) {
  let newState;
  switch (action.type) {
    case "ADD_FRIEND":
      newState = { ...state, friends: [...state.friends, action.friend] };
      return newState;
    case "REMOVE_FRIEND":
      let removedFriend = state.friends.filter(
        friend => friend.id !== action.id
      );
      newState = { ...state, friends: removedFriend };
      return newState;
    default:
      return state;
  }
}
