import styled from 'styled-components'
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers'

const MODIFIER_CONFIG = {
  dark: () => `
    background-color: #212121;
  `
}

const Container = styled.div`
  color: green;
  width: 330px;
  max-width: 90%;
  min-height: 300px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.5);

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`

Container.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG),
}

export default Container
