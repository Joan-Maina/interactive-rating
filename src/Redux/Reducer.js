import { CHOOSENUMBER } from "./Types";
const initialState = null;

const numberReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSENUMBER:
      return { ...state, payload };

    default:
      return state;
  }
};

export default authReducer;
