import React, { useState, createContext } from 'react';

export const ContextBudget = createContext();

export const ProviderBudget = ({children}) => {

    const [data, setData] = useState([{
        id: 1,
        date: {
            completeDate: new Date(),
            day: '4',
            month: '10',
            year: '2019',
        },
        type: 'income',
        source: 'job',
        quantity: '125',
        description: 'hgt fds',
    }])

    const objectModel = {
        id: '',
        date: {
            completeDate: new Date(),
            day: new Date().getDate(),
            month: new Date().getMonth()+1,
            year: new Date().getFullYear(),
        },
        type: 'income',
        source: '',
        quantity: '',
        description: '',
    }

    const [inputObject, setInputObject] = useState(objectModel)

    const saveInput = (key, value) =>{
        const newObject = {
            ...inputObject,
            [key]: value
        }
        setInputObject(newObject)
    }

    return (
        <ContextBudget.Provider value={{data, setData, inputObject, setInputObject, saveInput, objectModel}}>
            {children}
        </ContextBudget.Provider>
    )
}