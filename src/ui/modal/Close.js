import React from 'react'
import PropTypes from 'prop-types'
import ModalBlock from '../../blocks/modal'
import Modal from './index'

const Close = ({ onClick, ...rest }) => {
  const handleClick = (onClose) => () => {
    onClick()
    onClose()
  }

  return (
    <Modal.Consumer>
      {({ onClose }) => (
        <ModalBlock.Close {...rest} onClick={handleClick(onClose)} />
      )}
    </Modal.Consumer>
  )
}

Close.defaultProps = {
  onClick() {}
}

Close.propTypes = {
  onClick: PropTypes.func,
}

export default Close
