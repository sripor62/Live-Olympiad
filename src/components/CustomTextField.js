import { Box, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'

import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, {useState} from 'react';

export const CustomTextField = (props) => {
    const { required, type, readOnlyValue, errorMsz, error, startIcon = false, endIcon, inputLabel, select, options, selectDefaultOption,...otherProps } = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
        console.log("check1",showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return <>
        {
            inputLabel &&
            <Box mb={2}>
                <Typography variant='body1' component="span">
                    <Box fontWeight="bold">{inputLabel}{required && <sub style={{ position: "absolute" }}>*   </sub>}</Box>
                </Typography>
            </Box>
        }
        {
            select ?
                <TextField {...otherProps}>
                    <MenuItem key={selectDefaultOption.value} value={selectDefaultOption.value}>
                        {selectDefaultOption.label}
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                : <TextField
                    type={type!=="tel"&&type!=="date"&&type!=="email"&&type!="text" ? showPassword ? "text" : "password" : type}
                    InputProps={{
                        readOnly: readOnlyValue,
                        startAdornment: startIcon && (
                            <InputAdornment position="start">
                                {startIcon}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            type!=="tel"&&type!=="date"&&type!=="email"&&type!="text" ?
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <img src='../images/Groups.png'/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                                : 
                                endIcon && <InputAdornment position="start">
                                    {endIcon}
                                </InputAdornment> 
                        )
                    }}
                    {...otherProps}
                />
        }
        {
            required && error &&
            <Typography variant='body1' className="errorDom" component="span" style={{ color: "rgb(211, 47, 47)", fontSize: 12 }}>
                <Box>{errorMsz}</Box>
            </Typography>
        }
    </>
}
