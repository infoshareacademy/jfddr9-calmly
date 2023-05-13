import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBg } from "../../store/slice";
import styled from "styled-components";

import { SurveyComponent } from "../MultiSelectQuiz/multiselectquiz";

const StyledBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  box-shadow: 20px 25px 35px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 50px 100px;
  width: 807px;
  height: 298px;
  margin: 0 auto;
  gap: 20px;
`;

const StyledQuestionText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  color: #797bec;
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
`;

const StyledAnswerSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
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
`;

// const StyledStaticQuestion = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
// `;

const StyledStaticQuestionSpan = styled.span`
  position: relative;
  top: -200px;
  right: 210px;
  color: #ffffff;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
`;

export function Quiz() {
  const dispatch = useDispatch();

  dispatch(updateBg("bgQuiz")); //upewnienie się, że tło jest odpowiednie

  const questions = [
    {
      questionText: "Rate your physical effort today?",
      answerOptions: [
        { answerText: "Low", worth: 1 },
        { answerText: "Average", worth: 2 },
        { answerText: "High", worth: 3 },
      ],
    },
    {
      questionText: "Do you feel hungry?",
      answerOptions: [
        { answerText: "Yes", worth: 1 },
        { answerText: "No", worth: 2 },
      ],
    },
    {
      questionText:
        "Does your job require you to spend more than 6 hours in a sitting position?",
      answerOptions: [
        { answerText: "Yes", worth: 1 },
        { answerText: "No", worth: 2 },
      ],
    },
    {
      questionText: "How many cups of coffee have you drunk today?",
      answerOptions: [
        { answerText: "0 cups", worth: 1 },
        { answerText: "1-2 cups", worth: 2 },
        { answerText: "3-4 cups", worth: 3 },
        { answerText: "5-6 cups", worth: 4 },
      ],
    },
    {
      questionText: "How many liters of water have you drunk today?",
      answerOptions: [
        { answerText: "Less than 8 cups", worth: 1 },
        { answerText: "8 cups (1.7 liters)", worth: 2 },
        { answerText: "12 cups (2.7 Liters)", worth: 3 },
        { answerText: "16 cups (3.7 Liters)", worth: 4 },
      ],
    },
    {
      questionText: "How many hours of sleep did you get today?",
      answerOptions: [
        { answerText: "4 hours or less", worth: 1 },
        { answerText: "Between 4 and 8 hours", worth: 2 },
        { answerText: "More than 8 hours", worth: 3 },
      ],
    },
    {
      questionText: "Do you use stimulants (smoking, drinking alcohol)?",
      answerOptions: [
        { answerText: "Yes", worth: 1 },
        { answerText: "No", worth: 2 },
      ],
    },
    {
      questionText: "Finished",
      answerOptions: [{ answerText: "Next", worth: 0 }],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSurvey, setShowSurvey] = useState(false);
  const [score, setScore] = useState(0);
  const [question0Worth, setQuestion0Worth] = useState(0);
  const [question1Worth, setQuestion1Worth] = useState(0);
  const [question2Worth, setQuestion2Worth] = useState(0);
  const [question3Worth, setQuestion3Worth] = useState(0);
  const [question4Worth, setQuestion4Worth] = useState(0);
  const [question5Worth, setQuestion5Worth] = useState(0);
  const [question6Worth, setQuestion6Worth] = useState(0);

  const handleBackButton = () => {
    switch (currentQuestion) {
      default:
        break;
      case 0:
        break;
      case 1:
        setScore(score - question0Worth);
        setCurrentQuestion(currentQuestion - 1);
        console.log(score);
        break;
      case 2:
        setScore(score - question1Worth);
        setCurrentQuestion(currentQuestion - 1);
        console.log(score);
        break;
      case 3:
        setScore(score - question2Worth);
        setCurrentQuestion(currentQuestion - 1);
        console.log(score);
        break;
      case 4:
        setScore(score - question3Worth);
        setCurrentQuestion(currentQuestion - 1);
        console.log(score);
        break;
      case 5:
        setScore(score - question4Worth);
        setCurrentQuestion(currentQuestion - 1);
        console.log(score);
        break;
      case 6:
        setScore(score - question5Worth);
        setCurrentQuestion(currentQuestion - 1);
        console.log(score);
        break;
      case 7:
        setScore(score - question6Worth);
        setCurrentQuestion(currentQuestion - 1);
        console.log(score);
        break;
    }
  };
  //   if (currentQuestion === 0) {
  //     // setStateWorth(worth);
  //     // setScore(score + worth);
  //   } else if (currentQuestion === 1) {
  //     setScore(score - question0Worth);
  //     setCurrentQuestion(currentQuestion - 1);
  //     console.log(score);
  //   } else if (currentQuestion === 2) {
  //     setScore(score - question1Worth);
  //     setCurrentQuestion(currentQuestion - 1);
  //     console.log(score);
  //   } else if (currentQuestion === 3) {
  //     setScore(score - question2Worth);
  //     setCurrentQuestion(currentQuestion - 1);
  //     console.log(score);
  //   } else if (currentQuestion === 4) {
  //     setScore(score - question3Worth);
  //     setCurrentQuestion(currentQuestion - 1);
  //     console.log(score);
  //   } else if (currentQuestion === 5) {
  //     setScore(score - question4Worth);
  //     setCurrentQuestion(currentQuestion - 1);
  //     console.log(score);
  //   } else if (currentQuestion === 6) {
  //     setScore(score - question5Worth);
  //     setCurrentQuestion(currentQuestion - 1);
  //     console.log(score);
  //   }
  // };

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
        break;
      case 7:
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
        console.log(question0Worth + " q0");
        console.log(question1Worth + " q1");
        console.log(question2Worth + " q2");
        console.log(question3Worth + " q3");
        console.log(question4Worth + " q4");
        console.log(question5Worth + " q5");
        console.log(question6Worth + " q6");
        break;
    }
    // if (currentQuestion === 0) {
    //   // setStateWorth(worth);
    //   // setScore(score + worth);
    //   setQuestion0Worth(worth);
    // } else if (currentQuestion === 1) {
    //   setQuestion1Worth(worth);
    // } else if (currentQuestion === 2) {
    //   setQuestion2Worth(worth);
    // } else if (currentQuestion === 3) {
    //   setQuestion3Worth(worth);
    // } else if (currentQuestion === 4) {
    //   setQuestion4Worth(worth);
    // } else if (currentQuestion === 5) {
    //   setQuestion5Worth(worth);
    // } else if (currentQuestion === 6) {
    //   setQuestion6Worth(worth);
    // } else if (currentQuestion === 7) {
    //   const total =
    //     question0Worth +
    //     question1Worth +
    //     question2Worth +
    //     question3Worth +
    //     question4Worth +
    //     question5Worth +
    //     question6Worth;
    //   setScore(total);
    //   console.log(total);
    //   console.log(question0Worth + " q0");
    //   console.log(question1Worth + " q1");
    //   console.log(question2Worth + " q2");
    //   console.log(question3Worth + " q3");
    //   console.log(question4Worth + " q4");
    //   console.log(question5Worth + " q5");
    //   console.log(question6Worth + " q6");
    // }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowSurvey(true);
    }
  };
  return (
    // <StyledStaticQuestion>
    // <StyledStaticQuestionSpan>
    //   How are you feeling today?
    // </StyledStaticQuestionSpan>
    <>
      {showSurvey ? (
        // <div className="score-section">
        //   {score} / {questions.length - 1}
        // </div>
        <SurveyComponent />
      ) : (
        <StyledBoxDiv className="app">
          <div className="question-section">
            <StyledStaticQuestionSpan>
              How are you feeling today?
            </StyledStaticQuestionSpan>
            {/* <div className="question-count"></div> */}
            <StyledQuestionText className="question-text">
              {questions[currentQuestion].questionText}
            </StyledQuestionText>
          </div>
          <StyledAnswerSection className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <StyledAnswerButton
                onClick={() => handleAnswerOptionClick(answerOption.worth)}
              >
                {answerOption.answerText}
              </StyledAnswerButton>
            ))}
          </StyledAnswerSection>
          <StyledBackButton onClick={handleBackButton}>Back</StyledBackButton>
        </StyledBoxDiv>
      )}
    </>

    // </StyledStaticQuestion>
  );
}
