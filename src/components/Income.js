import React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import {  TextField, Stack, PrimaryButton } from 'office-ui-fabric-react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';

export default function Income () {

    const choiceGroupStyles = {
        root:{ margin: '20px 0', width: 320},
        //applicationRole: {width: '100%'}
    }

    const datePickerStyles = {
        iconName: 'robot',
        root:{ margin: '20px 0'},
     }

    const quantityStyles = {
        root:{ margin: '20px 0', color: '#619FB1'},
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
                        text: 'Job'
                    },
                    {
                        key: 'side hustle',
                        iconProps: { iconName: 'palette' },
                        text: 'Side hustle'
                    },
                ]}

                styles={choiceGroupStyles}
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
        </>
    )
}