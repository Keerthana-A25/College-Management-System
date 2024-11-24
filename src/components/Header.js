import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Box,
    Divider,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useSelector} from "react-redux";

const Header = ({ userName = "John Doe" }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { isLoggedUserData } = useSelector((state) => ({
        isLoggedUserData: state?.appState?.isLoggedUserData
    }));

    // Check if the current screen is the login screen
    const isLoginScreen = location.pathname === "/";

    // Check if the current screen is the dashboard
    const isDashboard = location.pathname === "/home";

    const [logoutModalOpen, setLogoutModalOpen] = useState(false);

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous screen
    };

    const handleLogout = () => {
        // Clear cache and navigate to login
        localStorage.clear();
        sessionStorage.clear();
        setLogoutModalOpen(false)

        // navigate("/");
        navigate("/", { replace: true });
        console.log('Eeeeeeeee2');
    };

    if (isLoginScreen) {
        return null; // No header on the login screen
    }

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "none",
                    borderBottom: "1px solid #E0E0E0", // Light gray bottom border
                }}
            >
                <Toolbar>
                    {/* Back Button */}
                    {!isDashboard && (
                        <IconButton edge="start" onClick={handleBackClick} sx={{ color: "#000" }}>
                            <ArrowBackIcon />
                        </IconButton>
                    )}

                    {/* Title */}
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            color: "#000", // Black title
                            textTransform: "capitalize",
                        }}
                    >
                        {isDashboard ? "Dashboard" : location.pathname.slice(1).replace("-", " ")}
                    </Typography>

                    {/* Avatar and Username */}
                    <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                        <Avatar
                            sx={{
                                bgcolor: "secondary.main",
                                mr: 1,
                                color: "#FFF",
                                backgroundColor: "#1976D2", // Primary blue
                            }}
                        >
                            {isLoggedUserData?.first_name?.[0]}
                            {isLoggedUserData?.last_name?.[0]}
                        </Avatar>
                        <Typography variant="body1" sx={{ color: "#000" }}>
                            {isLoggedUserData?.first_name + ' ' + isLoggedUserData?.last_name }
                        </Typography>
                    </Box>

                    {/* Logout Button */}
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => setLogoutModalOpen(true)}
                        sx={{ ml: 2 }}
                    >
                        Logout
                    </Button>
                </Toolbar>
                <Divider />
            </AppBar>

            {/* Logout Confirmation Modal */}
            <Dialog open={logoutModalOpen} onClose={() => setLogoutModalOpen(false)}>
                <DialogTitle>Logout</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to logout?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setLogoutModalOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogout} color="error">
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Header;
