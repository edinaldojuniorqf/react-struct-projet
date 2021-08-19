import styled from 'styled-components'

import Container from './Container'
import Header from './Header'
import Close from './Close'
import Body from './Body'
import Footer from './Footer'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  background-color: rgba(0,0,0,.4);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ open }) => !open && `
    display: none;
  `}
`

Modal.Container = Container
Modal.Header = Header
Modal.Close = Close
Modal.Body = Body
Modal.Footer = Footer

export default Modal
