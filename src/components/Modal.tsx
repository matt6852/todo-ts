import React from 'react'
import ReactDOM from 'react-dom'

type ModalType = {
 onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
 closeBtn?: JSX.Element | JSX.Element[]
 children?: JSX.Element | JSX.Element[]
}
const Modal = ({ onClose, closeBtn, children }: ModalType) => {
 return ReactDOM.createPortal(
  <div onClick={(e) => onClose(e)} className='absolute inset-0 bg-gray-300 opacity-60'>
   <div className='absolute inset-40 p-10 bg-white'>
    {children}
    {closeBtn}
   </div>
  </div>, document.getElementById("modal") as HTMLElement)

}

export default Modal
