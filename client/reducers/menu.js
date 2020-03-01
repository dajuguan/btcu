import types from "../constants/actionTypes";

const INITIAL_STATE = {
  menu_name: null
};

export default function modal(state = INITIAL_STATE, action) {
  console.log("action:", action);
  switch (action.type) {
    case types.CHANGE_MENU:
      return {
        menu_name: action.payload.name
      };
    default:
      return state;
  }
}
