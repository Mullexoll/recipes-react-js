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
   TabletMac,
} from "@material-ui/icons";
import { styled } from "@mui/material/styles";

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
                  <Typography>Homepage</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Person />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Friends</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <List />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Lists</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <PhotoCamera />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Camera</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <PlayCircleOutline />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Videos</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Bookmark />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Collections</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <TabletMac />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Apps</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Storefront />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Market</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <Settings />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Settings</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
            <ItemStyle>
               <IconWrapper>
                  <ExitToApp />
               </IconWrapper>
               <TypographyTextWrapper>
                  <Typography>Logout</Typography>
               </TypographyTextWrapper>
            </ItemStyle>
         </Container>
      </StyleContainer>
   );
};

export default Leftbar;
