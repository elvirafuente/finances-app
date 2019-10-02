import React, {useState} from 'react';
import Add from './Add'
import Activity from './Activity'
import Budget from './Budget'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Stack,  FontIcon, Text } from 'office-ui-fabric-react';
import { Route, Switch, Link } from 'react-router-dom';



export default function Dashboard (){
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const printHeader = () => {
        return (
            <Stack className='btn__menu-open' onClick={()=> setMenuIsOpen(false)} >
                <FontIcon iconName='burger' className='btn__icon'/>
            </Stack>
        )
    }

    const printBody = () => {
        return (
            <>
                <Link to="/dashboard/add" onClick={()=> setMenuIsOpen(false)} > 
                    <Stack className='btn__default primary' >
                        <FontIcon iconName='file-invoice-dollar' className='btn__icon'/>
                        <Text className='btn__text'>add record</Text>
                    </Stack>
                </Link>
                <Link to="/dashboard/activity" onClick={()=> setMenuIsOpen(false)} > 
                    <Stack className='btn__default primary' >
                        <FontIcon iconName='chart-line' className='btn__icon'/>
                        <Text className='btn__text'>check activity</Text>
                    </Stack>
                </Link>
                <Link to="/dashboard/budget" onClick={()=> setMenuIsOpen(false)} > 
                    <Stack className='btn__default primary' >
                        <FontIcon iconName='sliders-h' className='btn__icon'/>
                        <Text className='btn__text'>create budget</Text>
                    </Stack>
                </Link>
            </>
        )
    }

    return (
        <>
            <Stack className='btn__menu' onClick={()=> setMenuIsOpen(true)} >
                <FontIcon iconName='burger' className='btn__icon'/>
            </Stack>
            <Panel
                isOpen={menuIsOpen}
                type={PanelType.customNear}
                customWidth='50%'
                onDismiss={()=> setMenuIsOpen(false)}
                onRenderHeader={printHeader}
                onRenderBody={printBody}
                hasCloseButton={false}
                isLightDismiss={true}
            ></Panel>
            <Switch >
                <Route exact path='/dashboard/Add' component={Add} />
                <Route exact path='/dashboard/activity' component={Activity} />
                <Route exact path='/dashboard/budget' component={Budget} />
            </Switch>
        </>
    )
}