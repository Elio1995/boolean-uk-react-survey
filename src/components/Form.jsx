
const initialFormState = {
    username: "",
    email:"",
    logo:"",
    colour:"",
    consistency:"",
    timeSpent:[],
    review:"",
    bestFeatures:[],
    worstFeatures:[]
  }

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



function Form({addAnswers}){

    function handleSubmit(event) {
        event.preventDefault()


        const timeSpent = [...event.target.timeSpent]
        .filter(input=>input.checked)
        .map(input=>input.value)

        const bestFeatures = [...event.target.bestFeatures]
        .filter(input=>input.checked)
        .map(input=>input.value)

        const worstFeatures = [...event.target.worstFeatures]
        .filter(input=>input.checked)
        .map(input=>input.value)

 debugger
        const answers = {
         username: event.target.username.value,
         email:event.target.email.value,
         logo:event.target.logo.value,
         colour:event.target.colour.value,
         consistency:event.target.consistency.value,
         timeSpent:timeSpent,
         review:event.target.review.value,
         bestFeatures: bestFeatures,
         worstFeatures: worstFeatures
        }


        addAnswers(answers)
        event.target.reset()
    }



    return (
    <form class="form" onSubmit={handleSubmit}> 
  <h2>Tell us what you think about your rubber duck!</h2>
  <div class="form__group">
    <h3>What would you say that are the best features of your rubber duck?</h3>
    <ul>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="colour" />It's
      yellow!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="sound" />It
      squeaks!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="logo" />It has a
      logo!</label
    >
  </li>
  <li>
    <label
      ><input name="bestFeatures" type="checkbox" value="size" />Its big!</label
    >
  </li>
</ul>
  </div>
  <div class="form__group">
    <h3>What would you say that are the worst bits of your rubber duck?</h3>
    <ul>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="colour" />It's
      yellow!</label
    >
  </li>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="sound" />It
      squeaks!</label
    >
  </li>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="logo" />It has a
      logo!</label
    >
  </li>
  <li>
    <label
      ><input name="worstFeatures" type="checkbox" value="size" />Its big!</label
    >
  </li>
</ul>
  </div>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck consistency?</h3>
    <ul>
  <li>
    <input id="consistency1" type="radio" name="consistency" value="1" /><label
      for="consistency1"
      >1</label
    >
  </li>
  <li>
    <input id="consistency2" type="radio" name="consistency" value="2" /><label
      for="consistency2"
      >2</label
    >
  </li>
  <li>
    <input id="consistency3" type="radio" name="consistency" value="3" /><label
      for="consistency3"
      >3</label
    >
  </li>
  <li>
    <input id="consistency4" type="radio" name="consistency" value="4" /><label
      for="consistency4"
      >4</label
    >
  </li>
</ul>

  </div>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
  <li>
    <input id="colour1" type="radio" name="colour" value="1" /><label
      for="colour1"
      >1</label
    >
  </li>
  <li>
    <input id="colour2" type="radio" name="colour" value="2" /><label
      for="colour2"
      >2</label
    >
  </li>
  <li>
    <input id="colour3" type="radio" name="colour" value="3" /><label
      for="colour3"
      >3</label
    >
  </li>
  <li>
    <input id="colour4" type="radio" name="colour" value="4" /><label
      for="colour4"
      >4</label
    >
  </li>
</ul>

  </div>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck logo?</h3>
    <ul>
  <li>
    <input id="logo1" type="radio" name="logo" value="1" /><label
      for="logo1"
      >1</label
    >
  </li>
  <li>
    <input id="logo2" type="radio" name="logo" value="2" /><label
      for="logo2"
      >2</label
    >
  </li>
  <li>
    <input id="logo3" type="radio" name="logo" value="3" /><label
      for="logo3"
      >3</label
    >
  </li>
  <li>
    <input id="logo4" type="radio" name="logo" value="4" /><label
      for="logo4"
      >4</label
    >
  </li>
</ul>

  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="swimming" />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="bathing" />Bathing</label
    >
  </li>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="chatting" />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="timeSpent" type="checkbox" value="noTime" />I don't like to spend time with it</label
    >
  </li>
</ul>
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      /></label
  ><label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
      /></label
  ><input class="form__submit" type="submit" value="Submit Survey!" />
</form>
)
}

export default Form