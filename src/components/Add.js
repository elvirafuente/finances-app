import React from 'react';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import Income from './Income'
import Expence from './Expence'

export default function Add () {

    const pivotStyles = {
        root: { marginTop: 20 },
        //itemContainer: {width: '100%'}
    }
    
    return (
        <Stack horizontalAlign='start' className='section'>
            <Pivot linkSize={PivotLinkSize.large} styles={pivotStyles}>
                <PivotItem headerText="Incomes" itemIcon="piggy-bank" >
                    <Income />
                </PivotItem>
                <PivotItem headerText="Expences" itemIcon="wallet" className='pivot__title'>
                    <Expence />
                </PivotItem>
            </Pivot>
        </Stack>
    )
}