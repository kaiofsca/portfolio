import Card from './Card'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'
import './modal.css'

const Modal = ({className, children}) => {
  return (
    <Fragment>
        {
            ReactDOM.createPortal(<>
                <section id="backdrop"></section>
                <Card className={className}>{children}</Card>
            </>, document.getElementById('overlays'))
        }
    </Fragment>
  )
}

export default Modal