import React, { useState } from 'react'

import assets from '../assets/assets.json'

import { QuizContainer, QuizBackground } from '../components/Quiz'
import { Widget, WidgetHeader, WidgetContent } from '../components/Widget'
import GithubCorner from '../components/GithubCorner'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Input from '../components/Input'
import Button from '../components/Button'

const Home: React.FC = () => {
  const [name, setName] = useState('')

  return (
    <QuizBackground backgroundImage={assets.bg}>
      <QuizContainer>
        <Widget>
          <WidgetHeader>
            <h1>TechQuiz</h1>
          </WidgetHeader>
          <WidgetContent>
            <form>
              <Input onChange={event => setName(event.target.value)} />
              <Button type="submit" disabled={name.length === 0}>
                {`Vamos jogar ${name}`}
              </Button>
            </form>
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
