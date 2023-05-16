import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { ReactElementFactory, ReactSurveyElement } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./multi.css";
import { json } from "./json";
import { useNavigate } from "react-router-dom";

import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "../../api/firebase";
import { useSelector } from "react-redux";

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
    const handleOnChange = (event: { currentTarget: { checked: any } }) => {
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

  const { authUser }: any = useSelector((state) => state);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // dispatch(updateBg("bgQuiz"));

  const survey = new Model(json);
  survey.onComplete.add((sender) => {
    const surveyResult = JSON.stringify(sender.data, null, 3);
    const result = JSON.parse(surveyResult);

    const currentDate = new Date();

    const docRef = doc(db, "journal", authUser.uid);

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
    <>
      <h1>Do you want to go through Let's Feel Better?</h1>
      <button onClick={() => navigate("/feelbetter")}>Yes</button>
      <button onClick={() => navigate("/home")}>No, return to home</button>
    </>
  ) : (
    <Survey model={survey} />
  );
}
