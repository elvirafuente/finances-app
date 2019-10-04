import React, {useContext} from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import {  TextField, Stack, PrimaryButton } from 'office-ui-fabric-react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { ContextBudget } from '../context/ContextBudget'


export default function Income () {

    const {data, setData, inputObject, saveInput, setInputObject, objectModel} = useContext(ContextBudget)


    const choiceGroupStyles = {
        root:{ margin: '10px 0'},
    }

    const datePickerStyles = {
        iconName: 'robot',
        root:{ margin: '10px 0'},
     }

    const quantityStyles = {
        root:{ margin: '10px 0', color: '#619FB1'},
    }

    const handleSource = ( e , opt)=>{
        saveInput('source', opt.key)
    }

    const handleDate = date =>{
        const dateSelected = {
            completeDate: date,
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        }
        saveInput('date', dateSelected)
    }

    const handleQuantity = ({target}) =>{
        const {value} = target
        saveInput('quantity', parseFloat(value))
    }

    const handleDescription = ({target}) =>{
        const {value} = target
        saveInput('description', value)
    }

    const handleSave = () => {
        const newId = !data.length ? 1 : (data[data.length-1].id + 1);
        //saveInput('id', newId)
        const newObject = {...inputObject, id: newId}
        const newArray = [...data].concat(newObject);
        setData(newArray)
        setInputObject(objectModel)
    }


    return (
        <>
        <Stack verticalAlign='center' grow={1} styles={{root: {width: '100%'}}}>
            <ChoiceGroup 
                label="Fuente de ingreso"
                selectedKey={inputObject.source}
                options={[
                    {
                        key: 'job',
                        iconProps: { iconName: 'job'},
                        text: 'Empleo principal',
                    },
                    {
                        key: 'side hustle',
                        iconProps: { iconName: 'side hustle' },
                        text: 'Actividad paralela',
                    },
                ]}
                styles={choiceGroupStyles}
                onChange={handleSource}
            />
            <DatePicker 
                styles={datePickerStyles}
                label='Fecha'
                underlined
                onSelectDate={handleDate}
                value={inputObject.date.completeDate}
            />
            <TextField 
                underlined 
                label="Cantidad" 
                type="number" 
                iconProps={{iconName: 'calculator'}} 
                styles={quantityStyles}
                onChange={handleQuantity}
                value={inputObject.quantity}
            />
            <TextField 
                underlined 
                label="Descripción" 
                styles={{root:{margin: '0 0 10px 0'}}}
                onChange={handleDescription}
                value={inputObject.description}
            />
            <PrimaryButton 
                text="Guardar" 
                iconProps={{iconName: 'save'}} 
                styles={{root: {width: '100px'}}}
                onClick={handleSave}
            />
        </Stack>
        </>
    )
}