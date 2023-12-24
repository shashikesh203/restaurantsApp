import Image from '../Images/Burger.jpg'
import Image1 from '../Images/chowmin.jpg'
import Image2 from '../Images/paneer.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import './Front.css'

const Front = () =>{
   
   return(<>
   <img src={Image} height='700px' width='300px' className='aa'/>
   <img src={Image1} height='700px' width='300px' className='aa'/>
   <img src={Image2} height='700px' width='300px' className='aa'/>
   <img src={Image} height='700px' width='300px' className='aa'/>
   <div><button className='button'><Link to={"/Order"}>Buy  $1.20</Link></button>
   <button className='button' id=''>Buy  $0.87</button>
   <button className='button' id=''>Buy  $2.53</button>
   <button className='button' id=''>Buy  $1.20</button></div>
   <img src={Image1} height='700px' width='300px' className='aa'/>
   <img src={Image} height='700px' width='300px' className='aa'/>
   <img src={Image2} height='700px' width='300px' className='aa'/>
   <img src={Image} height='700px' width='300px' className='aa'/>
   <div><button className='button1' id='b1'>Buy $0.87</button>
   <button className='button1' id='b2'>Buy $1.20</button>
   <button className='button1' id='b3'>Buy $2.53</button>
   <button className='button1' id='b4'>Buy $0.87</button></div>

   </>)

}

export default Front