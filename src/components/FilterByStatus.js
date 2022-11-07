import { KeyboardArrowDown } from "@mui/icons-material"
import { Button, Grid, Menu, MenuItem } from "@mui/material"

export const FilterByStatus = ({setPage,handleClick,anchorEl,open,handleClose}) => {
    return <Grid container mt={2}>
        <Grid item>
            <Button id="dropbtn" endIcon={<KeyboardArrowDown />} sx={{ borderRadius:"50px",backgroundColor: '#F7F8F9', color: '#6A707C', fontFamily: 'Urbantist', fontWeight: 700 }}
                onClick={handleClick}
            >Filter by Status
            </Button>
            <Menu
                id="dropmenu"
                aria-labelledby="dropbtn"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{setPage(4); handleClose()}}  >Completed</MenuItem>
                <MenuItem onClick={()=>{setPage(5); handleClose()}}  >Partly Completed</MenuItem>
                <MenuItem onClick={()=>{setPage(6); handleClose()}}  >Pending</MenuItem>
            </Menu>
        </Grid>
    </Grid>
}