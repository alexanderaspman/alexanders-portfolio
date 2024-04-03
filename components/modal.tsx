import { Children, Dispatch, DispatchWithoutAction, SetStateAction, useLayoutEffect, useRef, useState } from "react"
import Image from "next/image";

import Transition from 'react-transition-group/Transition'
import styles from '@/styles/styleModal.module.scss'
export const Modal = (isShown: any, setIsShown: any) => {
    const [display, setShowHide] = useState<any>('block')
    const closeModal = () => {

    }
    const [Modal, setModal] = useState<string>('Modal')
    const modalShow = (isShown: boolean) => setShowHide(isShown ? ('ModalOpen') : ('ModalClosed'))





    console.log("Modal", Modal)
    console.log("display", display)


    const scssClasses: any = [
        Modal, display
    ]

    const modalShowModal = (
        isShown: any, setIsShown: any

    ) => {
        setIsShown(!isShown);
        console.log(isShown)
    }



    console.log(scssClasses)
    console.log(isShown)
    // isShown ? setShowHide('none') : setShowHide('block')
    return (

        <div className={styles.Modal} >
            hyjkjkhk
        </div >)
}
const ModalDev = ({children,duration,showBlock}:any) =>{
    
    const [isShown, setIsShown] = useState<boolean>(false)
    const [isClosed, setIsClosed] = useState<boolean>(true)
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const showModal = () => {
        setIsShown(!isShown)
       
        console.log("click", isShown)
    }
    const BackDrop = () => {
        <div>

        </div>
    }
    
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };
    const transitionStyles: any = {


        entering: { opacity: 0.5 },
        entered: { opacity: 1 },
        exited: { opacity: 0 },
        exit: { opacity: 0.5 }
    };
    
    const refaral = useRef<any>()

    const Fade = ({ in: props }: any) => {
        return (<Transition className={styles.ModalOpen} in={props} timeout={duration}>{(state) => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
               
            </div>
        )}</Transition >
        )
    }
    
    function NewLocal(show: { isShown: { show: any } }, closed: { isClosed: any }, setIsShown: { setIsShown: any }, isShown: { show: any }): void { (isShown: any) => isShown in Modal(show = isShown, closed ? isClosed : isShown) }

   

    return(
        <div>

        <NewLocal show closed setIsShown isShown ></NewLocal>
       



{modalIsOpen ? <Modal />:null}
{modalIsOpen ? <BackDrop />:null}
        <Transition in={showBlock} timeout={3000}>{state => <div style={{ flex: 1, transition: 'opacity 1s ease-in', opacity: state === 'exited' ? 0 : 1, marginBottom: state === 'exiting' ? -200 : 0,scale: state === 'entering' ? 0.8 : 1.9 }}> <div ref={refaral} ><Fade in={showBlock} timeout={300} /></div>{children}</div>}</Transition>

       
    </div>
    )
}
export default ModalDev