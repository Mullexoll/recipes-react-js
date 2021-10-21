import RecipeReviewCard from "./Cards";
import { connect } from "react-redux";
import {
   setLikedPost,
   setUsers,
   createNewError,
} from "../../redux/reducers/homepage-reducer";
import React from "react";
import axios from "axios";

class HomepageContainer extends React.Component {
   componentDidMount() {
      axios
         .get(
            "https://irecipe-react-js-default-rtdb.europe-west1.firebasedatabase.app/users.json"
         )
         .then((response) => {
            console.log(response.data);
            this.props.setUsers(response.data);
            console.log(this.props.users);
         });
   }

   render() {
      return (
         <>
            <RecipeReviewCard
               users={this.props.users}
               setLikedPost={this.props.setLikedPost}
               createNewError={this.props.createNewError}
               errors={this.props.errors}
            />
         </>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.homepage.users,
      errors: state.homepage.errors,
   };
};

export default connect(mapStateToProps, {
   setLikedPost,
   setUsers,
   createNewError,
})(HomepageContainer);
