import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { Container } from "@mui/system";
import CustomButton from "../../components/CustomButton/CustomButton";
import welcome from '../../assets/welcome.png';


const WelcomePage = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#fff",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));


    return (
        <Box sx={{
            backgroundImage: `url(${welcome})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: "80vh",
            position: 'relative',
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(254, 216, 1, 0.7)',
                zIndex: 1,
            }} />
            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 10,
                                mb: 4,
                            }}
                        >
                            Welcome to Eats And Vibes
                        </Typography>
                        <Title variant="h1">
                            Heaven On Earth
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            Immerse yourself in the elegant ambiance as you savor each bite, accompanied by our extensive selection of hand-picked wines and carefully curated cocktails.
                        </Typography>
                        <CustomButton
                            backgroundColor="#0F1B4C"
                            color="#fff"
                            buttonText="More About Us"
                            welcomeBtn={true}
                        />
                    </Box>

                    <Box sx={{ flex: "1.25" }}>
                        <img
                            src={welcome}
                            alt="welcome"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default WelcomePage;

