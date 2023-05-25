import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBg } from "../store/slice";
import styled from "styled-components";

import { SurveyComponent } from "../components/MultiSelectQuiz/multiselectquiz";
import { PinnedSmallLogo } from "../components/PinnedSmallLogo";

const StyledBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  box-shadow: 20px 25px 35px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px 60px;
  width: 807px;
  height: 298px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 1010px) {
    padding: 30px 50px;
  }
  @media (max-width: 910px) {
    width: 407px;
    height: 328px;
  }
  @media (max-width: 515px) {
    padding: 60px 50px;
    width: 267px;
    height: 330px;
  }
  @media (max-width: 375px) {
    width: 167px;
    height: 210px;
  }
  @media (max-width: 270px) {
    padding: 60px 10px;
  }
`;

const StyledQuestionText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  color: #797bec;

  @media (max-width: 910px) {
    font-size: 25px;
  }
  @media (max-width: 515px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const StyledAnswerButton = styled.button`
  background: rgba(179, 180, 239, 0.27);
  border-radius: 50px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #797bec;
  border: transparent;
  padding: 5px 25px;
  cursor: pointer;

  &:hover {
    background: #797bec;
    color: #ffff;
  }
  @media (max-width: 1550px) {
    font-size: 24px;
  }
  @media (max-width: 515px) {
    font-size: 22px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const StyledAnswerSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 1010px) {
    flex-direction: column;
  }
`;

const StyledBackButton = styled.button`
  background: rgba(179, 180, 239, 0.27);
  border-radius: 50px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #797bec;
  border: transparent;
  padding: 3px 15px;
  width: 100px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background: #797bec;
    color: #ffff;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const StyledStaticQuestionSpan = styled.span`
  position: absolute;
  top: 15%;
  right: 0;
  left: 0;
  color: #ffffff;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;

  @media (max-width: 1010px) {
    font-size: 0px;
  }

  @media (min-width: 2000px) {
    top: 25%;
  }
`;

export function Quiz() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgQuiz"));
  }, [dispatch]);

  const questions = [
    {
      questionText: "Rate your physical effort today?",
      answerOptions: [
        { answerText: "Low", worth: 3 },
        { answerText: "Average", worth: 2 },
        { answerText: "High", worth: 1 },
      ],
    },
    {
      questionText: "Do you feel hungry?",
      answerOptions: [
        { answerText: "Yes", worth: 2 },
        { answerText: "No", worth: 1 },
      ],
    },
    {
      questionText:
        "Does your job require you to spend more than 6 hours in a sitting position?",
      answerOptions: [
        { answerText: "Yes", worth: 2 },
        { answerText: "No", worth: 1 },
      ],
    },
    {
      questionText: "How many cups of coffee have you drunk today?",
      answerOptions: [
        { answerText: "0 cups", worth: 4 },
        { answerText: "1-2 cups", worth: 3 },
        { answerText: "3-4 cups", worth: 2 },
        { answerText: "5-6 cups", worth: 1 },
      ],
    },
    {
      questionText: "How many liters of water have you drunk today?",
      answerOptions: [
        { answerText: "Less than 8 cups", worth: 4 },
        { answerText: "8 cups (1.7 liters)", worth: 3 },
        { answerText: "12 cups (2.7 Liters)", worth: 2 },
        { answerText: "16 cups (3.7 Liters)", worth: 1 },
      ],
    },
    {
      questionText: "How many hours of sleep did you get today?",
      answerOptions: [
        { answerText: "4 hours or less", worth: 3 },
        { answerText: "Between 4 and 8 hours", worth: 2 },
        { answerText: "More than 8 hours", worth: 1 },
      ],
    },
    {
      questionText: "Do you use stimulants (smoking, drinking alcohol)?",
      answerOptions: [
        { answerText: "Yes", worth: 2 },
        { answerText: "No", worth: 1 },
      ],
    },
    // {
    //   questionText: "Finished",
    //   answerOptions: [{ answerText: "Next", worth: 0 }],
    // },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSurvey, setShowSurvey] = useState(false);
  const [score, setScore] = useState(0);
  const [question0Worth, setQuestion0Worth] = useState(1);
  const [question1Worth, setQuestion1Worth] = useState(1);
  const [question2Worth, setQuestion2Worth] = useState(1);
  const [question3Worth, setQuestion3Worth] = useState(1);
  const [question4Worth, setQuestion4Worth] = useState(1);
  const [question5Worth, setQuestion5Worth] = useState(1);
  const [question6Worth, setQuestion6Worth] = useState(1);

  const handleBackButton = () => {
    switch (currentQuestion) {
      default:
        break;
      case 0:
        break;
      case 1:
        setScore(score - question0Worth);
        setCurrentQuestion(currentQuestion - 1);
        break;
      case 2:
        setScore(score - question1Worth);
        setCurrentQuestion(currentQuestion - 1);
        break;
      case 3:
        setScore(score - question2Worth);
        setCurrentQuestion(currentQuestion - 1);
        break;
      case 4:
        setScore(score - question3Worth);
        setCurrentQuestion(currentQuestion - 1);
        break;
      case 5:
        setScore(score - question4Worth);
        setCurrentQuestion(currentQuestion - 1);
        break;
      case 6:
        setScore(score - question5Worth);
        setCurrentQuestion(currentQuestion - 1);
        break;
      // case 7:
      //   setScore(score - question6Worth);
      //   setCurrentQuestion(currentQuestion - 1);
      //   break;
    }
  };

  const testScoreTotal = () => {
    const total =
      question0Worth +
      question1Worth +
      question2Worth +
      question3Worth +
      question4Worth +
      question5Worth +
      question6Worth;
    setScore(total);
    console.log(total);
    console.log(question6Worth);
  };

  const handleAnswerOptionClick = (worth: number) => {
    switch (currentQuestion) {
      default:
        break;
      case 0:
        setQuestion0Worth(worth);
        break;
      case 1:
        setQuestion1Worth(worth);
        break;
      case 2:
        setQuestion2Worth(worth);
        break;
      case 3:
        setQuestion3Worth(worth);
        break;
      case 4:
        setQuestion4Worth(worth);
        break;
      case 5:
        setQuestion5Worth(worth);
        break;
      case 6:
        setQuestion6Worth(worth);
        console.log(question6Worth);
        break;
      // case 7:
      // testScoreTotal();
      // const total =
      //   question0Worth +
      //   question1Worth +
      //   question2Worth +
      //   question3Worth +
      //   question4Worth +
      //   question5Worth +
      //   question6Worth;
      // setScore(total);
      // break;
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowSurvey(true);
      testScoreTotal();
    }
  };
  return (
    <>
      <PinnedSmallLogo />
      {showSurvey ? (
        <SurveyComponent score={score} />
      ) : (
        <StyledBoxDiv className="app">
          <StyledStaticQuestionSpan>
            How are you feeling today?
          </StyledStaticQuestionSpan>
          <div className="question-section">
            <StyledQuestionText className="question-text">
              {questions[currentQuestion].questionText}
            </StyledQuestionText>
          </div>
          <StyledAnswerSection className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <StyledAnswerButton
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.worth)}
                >
                  {answerOption.answerText}
                </StyledAnswerButton>
              )
            )}
          </StyledAnswerSection>
          {currentQuestion != 0 ? (
            <StyledBackButton onClick={handleBackButton}>Back</StyledBackButton>
          ) : (
            <div></div>
          )}
        </StyledBoxDiv>
      )}
    </>
  );
}
