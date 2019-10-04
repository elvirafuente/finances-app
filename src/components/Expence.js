import React, {useContext} from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import {  TextField, Stack, PrimaryButton } from 'office-ui-fabric-react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { ContextBudget } from '../context/ContextBudget'


export default function Expence () {

    const {data, setData, inputObject, setInputObject, saveInput, objectModel} = useContext(ContextBudget)


    const choiceGroupStyles = {
        root:{ margin: '10px 0 0'},
        iconWrapper: {fontSize: 28}
    }

    const datePickerStyles = {
        iconName: 'robot',
        root:{ margin: '10px 0'}
    }

    const quantityStyles = {
        root:{ margin: '10px 0'},
        icon: {color: '#619FB1'}
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
        const newObject = {...inputObject, id: newId}
        const newArray = [...data].concat(newObject);
        setData(newArray)
        setInputObject(objectModel)
    }

    return (
        <Stack verticalAlign='center' grow={1}>
            <ChoiceGroup 
                label="Tipo de gasto"
                selectedKey={inputObject.source}
                onChange={handleSource}
                options={[
                    {
                        key: 'bill',
                        iconProps: { iconName: 'bill', styles: {fontSize: 10}},
                        text: 'Factura',
                        styles: {iconWrapper: {fontSize: 25}, labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'groceries',
                        iconProps: { iconName: 'groceries'},
                        text: 'Comida',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'pet',
                        iconProps: { iconName: 'pet'},
                        text: 'Mascota',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'transport',
                        iconProps: { iconName: 'transport'},
                        text: 'Transporte',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'social',
                        iconProps: { iconName: 'social'},
                        text: 'Social',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'health',
                        iconProps: { iconName: 'health'},
                        text: 'Salud',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                ]}
                styles={choiceGroupStyles}
                className="choice-group"
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
                className='input' 
                type="number" 
                iconProps={{iconName: 'calculator'}} 
                styles={quantityStyles}
                onChange={handleQuantity}
                value={inputObject.quantity}
            />
            <TextField 
                underlined 
                label="Descripción" 
                multiline 
                rows={3} 
                className='input' 
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
    )
}