import React from 'react'
import { FooterWrapper } from './styles'

const Profile: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <FooterWrapper {...props}>
      <a href="https://github.com/MelkdeSousa" target="_blank" rel="noreferrer">
        <img
          src="https://github.com/MelkdeSousa.png"
          alt="Profile MelkdeSousa"
        />
      </a>
      <p>
        Criado por{' '}
        <a
          href="https://github.com/MelkdeSousa"
          target="_blank"
          rel="noreferrer"
        >
          <span>Melk de Sousa</span>
        </a>
      </p>
    </FooterWrapper>
  )
}

export default Profile
