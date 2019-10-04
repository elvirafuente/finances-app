import React, {useContext} from 'react';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import Income from './Income'
import Expence from './Expence'
import { ContextBudget } from '../context/ContextBudget'

export default function Add () {

    const {saveInput, inputObject} = useContext(ContextBudget)

    const pivotStyles = {
        root: { marginTop: 10 },
        //itemContainer: {width: '100%'}
    }

    const handleType = e =>{
        saveInput('type', e.props.itemKey)
    }
    
    return (
        <Stack horizontalAlign='start' className='section'>
            <Pivot linkSize={PivotLinkSize.large} styles={pivotStyles}  onLinkClick={handleType} selectedKey={inputObject.type}>
                <PivotItem headerText="Ingresos" itemIcon="income" itemKey='income'>
                    <Income />
                </PivotItem>
                <PivotItem headerText="Gastos" itemIcon="expence" className='pivot__title' itemKey='expence'>
                    <Expence />
                </PivotItem>
            </Pivot>
        </Stack>
    )
}