import React, { useState } from "react";
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const ViewSubject = () => {
    const location = useLocation();
    const { type } = location.state || {};

    const [data, setData] = useState(
        type === 'viewSubject'
            ? [
                { id: 1, subject: 'Math', staffName: 'Mr. John' },
                { id: 2, subject: 'Science', staffName: 'Mrs. Smith' },
                { id: 3, subject: 'History', staffName: 'Mr. Brown' },
                { id: 4, subject: 'English', staffName: 'Ms. Lee' },
            ]
            : [
                { semester: 'Semester 1', math: 'A', science: 'B', history: 'C', english: 'A', art: 'E', geography: 'B', physics: 'A' },
                { semester: 'Semester 2', math: 'B', science: 'A', history: 'B', english: 'C', art: 'D', geography: 'A', physics: 'B' },
            ]
    );

    return (
        <Container maxWidth="lg" sx={{padding: 5}}>
            {type === 'viewSubject' ? (
                <Box>
                    <Typography variant="h5" sx={{paddingBottom: 5}}>View Subject</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No</TableCell>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Staff Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.staffName}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ) : (
                <Box>
                    <Typography variant="h5" sx={{paddingBottom: 5}}>Academic Performance</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Semester</TableCell>
                                    <TableCell>Math</TableCell>
                                    <TableCell>Science</TableCell>
                                    <TableCell>History</TableCell>
                                    <TableCell>English</TableCell>
                                    <TableCell>Art</TableCell>
                                    <TableCell>Geography</TableCell>
                                    <TableCell>Physics</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.semester}</TableCell>
                                        <TableCell>{row.math}</TableCell>
                                        <TableCell>{row.science}</TableCell>
                                        <TableCell>{row.history}</TableCell>
                                        <TableCell>{row.english}</TableCell>
                                        <TableCell>{row.art}</TableCell>
                                        <TableCell>{row.geography}</TableCell>
                                        <TableCell>{row.physics}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Container>
    );
};

export default ViewSubject;
