export const Types = {
  GET_POSTS: 'search/GET_POSTS',
  SET_POSTS: 'search/SET_POSTS',
}

const initialState = {
  loading: true,
  posts: [],
}

export default function feed(state = initialState, action) {
  switch (action.type) {
     case Types.GET_POSTS:
      return { ...state, loading: true }
    case Types.SET_POSTS:
      return { ...state, posts: action.data, loading: false }
    default:
      return state
  }
}

export const Creators = {
  getPosts: () => ({ type: Types.GET_POSTS }),
  setPosts: data => ({ type: Types.SET_POSTS, data }),
}
