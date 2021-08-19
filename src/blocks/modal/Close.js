import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers'

const MODIFIERS_CONFIG = {
  light: () => `
    color: white;
  `
}

const Close = styled.span`
  font-size: 15px;
  color: black;
  cursor: pointer;
  
  ::before {
    content: 'x'
  }

  ${applyStyleModifiers(MODIFIERS_CONFIG)}
`

Close.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIERS_CONFIG),
}

Close.defaultProps = {
  name: 'Close',
}

export default Close
