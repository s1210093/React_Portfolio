import React from 'react';
import Header from "../organisms/header";

import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import Timeline_Carrer from "./Timeline_carrer";

const CarrerPage = () =>{
    return (
        <>
        <ChakraProvider value={defaultSystem}>
        <Header/>
        <Timeline_Carrer/>
        </ChakraProvider>
        </>
        )
}

export default CarrerPage;