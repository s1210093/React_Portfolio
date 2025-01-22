import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";

const skills = [
    {
        category: "言語",
        items: ["Python", "C++"],
        key: "la"
    },
    {
        category: "OS",
        items: ["Windows", "Linux", "macOS"],
        key: "os"
    },
    {
        category:"マイコン",
        items:["Arduino", "Raspberry Pi", "Jetson Nano"],
        key: "mi"
    },
    {
        category:"クラウド",
        items:["AWS"],
        key: "cl"
    }
]

export default function SkillsCard() {
    return (
        <Grid container spacing={2} style={{padding:"20px"}}>
            {skills.map((skillCategory)=>(
                <Grid size={8}>
                <Card variant="outlined" style={{ height:"100%" }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            {skillCategory.category}
                        </Typography>
                        <Typography>
                            <ul style={{margin:0, paddingLeft: "20px"}}>
                            {skillCategory.items.map((item, index) =>(
                                <li key={index}>
                                    <Typography variant="body1">{item}</Typography>
                                </li>
                            ))}
                        </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
            
        </Grid>
        
    );
};

