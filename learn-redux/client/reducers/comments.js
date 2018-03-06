// function is responsible for adding new post comments to the comments state
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return existing state plus the new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // now must return the new state without the deleted comment
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}


// function is responsible for returning the full state of comments
function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
