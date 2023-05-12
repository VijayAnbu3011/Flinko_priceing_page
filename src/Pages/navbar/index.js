import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../assests/logo.svg";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ButtonComponent from "../../components/atoms/ButtonComponent";

function Navbar(props) {
  const { window } = props;
  const drawerWidth = 240;
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  const handleDrawerToggle = () => {
    setDrawer((prestate) => !prestate);
  };
  const drawerData = (
    <Box onClick={handleDrawerToggle} className="h-100">
      <Box className="d-flex flex-column justify-content-between h-100">
        <Box>
          <Box width="100%" className="d-flex" justifyContent="flex-end">
            <Toolbar>
              <IconButton sx={{ display: { md: "none" } }}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </Box>
          <Divider />
          <List>
            <ListItem key={1} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => navigate("/weOffer")}
              >
                <ListItemText primary={"We Offer"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={2} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => navigate("/pricing")}
              >
                <ListItemText primary={"Pricing"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={3} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => navigate("/aboutUs")}
              >
                <ListItemText primary={"About Us"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={4} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => navigate("/contactUs")}
              >
                <ListItemText primary={"Contact Us"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Divider />
          <Grid
            className="d-flex flex-row m-2 "
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid>
              <Typography
                className="text-dark text-decoration-none cursor-pointer"
                fontSize={18}
                fontWeight={"500"}
              >
                Login
              </Typography>
            </Grid>
            <Grid
              className="d-flex"
              justifyContent="center"
              alignItems="center"
            >
              <ButtonComponent
                label="Get Free Trail"
                size="large"
                borderRadius="4px"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      className="ps-4"
      bgcolor="#fff"
      boxShadow="rgb(204, 204, 204) 0px 1px 17px"
      position="sticky"
      zIndex={1000}
      top={0}
      height={"20%"}
    >
      <Box
        className="d-flex flex-row  p-3"
        justifyContent={{
          md: "space-between",
          lg: "center",
          sm: "space-between",
          xs: "space-between",
        }}
        alignItems="center"
      >
        <img
          src={Logo}
          alt="logo"
          width={100}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <Box
          className="mt-2 mt-md-0 ms-md-auto"
          justifyContent="center"
          width="100%"
          display={{ xs: "none", sm: "none", md: "flex" }}
        >
          <Typography
            className="d-flex flex-row me-3 py-2  text-dark text-decoration-none cursor-pointer"
            onClick={() => navigate("/weOffer")}
          >
            We Offer{" "}
          </Typography>
          <Typography
            className="me-3 py-2 text-dark ps-3 text-decoration-none cursor-pointer"
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </Typography>
          <Typography
            className="me-3 py-2 ps-3 text-dark text-decoration-none cursor-pointer"
            onClick={() => navigate("/aboutUs")}
          >
            About Us
          </Typography>
          <Typography
            className="me-3 py-2 ps-3 text-dark text-decoration-none cursor-pointer"
            onClick={() => navigate("/contactUs")}
          >
            Contact Us
          </Typography>
        </Box>
        <Box
          className="mt-2 mt-md-0 ms-md-auto"
          justifyContent="space-around"
          width="30%"
          display={{ xs: "none", sm: "none", md: "flex" }}
        >
          <Typography
            className="d-flex flex-row me-3 py-2  text-dark text-decoration-none cursor-pointer"
            fontSize={18}
            fontWeight={"500"}
          >
            Login
          </Typography>
          <ButtonComponent
            label="Get Free Trail"
            size="large"
            borderRadius="4px"
          />
        </Box>
        <Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {drawer && (
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={drawer}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawerData}
          </Drawer>
        )}
      </Box>
    </Box>
  );
}

export default Navbar;
