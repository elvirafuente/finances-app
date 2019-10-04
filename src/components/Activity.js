import React, {useContext} from 'react';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { ContextBudget } from '../context/ContextBudget'
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { Stack } from 'office-ui-fabric-react';


export default function Activity () {
    const {data, setData, inputObject, saveInput} = useContext(ContextBudget)

    const columns = [
        {
            key: 'type',
            name: 'Tipo',
            ariaLabel: 'Press to sort',
            fieldName: 'type',
            iconName: 'sticky-note',
            isIconOnly: false,
            iconClassName: 'icon-list',
            minWidth: 60,
            maxWidth: 60,
            isPadded: false
        },
        {
            key: 'source',
            name: 'Fuente',
            ariaLabel: 'Press to sort',
            fieldName: 'source',
            iconName: 'plug',
            isIconOnly: false,
            iconClassName: 'icon-list',
            minWidth: 60,
            maxWidth: 70,
            isPadded: false
        },
        {
            key: 'date',
            name: 'Fecha',
            ariaLabel: 'Press to sort',
            fieldName: 'date',
            iconName: 'calendar',
            isIconOnly: false,
            iconClassName: 'icon-list',
            minWidth: 60,
            maxWidth: 70,
            isPadded: false
        },
        {
            key: 'quantity',
            name: 'Cantidad',
            ariaLabel: 'Press to sort',
            fieldName: 'quantity',
            iconName: 'calculator',
            isIconOnly: false,
            iconClassName: 'icon-list',
            minWidth: 60,
            maxWidth: 70,
            isPadded: false
        },
        // {
        //     key: 'description',
        //     name: 'Descripción',
        //     ariaLabel: 'Press to sort',
        //     fieldName: 'description',
        //     iconName: 'calculator',
        //     isIconOnly: false,
        //     iconClassName: 'icon-list',
        //     isPadded: false
        // },
        
    ]
    
    const items = data.map(item=>{
        return (
            {
                key: item.id,
                type: item.type,
                source: item.source,
                date: `${item.date.day}/${item.date.month}/${item.date.year}`,
                quantity: item.quantity,
                description: item.description,             
            }
        )
    })

    const paintItemColumn = (item,index, column) =>{
        const typeText = item.type==='income'? 'Ingreso' : 'Gasto'
        let sourceText = ''
        if(item.source==='job'){
            sourceText = 'Empleo principal'
        } else if(item.source==='side hustle'){
            sourceText = 'Actividad paralela'
        } else if(item.source==='groceries'){
            sourceText = 'Comida'
        } else if(item.source==='pet'){
            sourceText = 'Mascota'
        } else if(item.source==='transport'){
            sourceText = 'Transporte'
        } else if(item.source==='social'){
            sourceText = 'Social'
        } else if(item.source==='health'){
            sourceText = 'Salud'
        } else if(item.source==='bill'){
            sourceText = 'Factura'
        }


        switch (column.key){
            case 'type':
                return (
                     <span className={item.type==='income'? 'green': 'purple'} ><FontIcon iconName={item.type} /> {typeText}</span>
                );
            
                case 'source':
                        return (
                            <span className={item.type==='income'? 'green': 'purple'} ><FontIcon iconName={item.source}/> {sourceText}</span>
                        );
                case 'date':
                        return (
                            <span className={item.type==='income'? 'green': 'purple'} >{item.date}</span>
                        );
                case 'quantity':
                        return (
                            <span className={item.type==='income'? 'green': 'purple'} > {`${item.type==='income'? '+' : '-'} ${item.quantity} €`}</span>
                        );
                case 'description':
                        return (
                            <span className={item.type==='income'? 'green': 'purple'} >{item.description}</span>
                        );
            
            default :
                return 'hola';
        }
    }

    const selectItem = item =>{
        console.log(item)
    }

    return (
        <>
        <Stack horizontalAlign='start' className='section'>
            <DetailsList
                //compact={true}
                items={items}
                //styles={{headerWrapper: {backgroundColor: 'red'}}}
                columns={columns}
                onRenderItemColumn={paintItemColumn}
                onActiveItemChanged={selectItem}
                selectionMode='none'
                checkboxVisibility={2}
                //cellStyleProps={{cellLeftPadding:0, cellRightPadding:0 } }
                //styles={{cellTitle:{padding: 0}}}
            />
        </Stack>
        </>
    )
}