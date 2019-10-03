import React, { useState, createContext } from 'react';

export const ContextBudget = createContext();

export const ProviderBudget = ({children}) => {

    const [data, setData] = useState([])

    const [objectModel, setObjectModel] = useState({
        id: '',
        date: {
            completeDate: new Date(),
            day: '',
            month: '',
            year: '',
        },
        type: 'income',
        source: '',
        quantity: '',
        description: '',
    })

    const saveInput = (key, value) =>{
        const newObject = {
            ...objectModel,
            [key]: value
        }
        setObjectModel(newObject)
    }

    return (
        <ContextBudget.Provider value={{data, setData, objectModel, setObjectModel, saveInput}}>
            {children}
        </ContextBudget.Provider>
    )
}