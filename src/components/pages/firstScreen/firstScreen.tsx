import { Input } from '../../../shared/input/input'
import style from './firstScreen.module.scss'

type FirstScreenPropsType = {
  authorsNameInputValue: string,
  articleTitleInputValue: string,
}

export const FirstScreen: React.FC<FirstScreenPropsType> = (
  {
    authorsNameInputValue,
    articleTitleInputValue,
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
        inputValue={authorsNameInputValue}
        inputValueChangeHandler={upateAuthorsNameInputValueChangeHandler}
         tabIndex={1}      />
      <Input
        inputName={'article title'}
        placeholder={'Article title'}
        inputValue={articleTitleInputValue}
        inputValueChangeHandler={articleTitleInputValueChangeHandler} 
        tabIndex={2}      />
    </div>

  )
}
