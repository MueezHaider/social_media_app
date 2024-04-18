import Navbar from "scenes/navbar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width: 1080px)");

    return (
        <Box>
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography fontWeight={700} fontSize="32px" color="primary">
                    MEDIASTIC
                </Typography>
            </Box>
            <Box
                width={isNonMobileScreen ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight={500} variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome To Mediastic, the medium of Mediastic
                </Typography>
                <Form />
            </Box>
        </Box>
    );
};

export default LoginPage;
