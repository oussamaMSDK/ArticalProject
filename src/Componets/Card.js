import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

    const nav = useNavigate()
  return (
    <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-between mb-1 p-2" onClick={()=>nav('Article/'+props.id)} style={{}}>
            <div className="d-flex flex-column" style={{backgroundColor:"#FFF", alignSelf:"normal",padding:"15px",borderRadius:"20px",cursor:"pointer"}} id="oneCard">
                
                <div className="card-body d-flex flex-column gap-2" style={{}}>
                    <img className="card-img-top rounded" src={props.image} width={100}  />
                    <h3 className='m-0'><b>{props.title}</b> </h3>
                    <h5 style={{
                        color:"gray",   
             
                    }}>{props.body.substr(0,100)+(props.body.length>100?"...":"")}</h5>
                </div>
            </div>
        </div>
  )
}

export default Card