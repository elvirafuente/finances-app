import React from 'react';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import {  TextField, Stack } from 'office-ui-fabric-react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';

export default function Income () {

    const choiceGroupStyles = {
        root:{ marginTop: '10px'}
    }

    return (
        <>
        <Stack verticalAlign='center' className='main' grow={1}>
            <ChoiceGroup 
                label="Source of income"
                defaultSelectedKey="day"
                options={[
                    {
                        key: 'job',
                        iconProps: { iconName: 'robot', root: {color: 'red'} },
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
                styles={{icon: 'calendar'}}
                className='input'

            />
            <TextField label="Quantity" className='input' type="number"/>
            <TextField label="Description" multiline rows={3} className='input'/>
            </Stack>
        </>
    )
}