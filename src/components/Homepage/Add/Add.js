import {
   Button,
   Container,
   Fab,
   FormControlLabel,
   FormLabel,
   MenuItem,
   Modal,
   Radio,
   Alert,
   RadioGroup,
   Snackbar,
   TextField,
   Tooltip,
} from "@mui/material";
import { Add as AddIcon } from "@material-ui/icons";
import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("div")(({ theme }) => ({
   width: 500,
   height: 550,
   backgroundColor: "white",
   position: "absolute",
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
   margin: "auto",
   [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
   },
}));

const FabWr = styled("div")(() => ({
   position: "fixed",
   bottom: 20,
   right: 20,
}));

const FormWr = styled("div")(({ theme }) => ({
   padding: theme.spacing(2),
}));

const ItemWr = styled("div")(({ theme }) => ({
   marginBottom: theme.spacing(3),
}));

const Add = (props) => {
   const [open, setOpen] = useState(false);
   const [openAlert, setOpenAlert] = useState(false);
   const titleRef = useRef();
   const dateRef = useRef();
   const methodsRef = useRef();

   const RefText = () => {
      let title = titleRef.current.value;
      let date = dateRef.current.value;
      let methods = methodsRef.current.value;
      props.addNewRecipe(date, methods, title);
   };

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }

      setOpenAlert(false);
   };
   return (
      <>
         <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
            <FabWr>
               <Fab color="primary">
                  <AddIcon />
               </Fab>
            </FabWr>
         </Tooltip>
         <Modal open={open}>
            <ContainerWrapper>
               <Container>
                  <FormWr>
                     <form autoComplete="off">
                        <ItemWr>
                           <div>
                              <TextField
                                 inputRef={titleRef}
                                 id="standard-basic"
                                 label="Title"
                                 size="small"
                                 style={{ width: "100%" }}
                              />
                           </div>
                        </ItemWr>
                        <ItemWr>
                           <div>
                              <TextField
                                 id="outlined-multiline-static"
                                 multiline
                                 rows={4}
                                 defaultValue="Tell your recipe..."
                                 variant="outlined"
                                 inputRef={methodsRef}
                                 label="Description"
                                 size="small"
                                 style={{ width: "100%" }}
                              />
                           </div>
                        </ItemWr>
                        <ItemWr>
                           <div>
                              <TextField
                                 select
                                 label="Visibility"
                                 value="Public"
                                 inputRef={dateRef}
                              >
                                 <MenuItem value="Public">Public</MenuItem>
                                 <MenuItem value="Private">Private</MenuItem>
                                 <MenuItem value="Unlisted">Unlisted</MenuItem>
                              </TextField>
                           </div>
                        </ItemWr>
                        <ItemWr>
                           <div>
                              <FormLabel component="legend">
                                 Who can comment?
                              </FormLabel>
                              <RadioGroup>
                                 <FormControlLabel
                                    value="Everybody"
                                    control={<Radio size="small" />}
                                    label="Everybody"
                                 />
                                 <FormControlLabel
                                    value="My Friends"
                                    control={<Radio size="small" />}
                                    label="My Friends"
                                 />
                                 <FormControlLabel
                                    value="Nobody"
                                    control={<Radio size="small" />}
                                    label="Nobody"
                                 />
                              </RadioGroup>
                           </div>
                        </ItemWr>
                        <ItemWr>
                           <div>
                              <Button
                                 variant="outlined"
                                 color="primary"
                                 style={{ marginRight: 20 }}
                                 onClick={() => {
                                    setOpenAlert(true);
                                    RefText();
                                 }}
                              >
                                 Create
                              </Button>
                              <Button
                                 variant="outlined"
                                 color="secondary"
                                 onClick={() => setOpen(false)}
                              >
                                 Cancel
                              </Button>
                           </div>
                        </ItemWr>
                     </form>
                  </FormWr>
               </Container>
            </ContainerWrapper>
         </Modal>
         <Snackbar
            open={openAlert}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
         >
            <Alert onClose={handleClose} severity="success">
               This is a success message!
            </Alert>
         </Snackbar>
      </>
   );
};

export default Add;
