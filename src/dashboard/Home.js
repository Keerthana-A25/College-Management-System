import React, {useEffect, useState} from "react";
import { Box, Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from 'react-redux';
import {isValidElement} from "../helper/helper";

// const getInitials = (name) => {
//     const nameParts = name.split(" ");
//     return (
//         {isLoggedUserData?.first_name?.[0]}
//     {isLoggedUserData?.last_name?.[0]}
//     ).toUpperCase();
// };



const Home = ({ userName = "John Doe", onLogout }) => {
    const navigate = useNavigate();
    // const initials = getInitials(userName);

    const { isLoggedUserData } = useSelector((state) => ({
        isLoggedUserData: state?.appState?.isLoggedUserData
    }));

    const [menu, setMenu] = useState([]);

    useEffect(() => {
      console.log("NEterrrreeeee1111", isLoggedUserData?.type);
      if(isValidElement(isLoggedUserData) && isLoggedUserData.type === 'student' ) {

          setMenu([{ title: "Profile", description: "View your profile details.", type: "profile" },
              { title: "Edit Profile", description: "Edit your profile details.", type:  "editProfile" },
              { title: "View Subject", description: "View your subject details.", type: "viewSubject" },
              { title: "Academic Performance", description: "View your academic performance.", type: "academicPerformance" },
              ]
          )

      } else {
          setMenu([{ title: "Profile", description: "View your profile details.", type: "profile" },
              { title: "View Students", description: "View all students", type:  "student" },
              { title: "Add Student", description: "Create a new student.", type: "addStudent" },
              { title: "Edit Student", description: "Update student details.", type: "editStudent" }]
          )
      }


    }, []);

    const handleCardClick = (type) => {
        console.log('vncbsakjdhfbajhdfb', type);
        switch (type) {
            case "profile":
                navigate("/profile");
                break;
            case "student":
                navigate("/student");
                break;
            case "addStudent":
                navigate("/addStudent");
                break;
            case "editStudent":
                navigate("/student")
                break;
            case "editProfile":
                navigate("/profile")
                break;
            case "viewSubject":
                navigate("/viewSubject", { state: { type: 'viewSubject' }})
                break;
            case "academicPerformance":
                navigate("/viewSubject", { state: { type: 'academicPerformance' }})
                break;

            default:
                alert("Invalid action");
        }
    };

    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: "#f5f5f5",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Title Section */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginBottom={4}
            >
                <Box display="flex" alignItems="center">
                    <Avatar
                        sx={{
                            bgcolor: "#1976d2",
                            color: "#fff",
                            width: 56,
                            height: 56,
                            fontSize: "1.5rem",
                            marginRight: 2,
                        }}
                    >
                           {isLoggedUserData?.first_name?.[0]}
                        {isLoggedUserData?.last_name?.[0]}
                    </Avatar>
                    <Typography variant="h5" fontWeight="bold">
                        Welcome, {isLoggedUserData?.first_name}
                    </Typography>
                </Box>
            </Box>

            {/* Card Section */}
            <Grid container spacing={3}>
                {menu?.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                height: 150,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                transition: "transform 0.2s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                            onClick={() => handleCardClick(card.type)}
                        >
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" align="center">
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    align="center"
                                    mt={1}
                                >
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>


        </Box>
    );
};

export default Home;
