import React, { useState } from 'react'
import Navdb from '../../Componets/Navdb'
import Button from '@mui/material/Button';
import axios from 'axios';
import api from '../Server';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    var[title,setTitle] = useState("")
    var[content,setContent] = useState("")
    var[file,setFile] = useState(null)
    var nav = useNavigate()

    function add(props){
        axios.post(api,
        {
            
            title : title,
            content : content,
            image : file,

        },{
            headers:{
                "content-type":"multipart/form-data",
            }
        }
        ).then(res=>{console.log(res.data)}).catch(res=>{console.log(res.data)})
    }

    return (
        <div style={{backgroundColor:"#F3F3F3", minHeight:"100vh"}}>
            <Navdb colAdd="#E96363" />
            <h1 className='container mt-4'><b>Add</b> </h1>
            <div className='d-flex flex-column justify-content-center align-items-center container mt-4 p-4'
                style={{borderRadius:"25px",background:"#FFF"}}
            >
                <div className='w-100 mb-4'>
                    <p className='mb-1'>Title</p>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="title" onChange={e=>{setTitle(e.target.value)}} />
                </div>
                <div className='w-100 mb-4'>
                    <p className='mb-1'>Content</p>
                    <textarea className="form-control" placeholder='Content' rows={5} onChange={e=>{setContent(e.target.value)}} ></textarea>
                </div>
                <div className='w-100 mb-4'>
                    <input type="file" name="image" className="" onChange={e=>{setFile(e.target.files[0])}} />
                    
                </div>
                <Button variant="contained" color='error' onClick={()=>{add();nav("/homedb")}} style={{width:"180px",}}>Add</Button>




            </div>
        </div>
    )
}

export default Add