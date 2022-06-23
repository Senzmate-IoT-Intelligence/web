import React from 'react';
import PropTypes from 'prop-types';
import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import {visuallyHidden} from '@mui/utils';
import {Avatar, Button, Grid, TextField} from "@mui/material";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import ListItemText from "@mui/material/ListItemText";
import EditIcon from '@mui/icons-material/Edit';
import {Modal} from "@material-ui/core";
import {Link} from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";

function createData(id, paymentId, fat, carbs, protein, paymentAmt) {
    return {
        id,
        paymentId,
        fat,
        carbs,
        protein,
        paymentAmt,
    };
}



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'ID Num',
    },
    {
        id: 'paymentId',
        numeric: true,
        disablePadding: false,
        label: 'Payment No',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'name',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Payment Time',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Payment Date',
    },
    {
        id: 'paymentAmt',
        numeric: true,
        disablePadding: false,
        label: 'Payment Amount',
    },
    {
        id: 'other_action',
        numeric: true,
        disablePadding: false,
        label: 'Other Action',
    },

];

function EnhancedTableHead(props) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Manage Payments
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            ) : (
                // <Tooltip title="Filter list">
                //     <IconButton>
                //         <FilterListIcon />
                //     </IconButton>
                <Button  component={Link} to={"/add_payment"} variant={"outlined"} sx={{width: "200px", color:"#000", bgcolor:"#fff"}}
                        startIcon={<AddCircleTwoToneIcon/>}>Add
                    Detail</Button>
                // </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};


const ManagePayment = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('paymentId');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    // const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [id, setId] = React.useState()


    const [posts, setPosts] = useState([]);

    const rows = posts;

    useEffect(() => {
      Axios.get("http://localhost:5000/api/payment/getall")
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        })
        .catch((err) => console.log(err));
    });

    const deleteCat = async (_id) => {
        Axios.delete("http://localhost:5000/api/payment/delete/"+_id)
            .then((res) => {
                console.log(res.data._id);
            })
            .catch((err) => console.log(err));
    }



    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

   

    // const handleChangeDense = (event) => {
    //     setDense(event.target.checked);
    // };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        setId(id);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <Box sx={{width: '95%', margin: "auto"}}>
                <Paper sx={{width: '100%', mb: 2, bgcolor: "#00186E", color: "#ffffff"}}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer sx={{maxHeight: 440}}>
                        <Table
                            stickyHeader
                            sx={{minWidth: 750}}
                            aria-labelledby="tableTitle"
                            size={/*dense ? 'small' :*/ 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                // onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row._id}
                                                selected={isItemSelected}
                                            >
          
                                                <TableCell padding="checkbox" sx={{color: "#fff"}}>
                                                    <Checkbox
                                                        onClick={(event) => handleClick(event, row._id)}
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    // sx={{display:"flex", alignItems:"center"}}
                                                    sx={{color: "#fff"}}
                                                >
                                                    <Grid container justifyContent={"center"} alignItems={"center"}>
                                                        <ListItemText primary={row.idNumber}/>
                                                    </Grid>
                                                    {/*{row.name}*/}
                                                    {/*{row.name}*/}
                                                </TableCell>
                                                <TableCell sx={{color: "#fff"}}
                                                           align="right">{row.paymentNo}</TableCell>
                                                <TableCell sx={{color: "#fff"}} align="right">{row.name}</TableCell>
                                                <TableCell sx={{color: "#fff"}} align="right">{row.paymentTime}</TableCell>
                                                <TableCell sx={{color: "#fff"}} align="right">{row.paymentDate}</TableCell>
                                                <TableCell sx={{color: "#fff"}}
                                                           align="right">{row.paymentAmount}</TableCell>
                                                <TableCell sx={{color: "#fff"}} align="right">
                                                    <Button sx={{margin: "0px 10px", color:"#000", bgcolor:"#fff"}}
                                                            variant="contained"
                                                            startIcon={<EditIcon/>}>
                                                        Edit
                                                    </Button>
                                                    <Button sx={{margin: "0px 10px", color:"#000", bgcolor:"#fff"}} onClick={() => handleOpen(row._id)} variant="outlined"
                                                            startIcon={<DeleteIcon/>}>
                                                        Delete
                                                    </Button></TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (/*dense ? 33 :*/ 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        sx={{color: "#fff"}}
                        rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                {/*<FormControlLabel*/}
                {/*    control={<Switch checked={dense} onChange={handleChangeDense} />}*/}
                {/*    label="Dense padding"*/}
                {/*/>*/}
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={style}>
                    <Grid container direction={"row"} spacing={6} justifyContent={"center"} alignItems={"center"}>

                        <Grid item direction={"row"} xs={12}>
                            <Typography align={"center"} id="modal-modal-title" variant="h5" component="h2">
                                Delete Account
                            </Typography>
                            <Typography align={"center"} id="modal-modal-title" variant="body1" component="h2">
                                You'll permanently loss
                            </Typography>
                            <Typography align={"center"} id="modal-modal-title" variant="body1" component="h2">
                                Payment Details
                            </Typography>
                            <Typography align={"center"} id="modal-modal-title" variant="body1" component="h2">
                                Are You Sure ?
                            </Typography>
                        </Grid>


                        <Grid container spacing={5} item direction={"row"} justifyContent={"center"}
                              alignItems={"center"}>

                            <Grid item>
                                <Button  variant={"outlined"} sx={{color:"#00186E", borderColor:"#00186E"}} onClick={handleClose}>Cancel</Button>
                            </Grid>

                            <Grid item>
                                <Button onClick={() => {
                                    deleteCat(id)
                                    handleClose()
                                    }} sx={{color:"#fff", bgcolor:"#00186E"}} variant={"contained"}>Delete</Button>
                            </Grid>


                        </Grid>

                    </Grid>

                </Paper>
            </Modal>
        </>
    );
};

export default ManagePayment;
