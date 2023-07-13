import { Button } from '../../../shared/button/button'
import { Input } from '../../../shared/input/input'
import style from './firstScreen.module.css'

type FirstScreenPropsType = {

}

export const FirstScreen: React.FC<FirstScreenPropsType> = (
  {
  
  }) => {

  let upateAuthorsNameInputValueChangeHandler = (text: string) => {
    // upateAuthorsNameInputValue(text)
  }

  let articleTitleInputValueChangeHandler = (text: string) => {
    // articleTitleInputValue(text)
  }

  return (
    <div className={style.container}>
      <Input
        inputName={'author`s name'}
        placeholder={'Author`s name'}
        inputValue={''}
        inputValueChangeHandler={upateAuthorsNameInputValueChangeHandler}
         tabIndex={1}      />
      <Input
        inputName={'article title'}
        placeholder={'Article title'}
        inputValue={''}
        inputValueChangeHandler={articleTitleInputValueChangeHandler} 
        tabIndex={2}      />
        <Button buttonName={'Далее'}
         onClickHandler={undefined}/>
    </div>

  )
}
