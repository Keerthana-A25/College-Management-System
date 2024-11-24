import React, { useState } from "react";
import {
    Container,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import {updateProfileAction} from "../redux/action";
import {forcePersistFlush} from "../store/store";

const Profile = () => {
    const dispatch = useDispatch();

    const { isLoggedUserData } = useSelector((state) => ({
        isLoggedUserData: state?.appState?.isLoggedUserData
    }));


console.log('dvjksdhjkvgsdgfkjsdhgfjshedfgsjhd', isLoggedUserData);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        firstName: isLoggedUserData?.first_name ?? '',
        lastName: isLoggedUserData?.last_name ?? '',
        dateOfBirth: isLoggedUserData?.dob ?? '',
        gender: isLoggedUserData?.gender ?? '',
        bloodGroup: isLoggedUserData?.bloodGroup ?? '',
        contactNumber: isLoggedUserData?.phone ?? '',
        address: isLoggedUserData?.address ?? '',
        id: isLoggedUserData?.id ?? ''
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (field, value) => {
        setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
    };

    const handleSubmit = () => {
        setIsEditing(false);
        dispatch(updateProfileAction(profile));
        forcePersistFlush();
        // alert("Profile updated successfully!");

        // Add API call here to save the updated profile data
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Profile Picture */}
                <Avatar
                    sx={{
                        width: 100,
                        height: 100,
                        bgcolor: "primary.main",
                        mb: 2,
                        fontSize: "32px",
                    }}
                >
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                </Avatar>
                <Typography variant="h5" gutterBottom>
                    Profile
                </Typography>

                <Box sx={{ width: "100%", mt: 2 }}>
                    {/* Editable Fields */}
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="First Name"
                                value={profile.firstName}
                                onChange={(e) => handleChange("firstName", e.target.value)}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                value={profile.lastName}
                                onChange={(e) => handleChange("lastName", e.target.value)}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="Date of Birth"
                                type="date"
                                value={profile.dateOfBirth}
                                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                                disabled={!isEditing}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="Gender"
                                value={profile.gender}
                                onChange={(e) => handleChange("gender", e.target.value)}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="Blood Group"
                                value={profile.bloodGroup}
                                onChange={(e) => handleChange("bloodGroup", e.target.value)}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="Contact Number"
                                value={profile.contactNumber}
                                onChange={(e) => handleChange("contactNumber", e.target.value)}
                                disabled={!isEditing}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="Address"
                                value={profile.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                disabled={!isEditing}
                                multiline
                                rows={3}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton color="primary" onClick={handleEditClick}>
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    {/* Submit Button */}
                    {isEditing && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            fullWidth
                            sx={{ mt: 3 }}
                        >
                            Submit
                        </Button>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default Profile;
