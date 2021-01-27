import styled from 'styled-components'

import Logo from './Logo'

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`

export default QuizLogo
