import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from  '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Tabs,Tab} from '@mui/material';
import { styled } from '@mui/material/styles'
import MyMenu from './Menu';
import { Route, BrowserRouter, Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
    
    const [selectedTab, setSelectedTab] = useState(0);
    const location = useLocation();
    const nowPagePath = location.pathname;
    
    const handleChange = (event, newValue) => {
        
        setSelectedTab(newValue);
    };
    
    return(<>
        <AppBar position='sticky' sx={{ width: '100vw' }}>
            <Box sx={{ flexGrow: 1}}>

                <Toolbar>
                    <MyMenu />
                    
                    <Typography variant="h5" component="div" sx=        {{flexGlow:1}}>
                        Self Produce
                    </Typography>
                
                <Box sx={{flexGrow: 1}}>
                <Tabs>
                    <Tab label="Top" component={Link} to={"/"}/>
                    <Tab label="Carrer" component={Link} to={"/carrer"}/>
                    <Tab label="Skills" component={Link} to={"/skill"} />
                </Tabs>
                </Box>
                </Toolbar>
                
            </Box>
        </AppBar>
        </>
    )
}
