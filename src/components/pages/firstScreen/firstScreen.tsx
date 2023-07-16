import { Button } from '../../../shared/button/button'
import { Input } from '../../../shared/input/input'
import style from './firstScreen.module.css'
import { StoreContext } from '../../../store/contex'
import { useContext } from 'react'
import { StateType } from '../../../store/state'

type FirstScreenPropsType = {}

export const FirstScreen: React.FC<FirstScreenPropsType> = () => {

  const { state, setState } = useContext(StoreContext)



  let upateAuthorsNameInputValueChangeHandler = (text: string) => {
    const newState = { author: text } as StateType
    setState({ ...state, ...newState })
  }

  let updateTitleInputValueChangeHandler = (text: string) => {
    const newState = { title: text } as StateType
    setState({ ...state, ...newState })
  }

  let clickButtonHandler = () => {
    const newState = { step: 2 } as StateType
    setState({ ...state, ...newState })
  }



  return (
    <div className={style.firstScreen}>
      <div className={style.firstScreen__item}>
        <Input
          label={'Имя автора'}
          inputName={'author`s name'}
          placeholder={'Имя автора'}
          inputValue={state?.author}
          inputValueChangeHandler={(text: string) => upateAuthorsNameInputValueChangeHandler(text)}
          tabIndex={1}
          colorLabel={`${state.theme ? 'white' : 'black'}`} />
      </div>
      <div className={style.firstScreen__item}>
        <Input
          colorLabel={`${state.theme ? 'white' : 'black'}`}
          label={'Название статьи'}
          inputName={'article title'}
          placeholder={'Название статьи'}
          inputValue={state?.title}
          inputValueChangeHandler={
            (text: string) => updateTitleInputValueChangeHandler(text)}
          tabIndex={2} />
      </div>
      <div className={style.firstScreen__item}>
        <Button buttonName={'Далее'}
          onClickHandler={() => clickButtonHandler()}
        />
      </div>
    </div>
  )
}
