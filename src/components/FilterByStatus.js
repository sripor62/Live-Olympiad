import { KeyboardArrowDown } from "@mui/icons-material"
import { Button, Grid, Menu, MenuItem } from "@mui/material"

export const FilterByStatus = (props) => {
    return <Grid xs={12} sm={3} md={4} lg={3} mt={2}>
        <Button id="dropbtn" endIcon={<KeyboardArrowDown />} sx={{ backgroundColor: '#F7F8F9', color: '#6A707C',fontFamily:'Urbantist',fontWeight:700}}
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
}