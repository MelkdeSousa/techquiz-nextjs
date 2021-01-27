import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-top: 20px;
  img {
    width: 58px;
    height: 58px;
    margin-right: 23px;
    border-radius: 50%;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`
