/*
  Types
*/

export const Types = {
  REQUEST: 'user/ADD_REQUEST',
  SUCCESS: 'user/ADD_SUCCESS',
  FAILURE: 'user/ADD_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  coordinates: [],
};

/*
  Reducer
*/

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };

    case Types.SUCCESS:
      return {
        data: [...state.data, action.payload.data],
        loading: false,
        error: action.payload.error,
      };
    case Types.FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/*
  Actions
*/

export const Creators = {
  addUserRequest: (username, coordinates) => ({
    type: Types.REQUEST,
    payload: { username, coordinates },
  }),
  addUserSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  addUserFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
};
