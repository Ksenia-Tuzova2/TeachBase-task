import { IsDraftType, StateType } from "./state";

type ActionsType =
  | ReturnType<typeof SendTextAC>
  | ReturnType<typeof SendIsDraftAC>
  | ReturnType<typeof SendTitleAC>
  | ReturnType<typeof UpdateStepAC>
  | ReturnType<typeof ChangeThemeAC>
  | ReturnType<typeof UpdateAuthorAC>;

export const SendTextAC = (text: string) => {
  return { type: "SEND-TEXT", text: text } as const;
};
export const SendIsDraftAC = (isDraft: IsDraftType) => {
  return { type: "SEND_ISDRAFT", isDraft } as const;
};
export const SendTitleAC = (title: string) => {
  return { type: "SEND-TITLE", title } as const;
};

export const UpdateStepAC = (step: number) => {
  return { type: "UPDATE-STEP", step } as const;
};

export const ChangeThemeAC = (theme: boolean) => {
  return { type: "CHANGE-THEME", theme } as const;
};

export const UpdateAuthorAC = (author: string) => {
  return { type: "UPDATE-AUTHOR", author } as const;
};

export const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case "SEND-TEXT":
      console.log({
        author: state.author,
        title: state.title,
        text: action.text,
        isDraft: state.isDraft,
      });

      return { ...state, text: action.text };
    case "SEND_ISDRAFT":
      return { ...state, isDraft: action.isDraft };
    case "SEND-TITLE":
      return { ...state, title: action.title };
    case "UPDATE-STEP":
      return { ...state, step: action.step };
    case "CHANGE-THEME":
      return { ...state, theme: action.theme };
    case "UPDATE-AUTHOR":
      return { ...state, author: action.author };
    default:
      throw new Error("I don't understand this type");
  }
};
