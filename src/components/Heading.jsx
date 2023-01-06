
import {TbAccessibleOff } from "react-icons/tb";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


export default function Heading({title, handleShow}){

    return(
      <>
        <div className=" d-flex justify-content-between align-items-center">
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            
            <Button  size="sm " variant="primary" onClick={handleShow}>CCCCreate
              <TbAccessibleOff/></Button>
            
          </div>
        </div>
      
      </>
    )
}
