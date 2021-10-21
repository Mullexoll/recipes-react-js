import { Container, Typography } from "@material-ui/core";
import {
   Bookmark,
   List,
   ExitToApp,
   Home,
   Person,
   PhotoCamera,
   PlayCircleOutline,
   Settings,
   Storefront,
} from "@material-ui/icons";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import nb from "./Leftbar.module.css";

const StyleContainer = styled("div")(({ theme }) => ({
   height: "100vh",
   color: "white",
   paddingTop: theme.spacing(1),
   backgroundColor: theme.palette.primary.main,
   position: "sticky",
   top: 0,
   [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
   },
}));

const ItemStyle = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   marginBottom: theme.spacing(2),
   [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(2),
      cursor: "pointer",
   },
}));

const IconWrapper = styled("div")(({ theme }) => ({
   marginRight: theme.spacing(1),
   [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
   },
}));

const TypographyTextWrapper = styled("div")(({ theme }) => ({
   fontWeight: 500,
   [theme.breakpoints.down("sm")]: {
      display: "none",
   },
}));

const Leftbar = () => {
   return (
      <StyleContainer>
         <Container>
            <ItemStyle>
               <IconWrapper>
                  <Home />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/homepage">
                     <Typography className={nb.hoverLink}>Главная</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Person />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/friends">
                     <Typography className={nb.hoverLink}>Друзья</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <List />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/lists">
                     <Typography className={nb.hoverLink}>Списки</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <PhotoCamera />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/photo">
                     <Typography className={nb.hoverLink}>Фото</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <PlayCircleOutline />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/video">
                     <Typography className={nb.hoverLink}>Видео</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Bookmark />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/collection">
                     <Typography className={nb.hoverLink}>Избранное</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Storefront />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/market">
                     <Typography className={nb.hoverLink}>Маркет</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Settings />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/settings">
                     <Typography className={nb.hoverLink}>Настройки</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <ExitToApp />
               </IconWrapper>
               <TypographyTextWrapper>
                  <NavLink className={nb.activeLink} to="/logout">
                     <Typography className={nb.hoverLink}>Выход</Typography>
                  </NavLink>
               </TypographyTextWrapper>
            </ItemStyle>
         </Container>
      </StyleContainer>
   );
};

export default Leftbar;
