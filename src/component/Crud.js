import React, { useState } from 'react'


export default function Crud(props) {  

    const [username, setUsername] =useState()
    const [age, setAge] =useState()
    const [update, setUpdate] = useState(false)
    const [edit, setEdit] = useState(false)
    
    const[data, setData] = useState([])
        
    const onEdit = (id)=>{

        setUpdate(true)

        setEdit(id)

        const dt = data.find(item=>item.id === id)

        setUsername(dt.Username)
        setAge(dt.age)


    }

    const onDelete = (id)=>{
            

        const dt = data.filter(item=>item.id !== id)
        setData(dt)
    }

    const onClear = ()=>{

        setUsername("")
        setAge("")
        setUpdate(false)

    }

    const onUpdate=()=>{

        const dt = data.map((item) =>
            item.id === edit ? { ...item, Username: username, age: age } : item
          );
        
          setData(dt);
          setEdit(false)
          setUpdate(false)
    }

    const onSave = ()=>{

        const dt = [...data]

        const newData = {
            id : data.length+1,
            Username : username,
            age : age
        }
        dt.push(newData)
        setData(dt)

    }

  return (
    <div style={{
        color: props.mode.color, 
        backgroundColor: props.mode.backgroundColor, 
      }}>
        <div style={{
        color: props.mode.color, 
        backgroundColor: props.mode.backgroundColor, 
      }}>
        Username: <input type="text" className='mx-2' value={username} onChange={(e)=>setUsername(e.target.value)} />
        Age: <input type="number" className='mx-2' value={age} onChange={(e)=>setAge(e.target.value)} />
        {update ?
            <button className='btn btn-warning mx-2' onClick={()=>{onUpdate(edit)}}>Update</button>
            :
            <button className='btn btn-success mx-2' onClick={onSave}>Save</button>
        }
            <button className='btn btn-danger mx-2' onClick={onClear}>Clear</button>
        </div>
      <table className='table table-hover' style={{
        color: props.mode.color, 
        backgroundColor: props.mode.backgroundColor, 
      }}>
        <thead>
            <tr>
                <td>S.No</td>
                <td>Id</td>
                <td>Username</td>
                <td>Age</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody style={{
        color: props.mode.color, 
        backgroundColor: props.mode.backgroundColor, 
      }}>
            {
            data.map((item,index)=>{

                return(
                    <> 
                    <tr> 
                    <td>{index + 1}</td>
                    <td>{item.id}</td>  
                    <td>{item.Username}</td>
                    <td>{item.age}</td>
                    <td>
                        <button className='btn btn-success mx-3' onClick={()=>{onEdit(item.id)}}>Edit</button>
                        <button className='btn btn-danger mx-3' onClick={()=>{onDelete(item.id)}}>Delete</button>
                    </td>
                    </tr>
                    </>
                )

            })
                
                }
            </tbody>
      </table>
    </div>
  )
}
