export const Types = {
  SIGN_IN_FETCHING: 'profile/SIGN_IN_FETCHING',
  SET_PROFILE: 'profile/SET_PROFILE',
  SIGN_IN_SUCCESS:  'profile/SIGN_IN_SUCCESS',
}

const initialState = {
  loading: true,
}

export default function profile(state = initialState, action) {
  switch (action.type) {
    case Types.SIGN_IN_FETCHING:
      return { ...state, loading: true }
    case Types.SET_PROFILE:
      return { ...state, ...action.data }
    case Types.SIGN_IN_SUCCESS:
      return { ...state, loading: false }
    default:
      return state
  }
}

export const Creators = {
  signInFetching: () => ({ type: Types.SIGN_IN_FETCHING }),
  setProfile: data => ({ type: Types.SET_PROFILE, data }),
  signInSuccess: () => ({ type: Types.SIGN_IN_SUCCESS }),
}
