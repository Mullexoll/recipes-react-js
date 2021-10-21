import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const ContainerWrapper = styled("div")(({ theme }) => ({
   paddingTop: theme.spacing(1),
   position: "sticky",
   top: 0,
}));

const TitleStyle = styled("div")(() => ({
   fontSize: 16,
   fontWeight: 500,
   color: "#555",
}));

const LinkStyle = styled("div")(({ theme }) => ({
   marginRight: theme.spacing(1),
   color: "#555",
}));

const Rightbar = () => {
   return (
      <ContainerWrapper>
         <Container>
            <TitleStyle>
               <Typography gutterBottom>Online Friends</Typography>
            </TitleStyle>
            <AvatarGroup max={4}>
               <Avatar
                  alt="Элайджа Вуд"
                  src="https://www.film.ru/sites/default/files/styles/thumb_260x320/public/people/1455458-917892.jpg"
               />
               <Avatar
                  alt="Дэниель Редклиф"
                  src="https://www.film.ru/sites/default/files/people/1459631-1567405.jpg"
               />
               <Avatar
                  alt="Сальма Хайек"
                  src="https://ivona.ua/i/53/03/87/7/5303877/d0b714a005d923dc600941e4635931c9-quality_100Xallow_enlarge_0Xw_600Xh_0.jpg"
               />
               <Avatar
                  alt="Agnes Walker"
                  src="https://www.clipartmax.com/png/middle/21-214382_female-clipart-transparent-female-avatar.png"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://www.clipartmax.com/png/middle/21-214382_female-clipart-transparent-female-avatar.png"
               />
            </AvatarGroup>

            <TitleStyle>
               <Typography gutterBottom>Gallery</Typography>
            </TitleStyle>

            <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
               <ImageListItem>
                  <img
                     src="https://yasensvit.ua/uploads/recipes/prev/5fa3d7b07c386.jpg"
                     alt=""
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src="https://img.fresh.ru/unsafe/576x/https%3A%2F%2Fimg.fresh.ru%2Ffresh-article-20200220%2F528-614aceef6224b4b3196062744973682d52912372.jpg"
                     alt=""
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src="https://gotovim-doma.ru/images/recipe/9/43/9434edb2b717ea25d4e36c012af3f9f5_l.jpg"
                     alt=""
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src="https://e0.edimdoma.ru/data/recipes/0004/6780/46780-ed4_wide.jpg?1628837380"
                     alt=""
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src="https://mport.ua/i/84/56/15/845615/image_main/ca6877aa2b5396e4de8e2ffd370557db-quality_70Xresize_crop_1Xallow_enlarge_0Xw_1200Xh_643.jpg"
                     alt=""
                  />
               </ImageListItem>
               <ImageListItem>
                  <img
                     src="https://receptisalatov.com/content/recipes/1053/main_b_obed-iz-farsha-i-kartofelya.jpg"
                     alt=""
                  />
               </ImageListItem>
            </ImageList>
            <TitleStyle>
               <Typography gutterBottom>Categories</Typography>
            </TitleStyle>
            <LinkStyle>
               <Link href="#" underline="hover" variant="h6">
                  Sport
               </Link>
            </LinkStyle>
            <LinkStyle>
               <Link href="#" underline="hover" variant="h6">
                  Food
               </Link>
            </LinkStyle>
            <LinkStyle>
               <Link href="#" underline="hover" variant="h6">
                  Music
               </Link>
            </LinkStyle>
            <Divider flexItem style={{ marginBottom: 5 }} />
            <LinkStyle>
               <Link href="#" underline="hover" variant="h6">
                  Movies
               </Link>
            </LinkStyle>
            <LinkStyle>
               <Link href="#" underline="hover" variant="h6">
                  Science
               </Link>
            </LinkStyle>
            <LinkStyle>
               <Link href="#" underline="hover" variant="h6">
                  Life
               </Link>
            </LinkStyle>
         </Container>
      </ContainerWrapper>
   );
};

export default Rightbar;
