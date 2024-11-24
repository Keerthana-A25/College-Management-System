import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    Typography,
    Button,
    IconButton,
    Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate} from "react-router-dom";

const ViewStudent = () => {
    const navigate = useNavigate();
    const students = [
        { id: 1, name: "John Doe", regNumber: "12345", standard: "10th", dob: "2005-05-12", classTeacher: "Mrs. Smith" },
        { id: 2, name: "Jane Smith", regNumber: "12346", standard: "9th", dob: "2006-06-23", classTeacher: "Mr. Brown" },
        { id: 3, name: "Sam Wilson", regNumber: "12347", standard: "8th", dob: "2007-04-17", classTeacher: "Ms. Davis" },
        { id: 4, name: "Mary Adams", regNumber: "12348", standard: "11th", dob: "2004-09-10", classTeacher: "Mrs. Lee" },
        { id: 5, name: "Chris Taylor", regNumber: "12349", standard: "12th", dob: "2003-11-22", classTeacher: "Mr. Hall" },
        // Add more data as needed
    ];

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Calculate paginated data
    const paginatedStudents = students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleAddStudent = () => {
        navigate("/addStudent")
    };

    const handleEdit = (id) => {
        navigate("/addStudent", { state: { student: id } });
    };

    const handleDelete = (id) => {
        alert(`Delete student with ID: ${id}`);
    };

    return (
        <Paper sx={{ padding: 2, margin: "20px auto", maxWidth: "90%" }}>
            {/* Header with Add Student Button */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                <Typography variant="h5">View Students</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddStudent}
                >
                    Add Student
                </Button>
            </Box>

            {/* Student Table */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S. No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Reg Number</TableCell>
                            <TableCell>Standard</TableCell>
                            <TableCell>D.O.B</TableCell>
                            <TableCell>Class Teacher</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedStudents.map((student, index) => (
                            <TableRow key={student.id}>
                                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.regNumber}</TableCell>
                                <TableCell>{student.standard}</TableCell>
                                <TableCell>{student.dob}</TableCell>
                                <TableCell>{student.classTeacher}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => handleEdit(student.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(student.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
                component="div"
                count={students.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[2, 5, 10]}
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: 'center',
                    textAlign: 'center'

                }}
            />
        </Paper>
    );
};

export default ViewStudent;
