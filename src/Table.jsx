import React, { useState } from 'react'

const Table = ()=>{
    let [count,setCount] = useState(5);
    let dataheadings = ['Id','Name','Location'];
    let dataValue = [
        { id: 1, name: 'student 1', location : 'CBE'},
        { id: 2, name: 'student 2', location : 'CBE'},
        { id: 3, name: 'student 3', location : 'CBE'},
        { id: 4, name: 'student 4', location : 'CBE'},
        { id: 5, name: 'student 5', location : 'CBE'},
        { id: 6, name: 'student 6', location : 'CBE'},
        { id: 7, name: 'student 7', location : 'CBE'},
        { id: 8, name: 'student 8', location : 'CBE'},
        { id: 9, name: 'student 9', location : 'CBE'},
        { id: 10, name: 'student 10', location : 'CBE'},
        { id: 11, name: 'student 11', location : 'CBE'},
        { id: 12, name: 'student 12', location : 'CBE'},
        { id: 13, name: 'student 13', location : 'CBE'},
        { id: 14, name: 'student 14', location : 'CBE'},
        { id: 15, name: 'student 15', location : 'CBE'},
        { id: 16, name: 'student 16', location : 'CBE'},
        { id: 17, name: 'student 17', location : 'CBE'},
        { id: 18, name: 'student 18', location : 'CBE'},
        { id: 19, name: 'student 19', location : 'CBE'},
        { id: 20, name: 'student 20', location : 'CBE'},
        { id: 21, name: 'student 21', location : 'CBE'},
        { id: 22, name: 'student 22', location : 'CBE'},
        { id: 23, name: 'student 23', location : 'CBE'},
        { id: 24, name: 'student 24', location : 'CBE'},
        { id: 25, name: 'student 25', location : 'CBE'}
    ]


    function selectrow(event){
        count = parseInt(event.target.value);
        setCount(count) //use state
    }

  return (
    <div className='tableStructure'>
        <div className='d-flex align-items-center g-8'>
            <p>Select Rows:</p>
            <select id='tableRows' onChange={selectrow}>
                <option value={5} selected>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
            </select>
        </div>
     
        <p>Count Value is {count}</p>

        <div className='TablesList'>
            <table>
                <thead>
                    <tr>
                        {dataheadings.map((x)=>(
                            <th>{x}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {dataValue.slice(0,count).map((x)=>(
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.location}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>

        <br/><br/>
        
       
    </div>
  )
}

export default Table;