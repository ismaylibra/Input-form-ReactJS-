import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import './WorkerList_assets/WorkerList.scss'


export default function WorkerList() {
    const [nameInput, setNameInput] = useState('')
    const [surnameInput, setSurnameInput] = useState('')
    const [salaryInput,setSalary] = useState(0)
    const [workers, setWorkers] = useState([])

    const inputName = (e) =>{
        setNameInput(e.target.value)
    }
    const inputSurname = (e) =>{
        setSurnameInput(e.target.value)
    }
    const inputSalary = (e) =>{
        setSalary(e.target.value)
    }
    const addWorker = () =>{
        console.log('afaaa');
         const worker = {
            name:nameInput,
            surname: surnameInput,
            salary: salaryInput
        }

        setWorkers(workers.push(worker))
        console.log(workers);

        
    }

  return (
    
   <section id='input-form'>
     <Container>
        <Row>
            <Col md={4}>
                <input className='input-name' type={'text'} placeholder={'Enter Your Name'} onChange={inputName}/>
            </Col>
            <Col md={4}>
                <input className='input-surname' type={'text'} placeholder={'Enter Your Surname'} onChange={inputSurname}/>
            </Col>
            <Col md={4}>
                <input className='input-salary' type={'number'} placeholder={'Enter Your Salary'} onChange={inputSalary}/>
            </Col>
        </Row>
        <button id='add-btn' onClick={addWorker} >Add to List</button>
        <table className='table table-stripped mt-4'>
           <thead>
            <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Salary</th>
            </tr>

           </thead>
            <tbody>
            { workers.map(({name, surname, salary}, idx) =>(
                <tr key={idx}>
               
                <td >
                    {name}
                </td>
                <td>
                    {surname}
                </td> 
                <td>
                    {salary}
                </td>

               
               
               
                </tr>))}
            </tbody>
        </table>
    </Container>
   </section>
   
  )
}
