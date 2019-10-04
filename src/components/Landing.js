import React from 'react';
import { Image, Stack,  FontIcon, Text } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Link } from 'react-router-dom'


import logo from '../icons/logo.svg'

export default function Landing (){

    const stackStyles = {
        root: {
            height: '100%'
        }
      }

    return (
        <Stack tokens={{ childrenGap: 5 }} verticalAlign='space-evenly' styles={stackStyles} horizontalAlign='center' >
            <Stack horizontal horizontalAlign='center' verticalAlign='end' styles={{root:{marginTop: 30}}}>
                <Image src={logo} alt="logo" width='20%' />
                <h1 className="app__tittle">budget friendly</h1>
            </Stack>
            <Stack>
                <Link to="/dashboard/add"> 
                    <Stack className='btn__default'>
                        <FontIcon iconName='cliplist' className='btn__icon'/>
                        <Text className='btn__text'>añadir registro</Text>
                    </Stack>
                </Link>
                <Link to="/dashboard/activity">     
                    <Stack className='btn__default' >
                        <FontIcon iconName='chart-line' className='btn__icon'/>
                        <Text className='btn__text'>ver actividad</Text>
                    </Stack>
                </Link>
                <Link to="/dashboard/budget">
                    <Stack className='btn__default' >
                        <FontIcon iconName='sliders-h' className='btn__icon'/>
                        <Text className='btn__text'>crear presupuesto</Text>
                    </Stack>
                </Link>    
            </Stack>
        </Stack>
    )
}