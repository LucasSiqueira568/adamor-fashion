import React, { createContext, useState } from 'react';


export const Container = createContext({});

export const ContextProvider = ({ children }) => {
    return(
        <Container.Provider value={{ }}>
            {children}
        </Container.Provider>
    )
}