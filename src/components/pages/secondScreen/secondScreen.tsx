import { Button } from "../../../shared/button/button";
import { Textarea } from "../../../shared/textarea/textarea";

export  function SecondScreen() {
    return (
      <div>
        <Textarea 
        textareaValue={""} 
        textareaName={""} 
        placeholder={""} 
        textareaValueChangeHandler={undefined}/>
        <Button 
        buttonName={"Далее"} 
        onClickHandler={undefined}/>
      </div>
    );
  }