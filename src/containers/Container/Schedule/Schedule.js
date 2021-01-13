import React, { useMemo } from 'react'; 
import styles from './Schedule.module.css'; 
import { useTable } from 'react-table'; 
import dat from './dat.json'; 
import { COLUMNS } from './columns'; 
import Aux from '../../../hoc/Aux/Aux'; 


const Schedule = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => dat, [])

    const tableInstance = useTable({ 
        columns, 
        data
    })

    //destructiong a couple of methods from table instance 
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow  } = tableInstance;

    return ( 
    <Aux className={styles.Schedule}>
        <h1>Milestones</h1>
        <table
            {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {
                                headerGroups.headers.map( (column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }    
                        </tr>
                    ))
                }
                
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>})}
                            </tr>
                        )
                                }) 
                            }

            </tbody>
        </table>
    </Aux>
    )
    
}

export default Schedule; 