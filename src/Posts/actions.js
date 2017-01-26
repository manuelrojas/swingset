import Api from './../api';

export const GET_POSTS = 'get_posts/default';
export const GET_POSTS_SUCCESS = 'get_posts/success';
export const GET_POSTS_FAIL = 'get_posts/fail';

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
  posts: []
};

export const getPosts = () => {
  return {
    ...initialState,
    loading: true,
    type: GET_POSTS,
  }
}

export const getPostsSuccess = posts => {
  return {
    ...initialState,
    type: GET_POSTS_SUCCESS,
    loaded: true,
    posts,
  };
}

export const getPostsFail = error => {
  return {
    ...initialState,
    type: GET_POSTS_FAIL,
    loaded: true,
    error,
  };
}

export const actionGetPosts = () => {
  return (dispatch, getState) => {
    dispatch(getPosts());

    return Api.getPosts()
      .then( response => {
        setTimeout(()=> {
          return dispatch(getPostsSuccess(response.data));
        }, 1000);
      })
      .catch( error => {
        return dispatch(getPostsFail(error))
      });
  };
}
