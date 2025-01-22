import React from 'react';
import Header from "../organisms/header";
import SkillsCard from "./skill-card";
//import profileCard from "./components/organisms/profile-card";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";

const CarrerPage = () =>{
    return (
        <>
        <ChakraProvider value={defaultSystem}>
        <Header />
        <SkillsCard />
        </ChakraProvider>
        </>
        )
}

export default CarrerPage;