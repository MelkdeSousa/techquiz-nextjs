import React, { useEffect } from 'react'

import assets from '../assets/assets.json'
import Button from '../components/Button'
import { QuizBackground, QuizContainer } from '../components/Quiz'
import QuizLogo from '../components/QuizLogo/Logo'
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTopic
} from '../components/Widget'

const LoadingWidget: React.FC = () => {
  return (
    <Widget>
      <WidgetHeader>Carregando...</WidgetHeader>

      <WidgetContent>[Desafio do Loading]</WidgetContent>
    </Widget>
  )
}

function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit }) {
  const questionId = `question__${questionIndex}`
  return (
    <Widget>
      <WidgetHeader>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </WidgetHeader>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <WidgetContent>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={infosDoEvento => {
            infosDoEvento.preventDefault()
            onSubmit()
          }}
        >
          {question.alternatives.map(
            (alternative: string, alternativeIndex: number) => {
              const alternativeId = `alternative__${alternativeIndex}`
              return (
                <WidgetTopic
                  key={alternativeId}
                  as="label"
                  htmlFor={alternativeId}
                >
                  <input id={alternativeId} name={questionId} type="radio" />
                  {alternative}
                </WidgetTopic>
              )
            }
          )}

          <Button type="submit">Confirmar</Button>
        </form>
      </WidgetContent>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}
const Quiz: React.FC = () => {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  const totalQuestions = assets.questions.length
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = assets.questions[questionIndex]

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000)
  }, [])

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion)
    } else {
      setScreenState(screenStates.RESULT)
    }
  }

  return (
    <QuizBackground backgroundImage={assets.bg}>
      <QuizContainer>
        <QuizLogo className="" />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões, parabéns!</div>
        )}
      </QuizContainer>
    </QuizBackground>
  )
}

export default Quiz
