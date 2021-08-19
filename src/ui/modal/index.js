import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import ModalBlock from '../../blocks/modal'
import Close from './Close'
import Container from './Container'

const { Consumer, Provider } = createContext()

const Modal = ({ children, open, onClose, ...rest}) => {
  return (
    <Provider value={{
      open,      
      onClose
    }}>
      <ModalBlock open={open} {...rest}>
        { children }
      </ModalBlock>
    </Provider>
  )
}

Modal.defaultProps = {
  open: false,
  onClose() {}
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

Modal.Container = Container
Modal.Header = ModalBlock.Header
Modal.Close = Close
Modal.Body = ModalBlock.Body
Modal.Footer = ModalBlock.Footer
Modal.Consumer = Consumer

export default Modal
