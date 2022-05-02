import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const initialState = {
  newValue: 0,
};
export const clickReducer = (
  state = initialState,
  action: ActionCreatorWithPayload<number>,
) => {
  switch (action.type) {
    case "CLICK_UPDATE_VALUE":
      return {
        ...state,
        newValue: action,
      };
    default:
      return state;
  }
};
