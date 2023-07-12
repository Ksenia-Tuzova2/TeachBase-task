import style from './firstScreen.module.scss'

type FirstScreenPropsType={
  authorsNameInputValue:string,
  articleTitleInputValue:string,
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
          <input
          type="text"
           name='author`s name'
          placeholder='Author`s name'
          value={authorsNameInputValue}
          onChange={(e) => upateAuthorsNameInputValueChangeHandler(e.currentTarget.value)}
          />
          <input 
          type="text" 
          name='article title'
          placeholder='Article title'
          value={articleTitleInputValue}
          onChange={(e) => articleTitleInputValueChangeHandler(e.currentTarget.value)}
          />
      </div>

  )
}
