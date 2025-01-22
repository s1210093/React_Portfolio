import React from 'react';
import Header from "../organisms/header";
import Profile_Card from "../organisms/profile-card";

import {ChakraProvider, defaultSystem} from "@chakra-ui/react";

const CarrerPage = () =>{
    return (
        <>
        <ChakraProvider value={defaultSystem}>
        <Header />
        <Profile_Card />
        </ChakraProvider>
        </>
        )
}

export default CarrerPage;