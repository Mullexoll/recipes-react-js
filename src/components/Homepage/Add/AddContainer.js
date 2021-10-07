import { addNewRecipe } from "../../../redux/reducers/homepage-reducer";
import { connect } from "react-redux";
import Add from "./Add";

const mapStateToProps = (state) => {
   return {
      homepage: state.homepage,
   };
};

const AddContainer = connect(mapStateToProps, { addNewRecipe })(Add);

export default AddContainer;
