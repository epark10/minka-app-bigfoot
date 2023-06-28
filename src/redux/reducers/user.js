export const user = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    default:
      return state;
  }
};

export const signUpFormData = (state = {}, action) => {
  switch (action.type) {
    case "SET_SIGNUP_FORM_DATA":
      return { ...action.payload };
    case "RESET_SIGNUP_FORM_DATA":
      return {};
    default:
      return state;
  }
};
