import React from 'react';
import {Button, Grid, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {makeStyles, withStyles} from "@material-ui/core";
import Axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
    input: {
        color: "white"
    }
});
const CssTextField = withStyles({
    root: {
        color:"#fff",

        '& fieldset': {
            borderColor: '#ffffff',
        },
        '& label': {
            color: '#ffffff',
        },
        '& label.Mui-focused': {
            color: '#adadad',
        },
        '& label.Mui-focused.Mui-error ': {
            color: '#cd0000',
        },
        // '& .MuiInput-underline:after': {
        //     borderBottomColor: 'green',
        // },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                // borderColor: 'red',
                // borderRadius: "30px",
            },
            '&:hover fieldset': {
                borderColor: '#adadad',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#adadad',
            },
            '&.Mui-error fieldset': {
                borderColor: '#cd0000',

            },
            '&.Mui-error:hover fieldset': {
                borderColor: '#cd0000',

            },

        },

    },
})(TextField);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: '#00186E',
    p: 4,
};

const AddPayment = () => {
    const classes = useStyles();

    const url = "http://localhost:5000/api/payment/create"

    const [data, setData] = useState({
        paymentNo:"",
        paymentDate:"",
        name:"",
        paymentAmount:"",
        paymentTime: "",
        idNumber:""

    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            paymentNo: data.paymentNo,
            paymentDate: data.paymentDate,
            name: data.name,
            paymentAmount: data.paymentAmount,
            paymentTime: data.paymentTime,
            idNumber: data.idNumber

        })
            .then(res => {
                console.log(res.data);
                alert("Added successfully")
            })
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }


    return (
        <div>
            <Paper sx={style}>
            <form onSubmit = {(e) => submit(e)}>
                <Grid container direction={"row"} spacing={6} justifyContent={"center"} alignItems={"center"}>

                    <Grid item direction={"row"} xs={12}>
                        <Typography align={"center"} id="modal-modal-title" variant="h5" component="h2" sx={{color:"#fff"}}>
                            Add Payment Details
                        </Typography>
                    </Grid>
                    

                    <Grid item direction={"row"} xs={6}>
                        <CssTextField inputProps={{ className: classes.input }} onChange = {(e) => handle(e)} value = {data.paymentNo}  fullWidth id="paymentNo" label="Payment No" variant="outlined" sx={{color:"#fff"}}/>
                    </Grid>
                    <Grid item direction={"row"} xs={6}>
                        <CssTextField inputProps={{ className: classes.input }} onChange = {(e) => handle(e)} value = {data.paymentDate}  fullWidth id="paymentDate" label="Payment Date" variant="outlined"/>
                    </Grid>

                    <Grid item direction={"row"} xs={6}>
                        <CssTextField inputProps={{ className: classes.input }} onChange = {(e) => handle(e)} value = {data.name} fullWidth id="name" label="Name" variant="outlined"/>
                    </Grid>
                    <Grid item direction={"row"} xs={6}>
                        <CssTextField inputProps={{ className: classes.input }} onChange = {(e) => handle(e)} value = {data.paymentAmount} fullWidth id="paymentAmount" label="Payment Amount" variant="outlined"/>
                    </Grid>

                    <Grid item direction={"row"} xs={6}>
                        <CssTextField inputProps={{ className: classes.input }} onChange = {(e) => handle(e)} value = {data.paymentTime}  fullWidth id="paymentTime" label="Payment Time" variant="outlined"/>
                    </Grid>
                    <Grid item direction={"row"} xs={6}>
                        <CssTextField inputProps={{ className: classes.input }} onChange = {(e) => handle(e)} value = {data.idNumber} fullWidth id="idNumber" label="Id Number" variant="outlined"/>
                    </Grid>

                    <Grid container spacing={5} item direction={"row"} justifyContent={"center"} alignItems={"center"}>

                        <Grid item>
                            <Button type = "submit" variant={"contained"} sx={{color:"#000", bgcolor:"#fff"}}>Add</Button>
                        </Grid>

                        <Grid item>
                            <Button  sx={{color:"#ffffff", borderColor:"#fff"}} component={Link} to={"/manage_payment"} variant={"outlined"}>Cancel</Button>
                        </Grid>


                    </Grid>
                   

                </Grid>
                </form>
            </Paper>
        </div>
    );
};

export default AddPayment;
