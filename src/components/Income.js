import React, {useContext} from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import {  TextField, Stack, PrimaryButton } from 'office-ui-fabric-react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { ContextBudget } from '../context/ContextBudget'


export default function Income () {

    const {data, setData, objectModel, setObjectModel, saveInput} = useContext(ContextBudget)


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
        // const newObject = {
        //     ...objectModel,
        //     source: opt.key
        // }
        // setObjectModel(newObject)
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
        saveInput('quantity', value)
    }

    const handleDescription = ({target}) =>{
        const {value} = target
        saveInput('description', value)
    }

    const handleSave = () => {
        const newId = !data.length ? 1 : (data[data.length-1].id + 1);
        saveInput('id', newId)
        const newObject = {...objectModel, id: newId}
        const newArray = [...data].concat(newObject);
        setData(newArray)
    }


    return (
        <>
        <Stack verticalAlign='center' grow={1} styles={{root: {width: '100%'}}}>
            <ChoiceGroup 
                label="Source of income"
                defaultSelectedKey="day"
                options={[
                    {
                        key: 'job',
                        iconProps: { iconName: 'robot'},
                        text: 'Job',
                    },
                    {
                        key: 'side hustle',
                        iconProps: { iconName: 'palette' },
                        text: 'Side hustle',
                    },
                ]}
                styles={choiceGroupStyles}
                onChange={handleSource}
            />
            <DatePicker 
                styles={datePickerStyles}
                label='Date'
                underlined
                onSelectDate={handleDate}
            />
            <TextField 
                underlined 
                label="Quantity" 
                type="number" 
                iconProps={{iconName: 'calculator'}} 
                styles={quantityStyles}
                onChange={handleQuantity}
            />
            <TextField 
                underlined 
                label="Description" 
                multiline 
                styles={{root:{margin: '0 0 10px 0'}}}
                onChange={handleDescription}
            />
            <PrimaryButton 
                text="Save" 
                iconProps={{iconName: 'save'}} 
                styles={{root: {width: '100px'}}}
                onClick={handleSave}
            />
        </Stack>
        </>
    )
}