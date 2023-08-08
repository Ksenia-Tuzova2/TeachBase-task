import { StateType } from "./state";

type ActionsType =
  | ReturnType<typeof RemoveTodolistAC>
  | ReturnType<typeof AddTodolistAC>
  | ReturnType<typeof ChangeTodolistTitleAC>
  | ReturnType<typeof ChangeTodolistFilterAC>;

export const reducer = (state: StateType, action: ActionsType) => {
  switch (action.type) {
    case "UPDATE-AUTHORS"
    default:
      throw new Error("I don't understand this type");
  }
};

export const RemoveTodolistAC = (todolistId: string) => {
  return { type: "REMOVE-TODOLIST", id: todolistId } as const;
};
export const AddTodolistAC = (title: string) => {
  return { type: "ADD-TODOLIST", title: title } as const;
};
export const ChangeTodolistTitleAC = (todolistId: string, title: string) => {
  return {
    type: "CHANGE-TODOLIST-TITLE",
    title: title,
    id: todolistId,
  } as const;
};
export const ChangeTodolistFilterAC = (
  todolistId: string,
  filter: FilterValuesType
) => {
  return {
    type: "CHANGE-TODOLIST-FILTER",
    filter: filter,
    id: todolistId,
  } as const;
};
