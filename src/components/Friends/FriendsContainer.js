import { connect } from "react-redux";
import { setAllUsers } from "../../redux/reducers/friends-reducer";
import React from "react";
import axios from "axios";
import Friends from "./Friends/Friends";

class FriendsContainer extends React.Component {
   componentDidMount() {
      axios
         .get(
            "https://irecipe-react-js-default-rtdb.europe-west1.firebasedatabase.app/all_users.json"
         )
         .then((response) => {
            console.log(response.data);
            this.props.setAllUsers(response.data);
            console.log(this.props.allUsers);
         });
   }

   render() {
      return (
         <>
            <Friends allUsers={this.props.allUsers} />
         </>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      allUsers: state.friends.allUsers,
   };
};

export default connect(mapStateToProps, {
   setAllUsers,
})(FriendsContainer);
