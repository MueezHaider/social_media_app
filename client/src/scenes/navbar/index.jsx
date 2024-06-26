import { useState } from "react";
import { Box,IconButton,InputBase,Typography,Select,MenuItem,FormControl,useTheme,useMediaQuery, Icon } from "@mui/material";
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from "@mui/icons-material";
import { useDispatch,useSelector } from "react-redux";
import { setMode,setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { Form } from "formik";


const Navbar=()=>{
    const [isMobileMenuToggled, setisMobileMenuToggled] = useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user= useSelector((state)=>state.user);
    const isNonMobileScreens= useMediaQuery("(min-width:1000px)");
    const theme=useTheme();
    const neutralLight=theme.palette.neutral.light;
    const dark=theme.palette.neutral.dark;
    const background=theme.palette.background.default;
    const primaryLight=theme.palette.primary.light;
    const alt=theme.palette.background.alt;

    const fullName = user ? `${user.firstName} ${user.lastName}` : 'Guest';
    return(
    <FlexBetween paddding="1rem 6%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Typography fontWeight="bold" fontSize="clamp(1rem,2rem,2.25rem)" color="primary"
                onClick={()=>navigate("/home")}
                sx={{
                    "&:hover": {
                      color: primaryLight,
                      cursor: "pointer",
                    },
                  }}
                >
                    MEDIASTIC
                </Typography>
                {isNonMobileScreens &&(
                    <FlexBetween backgroundColor={neutralLight} gap="3 rem" borderRadius="9px" padding="0.1 rem 1.5 rem" >
                        <InputBase>placeholder="Search..."</InputBase>
                        <IconButton>
                            <Search/>
                        </IconButton>
                    </FlexBetween> 
                )}  
                </FlexBetween> 
        {/* DESKTOP NAV */}
                    {isNonMobileScreens ? (<FlexBetween gap="2rem"> <IconButton onClick={()=> dispatch(setMode())}>
                        {theme.palette.mode==="dark"? ( <DarkMode sx={{fontSize:"25px"}}/>) :<LightMode sx={{color:dark,fontSize:"25px"}}/>}
                    </IconButton>
            
            <Message sx={{fontSize:"25px"}}/>
            <Notifications sx={{fontSize:"25px"}}/>
            <Help sx={{fontSize:"25px"}}/>
            <FormControl variant="standard" value={fullName}>
                <Select
                    value={fullName}
                    sx={{
                        backgroundColor:neutralLight,
                        width :"150px",
                        borderRadius:"0.25 rem",
                        p:"0.25 rem 1 rem",
                        "& .MuiSvgIcon-root":{
                            pr:"0.25rem",
                            width:"3rem",
                        },
                        "& .MuiSelect-select:focus": {
                            backgroundColor: neutralLight,
                          }
                    }}>
                    input={<InputBase/>}
                    <MenuItem value={fullName}>
                        <Typography>{fullName}</Typography>
                    </MenuItem>
                <MenuItem onClick={()=>dispatch(setLogout())}>Log Out</MenuItem>
                </Select>

            </FormControl>
            </FlexBetween>
            ):( 
                <IconButton onClick={()=>setisMobileMenuToggled(!isMobileMenuToggled)}>
                    <Menu/>     
                </IconButton>
            )}

            {/*Mobile Nav*/}
            {!isNonMobileScreens && isMobileMenuToggled &&(
                <Box
                        position="fixed"
                        right="0"
                        bottom="0"
                        height="100%"
                        zIndex="10"
                        maxWidth="500px"
                        minWidth="300px"
                        backgroundColor={background}
                        >
                    {/* CLOSE ICON*/}
                    <Box display="flex" justifyContent="flex-end" p="1rem">
                    <IconButton onClick={()=>setisMobileMenuToggled(!isMobileMenuToggled)}>
                            <Close/>
                            </IconButton>
                                </Box>
                              
                                 {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
                            <Select
                                value={fullName}
                                sx={{
                                    backgroundColor: neutralLight,
                                    width: "150px",
                                    borderRadius: "0.25rem",
                                    p: "0.25rem 1rem",
                                    "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem",
                                    },
                                    "& .MuiSelect-select:focus": {
                                    backgroundColor: neutralLight,
                                    },
                                }}
                                input={<InputBase />}       
                                >
                                <MenuItem value={fullName}>
                                    <Typography>{fullName}</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
                                </Select>


                            </FormControl>
                             </FlexBetween>
                    </Box>
                )}


        
        </FlexBetween> )
    }
    export default Navbar;