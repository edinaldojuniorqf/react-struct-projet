import React, { useEffect, useRef } from 'react'
import Modal from './index'
import ModalBlock from '../../blocks/modal'
import {
  contains,
  addEventListener,
  removeEventListener
} from 'dom-helpers'

const Container = ({ children, open, onClose, ...rest }) => {
  const ref = useRef()

  const handleClick = (event) => {
    if (open && !contains(ref.current, event.target)) {
      onClose()
    }
  }
  
  useEffect(() => {
    addEventListener(window, 'click', handleClick)

    return () => {
      removeEventListener(window, 'click', handleClick)
    }
  })

  return (
    <ModalBlock.Container {...rest} ref={ref}>
      { children }
    </ModalBlock.Container>
  )
}

export default (props) => (
  <Modal.Consumer>
    {
      ({ open, onClose }) => (
        <Container
          {...props}
          open={open}
          onClose={onClose} 
        />
      )
    }
  </Modal.Consumer>
)
