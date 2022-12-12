import { Fragment } from "react"
import  ReactDOM  from "react-dom"
import Card from "./Card"


const Modal = ({className, children}) => {
  return (
    <Fragment>
        {
            ReactDOM.createPortal(<>
                <section id="backdrop"></section>
                <Card className={className}>ahgsuavkj</Card>
            </>, document.querySelector('#overlays'))
        }
    </Fragment>
  )
}

export default Modal