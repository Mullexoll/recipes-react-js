import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuListComposition from "./Share";
import { UsersAPI } from "../api/api";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

const ExpandMore = styled((props) => {
   const { expand, ...other } = props;
   return <IconButton {...other} />;
})(({ theme, expand }) => ({
   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
   marginLeft: "auto",
   transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
   }),
}));

const CardPadding = styled("div")(({ theme }) => ({
   padding: theme.spacing(2),
   [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
   },
}));

const RecipeReviewCard = (props) => {
   console.log(props);
   const [expanded, setExpanded] = React.useState(false);
   const [openAlert, setOpenAlert] = useState(false);

   const handleExpandClick = (id) => {
      setExpanded({ ...expanded, [id]: !expanded[id] });
   };

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }

      setOpenAlert(false);
   };

   return (
      <>
         {props.users.map((u) => {
            return u.recipes.map((recipes) => {
               return (
                  <CardPadding key={u.id}>
                     <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                           avatar={
                              <Avatar
                                 sx={{ bgcolor: red[500] }}
                                 aria-label="recipe"
                              >
                                 R
                              </Avatar>
                           }
                           action={
                              <IconButton aria-label="settings">
                                 <MoreVertIcon />
                              </IconButton>
                           }
                           title={recipes.title}
                           subheader={u.date}
                        />
                        <CardMedia
                           component="img"
                           height="194"
                           image={recipes.img}
                           alt="Paella dish"
                        />
                        <CardContent>
                           <Typography variant="body2" color="text.secondary">
                              {recipes.ingridients}
                           </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                           {u.isLiked ? (
                              <IconButton
                                 onClick={() => {
                                    props.setLikedPost(false, u.id);
                                    UsersAPI.patchIsLikedFalse(u.id).catch(
                                       (error) => {
                                          props.createNewError(error);
                                          setOpenAlert(true);
                                          props.setLikedPost(true, u.id);
                                       }
                                    );
                                 }}
                              >
                                 <FavoriteIcon />
                              </IconButton>
                           ) : (
                              <IconButton
                                 onClick={() => {
                                    props.setLikedPost(true, u.id);
                                    UsersAPI.patchIsLikedTrue(u.id).catch(
                                       (error) => {
                                          props.createNewError(error);
                                          setOpenAlert(true);
                                          props.setLikedPost(false, u.id);
                                       }
                                    );
                                 }}
                              >
                                 <FavoriteBorderIcon />
                              </IconButton>
                           )}
                           <MenuListComposition />
                           <ExpandMore
                              expand={expanded[u.id]}
                              onClick={() => handleExpandClick(u.id)}
                              aria-expanded={expanded}
                              aria-label="show more"
                           >
                              <ExpandMoreIcon />
                           </ExpandMore>
                        </CardActions>
                        <Collapse
                           in={expanded[u.id]}
                           timeout="auto"
                           unmountOnExit
                        >
                           <CardContent>
                              <Typography paragraph>
                                 Method: Heat 1/2 cup of the broth in a pot
                                 until simmering, add saffron and set aside for
                                 10 minutes. Heat oil in a (14- to 16-inch)
                                 paella pan or a large, deep skillet over
                                 medium-high heat. Add chicken, shrimp and
                                 chorizo, and cook, stirring occasionally until
                                 lightly browned, 6 to 8 minutes. Transfer
                                 shrimp to a large plate and set aside, leaving
                                 chicken and chorizo in the pan. Add pimentón,
                                 bay leaves, garlic, tomatoes, onion, salt and
                                 pepper, and cook, stirring often until
                                 thickened and fragrant, about 10 minutes. Add
                                 saffron broth and remaining 4 1/2 cups chicken
                                 broth; bring to a boil. Add rice and stir very
                                 gently to distribute. Top with artichokes and
                                 peppers, and cook without stirring, until most
                                 of the liquid is absorbed, 15 to 18 minutes.
                                 Reduce heat to medium-low, add reserved shrimp
                                 and mussels, tucking them down into the rice,
                                 and cook again without stirring, until mussels
                                 have opened and rice is just tender, 5 to 7
                                 minutes more. (Discard any mussels that don’t
                                 open.) Set aside off of the heat to let rest
                                 for 10 minutes, and then serve.
                              </Typography>
                           </CardContent>
                        </Collapse>
                     </Card>
                     <Snackbar
                        open={openAlert}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        anchorOrigin={{
                           vertical: "bottom",
                           horizontal: "left",
                        }}
                     >
                        <Alert onClose={handleClose} severity="error">
                           {props.errors.toString()}
                        </Alert>
                     </Snackbar>
                  </CardPadding>
               );
            });
         })}
      </>
   );
};

export default RecipeReviewCard;
