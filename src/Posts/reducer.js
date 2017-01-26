import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  initialState,
} from './actions';

const postReducer = (state = initialState, action)=> {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true,
      }

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        posts: action.posts
      }

    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error,
        posts: []
      }
    default:
      return state;
  }
}

export default postReducer;
