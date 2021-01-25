import React from 'react'

import assets from '../assets/assets.json'

import { QuizContainer, QuizBackground } from '../styles/components/Quiz'
import {
  Widget,
  WidgetHeader,
  WidgetContent
} from '../styles/components/Widget'
import GithubCorner from '../styles/components/GithubCorner'
import Footer from '../styles/components/Footer'
import Profile from '../styles/components/Profile'

const Home: React.FC = () => {
  return (
    <QuizBackground backgroundImage={assets.bg}>
      <QuizContainer>
        <Widget>
          <WidgetHeader>
            <h1>Lorem ipsum dolor sit amet </h1>
          </WidgetHeader>
          <WidgetContent>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </WidgetContent>
        </Widget>
        <Widget>
          <WidgetContent>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </WidgetContent>
        </Widget>
        <Footer />
        <Profile />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/MelkdeSousa" />
    </QuizBackground>
  )
}

export default Home
