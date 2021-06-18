import { useState } from "react";

import AnswersList from "./AnswersList";
import Form from "./Form"


const ANSWER_EXAMPLE = {
  username:"Elio",
  email:"12345@123.com",
  logo:"2",
  colour:"3",
  consistency:"5",
  timeSpent:["Swimming"],
  review:"sfhaahsfhas",
  bestFeatures:["It's squeaks!"],
  worstFeatures:["Its big!"]
}

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])

 function addAnswers (answer){
   setAnswersList([...answersList, answer])
 }
 


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
       <AnswersList answersList={answersList} />
      </section>
      <section className="main__form"><Form addAnswers={addAnswers}/></section>
    </main>
  );
}
