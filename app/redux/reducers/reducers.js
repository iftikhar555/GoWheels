const initialState = {
    userDetails: {},
    authToken: "",
    pedningActions: [],
    otp: "",
};

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case "set":
            return { ...state, ...rest };
          case "setPendingAction":
            return { ...state, pedningActions: rest.data };
          case "RegisterUser":
            return { ...state, userDetails: rest.data };
          case "SetOTP":
            return { ...state, otp: rest.data };


    case "LogoutUser":
      return {
        ...state,
        userDetails: {},
        authToken: "",
        pedningActions: [],
        otp: [],
      };
    case "SetAuthToken":
      return { ...state, authToken: rest.data };
    
    default:
        return state;
    }
  };
  
  export default changeState;