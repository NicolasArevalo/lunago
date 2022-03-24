import React, { useState, useEffect } from 'react'
import './Home.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ toggleModal }) => {

    const [className, setClassName] = useState('modal ')

    useEffect(() => {
        
        if (toggleModal) {
            setClassName(className + 'modalClosed')
        }
        
    }, [toggleModal])


    /* if(open){
        setClassName(className+'modalClosed')
    }
 */
    const closeModal = () => {
        let xd = className.slice(0, 6)
        setClassName(xd)
    }
    const nadaPasa = () => {
        let nadapasa = 'nada pasa'
        console.log(nadapasa)
    }
    return (
        <div className={className} onClick={nadaPasa}>
            <div className="modal_wrapper">
                <h3 className='modal_h3'>☝🏼Hey, una cosita...</h3>
                <div className="cerrar">
                    <FontAwesomeIcon
                        icon={faClose}
                        className="icon icon--close"
                        onClick={closeModal} />
                </div>
                <p className='modal_p'>
                    El modo oscuro aún está en fase Beta. Por lo que aún hay algunas cosas que se deben reparar.
                    Espero que lo puedas disfrutar mientras tanto. 😋
                </p>
            </div>
        </div>
    )
}

export default Modal