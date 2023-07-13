import { Button } from "../../../shared/button/button";
import { Checkbox } from "../../../shared/checkbox/checkbox";

export function ThirdScreen() {
  return (
    <div>
      <Checkbox
        id={""}
        name={""}
        value={""}
        labelTitle={"Черновик"}
        labelFor={"draft"} 
        checked={false} />
      <Button
        buttonName={'Отправить'}
        onClickHandler={undefined} />
    </div>
  );
}