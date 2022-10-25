import { KeyboardArrowDown } from "@mui/icons-material"
import { Button, Grid, Menu, MenuItem } from "@mui/material"

export const FilterByStatus = (props) => {
    return <Grid container mt={2}>
        <Grid item>
            <Button id="dropbtn" endIcon={<KeyboardArrowDown />} sx={{ borderRadius:"50px",backgroundColor: '#F7F8F9', color: '#6A707C', fontFamily: 'Urbantist', fontWeight: 700 }}
                onClick={props.handleClick}
            >Filter by Status
            </Button>
            <Menu
                id="dropmenu"
                aria-labelledby="dropbtn"
                anchorEl={props.anchorEl}
                open={props.open}
                onClose={props.handleClose}
            >
                <MenuItem onClick={props.handleClose}  >Completed</MenuItem>
                <MenuItem onClick={props.handleClose}  >Partly Completed</MenuItem>
                <MenuItem onClick={props.handleClose}  >Pending</MenuItem>
            </Menu>
        </Grid>
    </Grid>
}