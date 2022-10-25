import { Button, Input } from '@mui/material'
import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

export const CustomButton = (props) => {
    const { btnText, btnHandler, startIcon, endIcon, upload, loading, onUpload, multiple, btnClass,...otherProps } = props
    return <>
        {
            upload ?
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" onChange={onUpload} multiple={multiple} type="file" style={{ display: "none" }} />
                    <Button

                        startIcon={startIcon && startIcon}
                        endIcon={endIcon && endIcon}
                        style={btnClass}
                        component="span"
                        {...otherProps}
                    >
                        {btnText}

                    </Button>
                </label>
                : loading ?
                    <LoadingButton
                        {...otherProps}
                        startIcon={startIcon && startIcon}
                        endIcon={endIcon && endIcon}
                        style={btnClass}

                    >
                        Save
                    </LoadingButton>
                    : <Button
                        {...otherProps}
                        startIcon={startIcon && startIcon}
                        endIcon={endIcon && endIcon}
                        style={btnClass}

                    >
                        {btnText}
                    </Button>
        }
    </>

}
