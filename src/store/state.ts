export type StepType = number
export type ToggleThemeType = boolean
export type AuthorType = string
export type TitleType = string
export type TextType = string
export type IsDraftType = boolean

export type StateType = {
    theme: ToggleThemeType,
    step: StepType
    author: AuthorType,
    title: TitleType,
    text: TextType,
    isDraft: IsDraftType
}


export let initialState: StateType = {
    theme: false,
    step: 1,
    author: '',
    title: '',
    text: '',
    isDraft: true,
}