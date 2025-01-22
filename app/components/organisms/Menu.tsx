import React from "react";
//import {useRef, useState} from "react";
import { Menu, MenuItem } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const MyMenu: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState<boolean>(false);

    const anchorEl = React.useRef<HTMLButtonElement>(null);


    const handleClick = () => {
        setOpen(!open);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const TopLink = () => {
        navigate("/");
        handleClose();
    };

    const CarrerLink = () =>{
        navigate("/carrer");
        handleClose();
    }

    const SkillLink = () => {
        navigate("/skill");
        handleClose();
    }
    return (
        <>
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={handleClick}
        aria-label="menu"
        sx={{mr:2}}
        >
        <MenuIcon />
        </IconButton>
        <Menu
            anchorEl={anchorEl.current}
            open={open}
            disableAutoFocusItem={false}
            autoFocus={false}
            onClose={handleClose}
            keepMounted
            transitionDuration={"auto"}
            sx={{}}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left"
            }}
            MenuListProps={{}}
        >
                <MenuItem onClick={TopLink}>Self Produce</MenuItem>
                <MenuItem onClick={CarrerLink}>Carrer</MenuItem>
                <MenuItem onClick={SkillLink}>Products</MenuItem>
            </Menu>
        </>
    )
}
export default MyMenu;