const SET_LIKED_POST = "SET_LIKED_POST";
const SET_USERS = "SET_USERS";
const ADD_NEW_RECIPE = "UPDATE_NEW_RECIPE";
const NEW_ERROR = "NEW_ERROR";

let initialState = {
   users: [],
   errors: "",
};

const homepageReducer = (state = initialState, action) => {
   console.log(state, action);
   switch (action.type) {
      case SET_LIKED_POST:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.usersId) {
                  return { ...u, isLiked: action.isLiked };
               }
               return u;
            }),
         };
      case SET_USERS:
         return {
            ...state,
            users: [...action.users],
         };
      case ADD_NEW_RECIPE:
         return {
            ...state,
            users: [
               {
                  recipe_2: {
                     date: action.date,
                     img: "https://www.simplyrecipes.com/thmb/kuFvxBY8s3avWVIwFrO5G7aws6A=/2000x1334/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-HORIZONTAL-ce4d8fe93ec045c0a868ec065f49800a.jpg",
                     methods: action.methods,
                     title: action.title,
                  },
               },
            ],
         };
      case NEW_ERROR:
         return {
            ...state,
            errors: action.error,
         };

      default:
         return state;
   }
};

export const setLikedPost = (isLiked, usersId) => ({
   type: SET_LIKED_POST,
   isLiked: isLiked,
   usersId: usersId,
});

export const setUsers = (users) => ({ type: SET_USERS, users });

export const addNewRecipe = (date, methods, title) => ({
   type: ADD_NEW_RECIPE,
   date: date,
   methods: methods,
   title: title,
});

export const createNewError = (error) => ({ type: NEW_ERROR, error });

export default homepageReducer;
