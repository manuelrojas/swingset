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

const _getPosts = () => {
  return {
    ...initialState,
    loading: true,
    type: GET_POSTS,
  }
}

const _getPostsSuccess = posts => {
  return {
    ...initialState,
    type: GET_POSTS_SUCCESS,
    loaded: true,
    posts,
  };
}

const _getPostsFail = error => {
  return {
    ...initialState,
    type: GET_POSTS_FAIL,
    loaded: true,
    error,
  };
}

export const getPosts = () => {
  return (dispatch, getState) => {
    dispatch(_getPosts());

    return Api.getPosts()
      .then( response => {
        setTimeout(()=> {
          return dispatch(_getPostsSuccess(response.data));
        }, 1000);
      })
      .catch( error => {
        return dispatch(_getPostsFail(error))
      });
  };
}
