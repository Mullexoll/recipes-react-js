import axios from "axios";

const instance = axios.create({
   baseURL:
      "https://irecipe-react-js-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const UsersAPI = {
   async patchIsLikedFalse(id) {
      return instance.patch(`users/${id}/.json`, {
         isLiked: false,
      });
   },
   async patchIsLikedTrue(id) {
      return instance.patch(`users/${id}/.json`, {
         isLiked: true,
      });
   },
   async getAllUsers() {
      return instance.get(`all_users.json`);
   },
};
