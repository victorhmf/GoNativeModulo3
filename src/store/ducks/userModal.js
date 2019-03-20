/*
  Action Types
*/

export const Types = {
  SHOW: 'userModal/SHOW',
  HIDE: 'userModal/HIDE',
};

const INITAL_STATE = {
  visible: false,
  coordinates: null,
};

/*
  Reducer
*/

export default function userModal(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return { visible: true, coordinates: action.payload.coordinates };
    case Types.HIDE:
      return { visible: false };
    default:
      return state;
  }
}

/*
  Action
*/

export const Creators = {
  showModal: coordinates => ({
    type: Types.SHOW,
    payload: { coordinates },
  }),
  hideModal: () => ({
    type: Types.HIDE,
  }),
};
