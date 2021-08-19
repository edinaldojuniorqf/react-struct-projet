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

const Body = styled.div`
  padding: 10px 20px;
  color: black;

  ${applyStyleModifiers(MODIFIERS_CONFIG)}
`

Body.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIERS_CONFIG),
}

export default Body
