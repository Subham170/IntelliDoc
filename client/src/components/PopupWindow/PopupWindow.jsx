import React, { useState } from 'react';
import closeImg from '../../assests/close.svg'
import {motion} from 'framer-motion'
import '../PopupWindow/PopupWindow.css'
import { FaClosedCaptioning, FaDoorClosed, FaRegWindowClose, FaWindowClose } from 'react-icons/fa';
import logo from '../../assests/MediBuddy.jpg'
const Popup = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
{
  isOpen? <motion.div initial={{opacity:0}} animate={{opacity:1}} 
  transition={{duration:0.5}} className={`popup-container`}>
      <div className="popup-content ">
        <iframe src={url} title="Popup Window" />
      </div>
    </motion.div>:<></>}
    <div className='w-12 h-12 rounded-full  fixed right-7 bottom-5 z-10 bg-blue-600'>
   {!isOpen? <button onClick={()=>setIsOpen(!isOpen)}>
   <img className='w-12 h-12 z-10 rounded-full' src={logo} /></button>
   :<button onClick={()=>setIsOpen(!isOpen)} className='z-10'>
   <img className='w-12 h-12 z-10 rounded-full text-white' src={closeImg} /></button>
   }
    </div>

    </>
   
  );
};

export default Popup;
