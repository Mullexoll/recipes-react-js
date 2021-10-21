const SET_ALL_USERS = "SET_ALL_USERS";

let initialState = {
   allUsers: [],
};

const friendsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ALL_USERS:
         return {
            ...state,
            allUsers: [...action.allUsers],
         };
      default:
         return state;
   }
};

export const setAllUsers = (allUsers) => ({
   type: SET_ALL_USERS,
   allUsers,
});

export default friendsReducer;
