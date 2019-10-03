import React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import {  TextField, Stack, PrimaryButton } from 'office-ui-fabric-react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';

export default function Expence () {

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

    return (
        <Stack verticalAlign='center' grow={1}>
            <ChoiceGroup 
                label="Type of expence"
                defaultSelectedKey="day"
                options={[
                    {
                        key: 'bills',
                        iconProps: { iconName: 'file-invoice-dollar', styles: {fontSize: 10}},
                        text: 'Bills',
                        styles: {iconWrapper: {fontSize: 25}, labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'food-home',
                        iconProps: { iconName: 'shopping-basket'},
                        text: 'Food',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'pet',
                        iconProps: { iconName: 'pet'},
                        text: 'Pet',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'transport',
                        iconProps: { iconName: 'car'},
                        text: 'Transport',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'social',
                        iconProps: { iconName: 'glass-cheers'},
                        text: 'Social',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                    {
                        key: 'health',
                        iconProps: { iconName: 'health'},
                        text: 'Health',
                        styles: {iconWrapper: {fontSize: 25},  labelWrapper: {fontSize: 14, paddingTop: 0, height: 15}, innerField: {padding: '0 15px'}, field: {padding:10} }                  
                    },
                ]}
                styles={choiceGroupStyles}
                className="choice-group"
            />
            <DatePicker 
                placeholder="Select a date..."
                styles={datePickerStyles}
                label='Date'
                borderless
            />
            <TextField borderless label="Quantity" className='input' type="number" iconProps={{iconName: 'calculator'}} styles={quantityStyles}/>
            <TextField borderless label="Description" multiline rows={3} className='input' styles={{root:{margin: '0 0 10px 0'}}} />
            <PrimaryButton text="Save" iconProps={{iconName: 'save'}} styles={{root: {width: '100px'}}}/>
        </Stack>
    )
}