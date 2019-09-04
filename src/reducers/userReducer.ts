import { UserAction } from "../actions/userActions";
import { SAVE_USER, DELETE_USER } from "../actions/constants";
import User from "../models/User";

const userReducer = (state: User = new User(), action: UserAction) => {
  switch (action.type) {
    case SAVE_USER:
       return action.payload;
    case DELETE_USER:
       return new User();
    default:
      return state;
  }
};

export default userReducer;
