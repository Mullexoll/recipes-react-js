import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CardPadding = styled("div")(({ theme }) => ({
   padding: theme.spacing(3),
   [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
   },
}));

const DescriptionStyle = styled("div")(() => ({
   overflow: "hidden",
   textOverflow: "ellipsis",
   height: "78px",
}));

const Friends = (props) => {
   return (
      <>
         {props.allUsers.map((u) => {
            return (
               <CardPadding>
                  <Card sx={{ maxWidth: 245 }}>
                     <CardMedia
                        component="img"
                        height="260"
                        image={u.img}
                        alt={u.lastName}
                     />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {`${u.firstName} ${u.lastName}`}
                        </Typography>
                        <DescriptionStyle>
                           <Typography variant="body2" color="text.secondary">
                              {u.description}
                           </Typography>
                        </DescriptionStyle>
                     </CardContent>
                     <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                     </CardActions>
                  </Card>
               </CardPadding>
            );
         })}
      </>
   );
};

export default Friends;
