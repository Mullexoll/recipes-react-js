import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Footer() {
   return (
      <footer>
         <Box
            px={{ xs: 1, sm: 4 }}
            py={{ xs: 1, sm: 4 }}
            bgcolor="#1976d2"
            color="white"
         >
            <Container maxWidth="lg">
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                     <Box borderBottom={3} fontSize="20px">
                        Help
                     </Box>
                     <Box pt={{ xs: 2 }}>
                        <Link
                           href="/"
                           color="inherit"
                           style={{ textDecoration: "none" }}
                        >
                           Contact
                        </Link>
                     </Box>
                     <Box>
                        <Link
                           href="/"
                           color="inherit"
                           style={{ textDecoration: "none" }}
                        >
                           Support
                        </Link>
                     </Box>
                     <Box>
                        <Link
                           href="/"
                           color="inherit"
                           textDecoration="none"
                           style={{ textDecoration: "none" }}
                        >
                           Privacy
                        </Link>
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Box borderBottom={3} fontSize="20px">
                        Account
                     </Box>
                     <Box pt={{ xs: 2 }}>
                        <Link
                           href="/"
                           color="inherit"
                           style={{ textDecoration: "none" }}
                        >
                           Login
                        </Link>
                     </Box>
                     <Box>
                        <Link
                           href="/"
                           color="inherit"
                           style={{ textDecoration: "none" }}
                        >
                           Register
                        </Link>
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Box borderBottom={3} fontSize="20px">
                        Messages
                     </Box>
                     <Box pt={{ xs: 2 }}>
                        <Link
                           href="/"
                           color="inherit"
                           style={{ textDecoration: "none" }}
                        >
                           Backup
                        </Link>
                     </Box>
                     <Box>
                        <Link
                           href="/"
                           color="inherit"
                           style={{ textDecoration: "none" }}
                        >
                           History
                        </Link>
                     </Box>
                     <Box>
                        <Link
                           href="/"
                           color="inherit"
                           style={{ textDecoration: "none" }}
                        >
                           Roll
                        </Link>
                     </Box>
                  </Grid>
               </Grid>
               <Box
                  textAlign="center"
                  pt={{ xs: 1, sm: 2 }}
                  pb={{ xs: 1, sm: 1 }}
                  fontSize="20px"
               >
                  Created with Material UI v5.0.4 &reg;{" "}
                  {new Date().getFullYear()} Muliar Oleksii
               </Box>
            </Container>
         </Box>
      </footer>
   );
}
