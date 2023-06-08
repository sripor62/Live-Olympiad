import {
  Avatar,
  Box,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { CustomButton } from "../../components/CustomButton";
import { useStore } from "../../stores";
import { useNavigate } from "react-router-dom";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name) {
  if (name?.split(" ")[0] && name?.split(" ")[1]) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: { lg: "56px", xs: "30px" },
        height: { lg: "56px", xs: "30px" },
      },
      children: `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`,
    };
  } else if (name?.split(" ")[0][0]) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: { lg: "56px", xs: "30px" },
        height: { lg: "56px", xs: "30px" },
      },
      children: `${name?.split(" ")[0][0]}`,
    };
  }
}
const Header = (props) => {
  const currentUser = useStore((state) => state.currentUser);
  const currentStudent = JSON.parse(sessionStorage.getItem("current_student"));
  const [drawerFlag, setDrawerFlag] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <Grid
      container
      px={4}
      py={2}
      alignItems="center"
      sx={{ backgroundColor: "#4545A5" }}
    >
      <Grid item xs={11} sm={11} md={9} lg={9}>
        <Box>
          <img
            src="../images/brand.svg"
            style={{ minWidth: "100px", width: "70%", maxWidth: "180px" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={5}
        sm={4}
        md={3}
        lg={3}
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "50px",
            padding: "7px,7px,7px,14px",
            width: { lg: "283px", xs: "115px", sm: "235px" },
            height: { lg: "70px", xs: "50px" },
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={7} md={8.5} lg={8} sm={9}>
              <Grid container>
                <Grid
                  item
                  md={12}
                  lg={12}
                  xs={8}
                  sx={{ pl: { lg: 4, xs: 1, sm: 2 } }}
                >
                  <Typography variant="subtitle2">
                    <Box
                      sx={{
                        fontFamily: "Urbanist",
                        fontWeight: 450,
                        fontSize: { lg: "18px", xs: "16px" },
                        marginTop: { lg: "0px", md: "4px", xs: "10px" },
                      }}
                    >
                      {currentStudent?.fullName?.split(" ")[0]}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={2.5} lg={3} xs={5} sm={3}>
              <Box sx={{ ml: "18px" }}>
                <Tooltip title="Profile">
                  <IconButton
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      style={{ marginTop: { lg: "0px", xs: "10px" } }}
                      {...stringAvatar(currentStudent?.fullName)}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  View Profile
                </MenuItem>
                <MenuItem>
                  <CustomButton
                    onClick={() => {
                      navigate("/parent");
                    }}
                    btnText="EXIT"
                    variant="contained"
                    sx={{
                      ":hover": { bgcolor: "#8B8000", color: "white" },
                      p: 1,
                      fontFamily: "Urbanist",
                      color: "black",
                      borderRadius: "16px",
                      width: "80px",
                      height: "36px",
                      fontSize: "12px",
                      backgroundColor: "#F9BB47",
                      fontWeight: 600,
                    }}
                  />
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}
        >
          <IconButton
            onClick={() => {
              setDrawerFlag(true);
            }}
          >
            <MenuIcon sx={{ color: "#FFFFFF", fontSize: "40px" }} />
          </IconButton>
        </Grid>
      }
      {drawerFlag && (
        <MenuDrawer
          {...props}
          open={drawerFlag}
          setDrawerFlag={setDrawerFlag}
        />
      )}
    </Grid>
  );
};

export default Header;
