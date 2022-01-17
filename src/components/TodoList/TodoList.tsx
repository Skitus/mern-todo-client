import React from 'react';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listOfTodosSelector } from '../../bll/listOfTodos/listOfTodos.selector';
import { fetchTodos } from '../../bll/listOfTodos/listOfTodos.slice';
import { deleteQuery } from '../../bll/deleteTodo/deleteTodo.slice';
import { loginUserSelector } from '../../bll/loginUser/loginUser.selector';
import { ITodoForm } from '../../types/interfaces';
import { deleteTodoSelector } from '../../bll/deleteTodo/deleteTodo.selector';
import '../RichEditor/RichText.css';
import 'draft-js/dist/Draft.css';
import './TodoList.scss';

function TodoList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const
    {
      todosData,
      todosIsLoading,
      todosCurrentPage,
      todosPerPage,
    } = useSelector(listOfTodosSelector);
  const { deleteIsLoading } = useSelector(deleteTodoSelector);
  const { userId } = useSelector(loginUserSelector);

  const editHandler = (id: string | undefined) => {
    const currentTodo = todosData.find((todo: ITodoForm) => todo._id === id);
    navigate('/update', { state: currentTodo });
  };

  const deleteHandler = (id: string | undefined) => {
    dispatch(deleteQuery(id));
  };

  React.useEffect(() => {
    dispatch(fetchTodos({ userId, todosCurrentPage, todosPerPage }));
  }, [deleteIsLoading]);

  return (
    todosIsLoading
      ? <CircularProgress color="secondary" />
      : todosData.map((todo: ITodoForm) => (
        <Grid className="todo-wrapper" key={todo._id} container>
          <Grid className="todo-info" item xs={12} md={12} lg={10}>
            <Grid container direction="row">
              <Typography className="title" variant="h6" component="h6">
                {todo.title}
              </Typography>
              <Typography className="year" variant="h6" component="h6">
                {new Date(todo.year).toLocaleDateString()}
              </Typography>
            </Grid>
            <Typography className="description" variant="h6" component="h6">
              <div
                className="text-editor"
                dangerouslySetInnerHTML={{ __html: todo.editorState }}
              />
            </Typography>
            <Grid container>
              <Typography
                className={todo.isComplete ? 'complete' : 'not-complete'}
                variant="h6"
                component="h6"
              >
                {todo.isComplete ? 'Completed' : 'Not complete'}
              </Typography>
              <Typography
                className={todo.isPublic ? 'public' : 'private'}
                variant="h6"
                component="h6"
              >
                {todo.isPublic ? 'Public' : 'Private'}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            lg={2}
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid item container xs={5} md={5}>
              <Button
                className="edit-button"
                size="large"
                variant="contained"
                onClick={() => editHandler(todo._id)}
              >
                Edit
              </Button>
            </Grid>
            <Grid item container xs={5} md={5}>
              <Button
                className="delete-button"
                size="large"
                variant="contained"
                onClick={() => deleteHandler(todo._id)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ))
  );
}

export default TodoList;
