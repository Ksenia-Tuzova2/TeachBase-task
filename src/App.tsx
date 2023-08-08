
export type FilterType = "all" | "active" | "completed";
export type TodolistsType = {
  id: string;
  title: string;
  filter: FilterType;
};
export type TasksStateType = {
  [key: string]: Array<TaskType>;
};

function AppWithReducers() {
  const todolistID1: string = v1();
  const todolistID2: string = v1();

  const [todolists, dispatchToTodoLists] = useReducer(todoListReducer, [
    { id: todolistID1, title: "What to learn", filter: "all" },
    { id: todolistID2, title: "What to buy", filter: "all" },
  ]);


  function removeTask(id: string, todolistId: string) {
    const action = removeTaskAC(id, todolistId);
    dispatchToTasks(action);
  }

  function addTask(title: string, todolistId: string) {
    const action = addTaskAC(title, todolistId);
    dispatchToTasks(action);
  }

  function changeTaskStatus(isDone: boolean, id: string, todolistId: string) {
    const action = changeTaskStatusAC(isDone, id, todolistId);
    dispatchToTasks(action);
  }

  function changeTasksTitle(title: string, id: string, todolistId: string) {
    const action = changeTaskTitleAC(title, id, todolistId);
    dispatchToTasks(action);
  }

  function changeFilter(value: FilterType, todolistId: string) {
    const action = ChangeTodoFilterAC(value, todolistId);
    dispatchToTodoLists(action);
  }

  function removeTodoList(todolistId: string) {
    const action = RemoveTodolistAC(todolistId);
    dispatchToTodoLists(action);
    dispatchToTasks(action);
  }

  function addTodo(title: string) {
    const action = AddTodoListAC(title);
    //пропихнем в массив тудушек
    dispatchToTodoLists(action);
    //пропихнем в массив тасок
    dispatchToTasks(action);
  }

  function changeTodoTitle(title: string, todolistId: string) {
    const action = ChangeTodoTitleAC(title, todolistId);
    dispatchToTodoLists(action);
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="app__container-foe-view-part">
        <Container fixed>
          <Grid container style={{ padding: "30px" }}>
            <AddItemForm addItem={addTodo} />
          </Grid>
          <Grid container>
            {todolists.map((t) => {
              //здесь будем хранить отфильтрованные приколы
              let tasksForTodo = tasks[t.id];

              if (t.filter === "active") {
                tasksForTodo = tasksForTodo.filter((t) => t.isDone === false);
              }

              if (t.filter === "completed") {
                tasksForTodo = tasksForTodo.filter((t) => t.isDone === true);
              }

              return (
                <div key={v1()} className="">
                  <Todolist
                    changeTodoTitle={changeTodoTitle}
                    changeTasksTitle={changeTasksTitle}
                    removeTodoList={removeTodoList}
                    title={t.title}
                    filter={t.filter}
                    tasks={tasksForTodo}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeTaskStatus}
                    todoListId={t.id}
                  />
                </div>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default AppWithReducers;
