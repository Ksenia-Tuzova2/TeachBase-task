import { Textarea } from "../../../shared/textarea/textarea";

export  function SecondScreen() {
    return (
      <div>
        <Textarea 
        textareaValue={""} 
        textareaName={""} 
        placeholder={""} 
        textareaValueChangeHandler={undefined}/>
      </div>
    );
  }