import React, { useState } from 'react'
import Modal from '../ui/modal'

function ModalExample() {
  const [ openModal, setModal ] = useState(false)
  const [ openModalLight, setOpenModalLight ] = useState(false)
  const [ openModalDark, setOpenModalDark ] = useState(false)

  const handleModal = () => {
    setModal(!openModal)
  }

  const handleModalLight = () => {
    setOpenModalLight(!openModalLight)
  }

  const handleModalDarkToggle = () => {
    setOpenModalDark(!openModalDark)
  }  

  return (
    <div>
      <h1>Modal</h1>

      { /* modal simple */ }
      <button onClick={handleModal}>Modal simple</button>

      <Modal open={openModal} onClose={handleModal}>
        <Modal.Container>
          <Modal.Header>
            Entre em contato
            <Modal.Close />
          </Modal.Header>
          <Modal.Body>
            modal simple
          </Modal.Body>
        </Modal.Container>
      </Modal>

      { /* modal simple 2 */ }
      <Modal>
        <Modal.Container>
          <Modal.Header>
            Entre em contato
            <Modal.Close />
          </Modal.Header>
          <Modal.Body>
            modal simple
          </Modal.Body>
        </Modal.Container>
      </Modal>

      { /* modal light */ }
      <button onClick={handleModalLight}>Modal light</button>

      <Modal open={openModalLight} onClose={handleModalLight}>
        <Modal.Container>
          <Modal.Header>
            Entre em contato
            <Modal.Close
              onClick={handleModalLight}
            />
          </Modal.Header>
          <Modal.Body>
            modal light
          </Modal.Body>
        </Modal.Container>
      </Modal>

      { /* modal dark */ }
      <button onClick={handleModalDarkToggle}>Modal dark</button>

      <Modal open={openModalDark} onClose={handleModalDarkToggle}>
        <Modal.Container modifiers={['dark']}>
          <Modal.Header>
            Entre em contato
            <Modal.Close
              modifiers={['light']}
              onClick={handleModalDarkToggle}
            />
          </Modal.Header>
          <Modal.Body modifiers={['light']}>
            modal dark
          </Modal.Body>
        </Modal.Container>
      </Modal>
    </div>
  )
}

export default ModalExample
