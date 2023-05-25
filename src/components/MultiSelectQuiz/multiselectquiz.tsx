import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { ReactElementFactory, ReactSurveyElement } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./multi.css";
import { json } from "./json";
// import styled from 'styled-components';
import styled from "styled-components";
import quizpic from "../../assets/quiz.png";
import { useDispatch } from "react-redux";
import { updateBg } from "../../store/slice";

// const StyledYesButton = styled.button`
//   background: rgba(179, 180, 239, 0.27);
//   border-radius: 50px;
//   font-family: 'Outfit';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 30px;
//   color: #fffff;
//   border: transparent;
//   padding: 5px 25px;
//   margin-right: 20px;
//   cursor: pointer;
//   &:hover {
//     background: #797bec;
//     color: #ffff;
//   }
// `;

// const StyledNoButton = styled.button`
//   background: rgba(179, 180, 239, 0.27);
//   border-radius: 50px;
//   font-family: 'Outfit';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 30px;
//   color: #fffff;
//   border: transparent;
//   padding: 5px 25px;
//   cursor: pointer;
//   &:hover {
//     background: #797bec;
//     color: #ffff;
//   }
// `;

const StyledWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

const StyledImgCat = styled.img`
  height: 800px;
  margin-left: 150px;

  @media (max-width: 1250px) {
    margin-left: 0px;
    height: 400px;
    width: 300px;
    margin: 0 auto;
  }
`;

import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "../../api/firebase";
import { useSelector } from "react-redux";
import { TestResultPage } from "../TestResultPage/TestResultPage";
// import { AuthStateType } from "../../store/authSlice";
import { RootState } from "../../store/store";

class CustomChoiceItem extends ReactSurveyElement {
  isChecked: boolean | undefined;
  renderElement() {
    const props = this.props;
    const question = props.question;
    const item = props.item;
    const itemClass =
      "item-label" +
      (question.isItemSelected(item) ? " item-label--selected" : "");
    const itemName =
      "item-text" +
      (question.isItemSelected(item) ? " item-text--selected" : "");
    const handleOnChange = (event: { currentTarget: { checked: boolean } }) => {
      question.clickItemHandler(item, event.currentTarget.checked);
    };

    return (
      <div role="presentation" className="item-root">
        <label className={itemClass}>
          <input
            role="option"
            className="item-input"
            id={question.getItemId(item)}
            type="checkbox"
            name={question.questionName}
            checked={this.isChecked}
            value={item.value}
            onChange={handleOnChange}
          />
          <span className="item-image"></span>
          <span className={itemName}>{item.text}</span>
        </label>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("custom-choice-item", (props) => {
  return React.createElement(CustomChoiceItem, props);
});

export function SurveyComponent({ score }: { score: number }) {
  const [isDone, setIsDone] = useState(false);

  const authUser = useSelector((state: RootState) => state.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgQuiz2"));
  }, [dispatch]);

  const survey = new Model(json);
  survey.onComplete.add((sender) => {
    const surveyResult = JSON.stringify(sender.data, null, 3);
    const result = JSON.parse(surveyResult);

    const currentDate = new Date();

    const docRef = doc(db, "journal", authUser.uid ?? "");

    console.log(result.multiselect);

    updateDoc(docRef, {
      entries: arrayUnion({
        date: Timestamp.fromDate(currentDate),
        score: score,
        mood: result.multiselect,
      }),
    }).then(() => console.log("update done"));

    setIsDone(true);
  });
  return isDone ? (
    // <>
    //   <h1>Would you like to go through the "Lets Feel Better" activites?</h1>
    //   <StyledYesButton onClick={() => navigate("/feelbetter")}>
    //     Yes, lets do it
    //   </StyledYesButton>
    //   <StyledNoButton onClick={() => navigate("/home")}>
    //     No, return to home
    //   </StyledNoButton>
    // </>
    <TestResultPage
      stressLevel={
        score < 7 ? "low" : score >= 7 && score < 15 ? "middle" : "high"
      }
    />
  ) : (
    <>
      <StyledWrapperDiv>
        <StyledImgCat
          src={quizpic}
          alt="An image of a cartoon cat standing on a tv"
        ></StyledImgCat>
        <Survey model={survey} />
      </StyledWrapperDiv>
    </>
  );
}
