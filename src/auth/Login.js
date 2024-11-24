import React, {useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from 'react-redux';
import {getLoggedUser} from "../redux/action";
import {isValidElement} from "../helper/helper";

// Validation Functions
const validateRegEmpId = (value) => {
    const regex = /^[A-Za-z0-9]{3,30}$/; // Alphanumeric, 3-20 characters, no spaces
    return regex.test(value);
};

const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, one special character
    return regex.test(value);
};

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedUserData } = useSelector((state) => ({
        isLoggedUserData: state?.appState?.isLoggedUserData
    }));

    const [regEmpId, setRegEmpId] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ regEmpId: "", password: "" });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        console.log('NEterrrreeeee1', isLoggedUserData, isValidElement(isLoggedUserData))
        if (isValidElement(isLoggedUserData)) {
            console.log('NEterrrr2')
            navigate("/home");
        } else if(isLoggedUserData === "Invalid User") {
            setErrorMessage(true);
        }
    }, [isLoggedUserData, navigate]);

    // Handle Input Changes
    const handleRegEmpIdChange = (e) => {
        setErrorMessage(false);
        const value = e.target.value;
        setRegEmpId(value);
        if (!validateRegEmpId(value)) {
            setErrors((prev) => ({ ...prev, regEmpId: "Invalid Reg/Emp ID (3-20 alphanumeric characters only)." }));
        } else {
            setErrors((prev) => ({ ...prev, regEmpId: "" }));
        }
        toggleButton(value, password);
    };

    const handlePasswordChange = (e) => {
        setErrorMessage(false);
        const value = e.target.value;
        setPassword(value);
        if (!validatePassword(value)) {
            setErrors((prev) => ({ ...prev, password: "Password must be strong (8+ characters, include upper, lower, number, special)." }));
        } else {
            setErrors((prev) => ({ ...prev, password: "" }));
        }
        toggleButton(regEmpId, value);
    };

    // Enable/Disable Login Button
    const toggleButton = (regEmpIdValue, passwordValue) => {
        if (validateRegEmpId(regEmpIdValue) && validatePassword(passwordValue)) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isButtonDisabled) {
            dispatch(getLoggedUser({emp_reg_id : regEmpId?.toString(), password : password}))
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                className="shadow p-4 bg-white rounded"
                style={{ width: 400 }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    ABC College of Engineering and Technology
                </Typography>

                {/* Reg/Emp ID Field */}
                <TextField
                    fullWidth
                    label="Reg/Emp ID"
                    variant="outlined"
                    value={regEmpId}
                    onChange={handleRegEmpIdChange}
                    error={!!errors.regEmpId}
                    helperText={errors.regEmpId}
                    margin="normal"
                />

                {/* Password Field */}
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    margin="normal"
                />

                {/* Login Button */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isButtonDisabled}
                    style={{ marginTop: "16px", marginBottom: "8px" }}
                >
                    Login
                </Button>

                {/* Forgot Password & Register */}
                <div className="d-flex justify-content-between">
                    <Typography variant="body2" color="textSecondary" style={{ cursor: "pointer" }}>
                        Forgot Password?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ cursor: "pointer" }}>
                        Register
                    </Typography>
                </div>
                {errorMessage && <p style={{ color: "red" }}>{"Invalid User. Please try again."}</p>}
            </Box>
        </div>
    );
};

export default Login;
