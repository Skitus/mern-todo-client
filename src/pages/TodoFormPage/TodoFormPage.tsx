import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContentState, convertFromHTML, EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import { createTodoQuery } from '../../bll/createTodo/createTodo.slice';
import { editTodoQuery } from '../../bll/editTodo/editTodo.slice';
import { loginUserSelector } from '../../bll/loginUser/loginUser.selector';
import { validationSchemaTodo } from '../../types/validationSchema';
import { ITodoForm } from '../../types/interfaces';
import TodoForm from '../../components/TodoForm/TodoForm';
import './TodoFormPage.scss';

function TodoFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state }: any = useLocation();
  const { userId } = useSelector(loginUserSelector);
  const _id = state?._id;
  let newEditorState;

  if (state) {
    const blocksFromHTML = convertFromHTML(state.editorState);
    const convertedEditor = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );
    newEditorState = EditorState.createWithContent(convertedEditor);
  }

  const backToMainPage = () => {
    navigate('/');
  };

  const onSubmitFormHandler = (values: ITodoForm) => {
    const copyValues = {
      title: values.title,
      editorState: convertToHTML(values.editorState.getCurrentContent()),
      year: values.year,
      isPublic: values.isPublic,
      isComplete: values.isComplete,
    };

    // eslint-disable-next-line no-unused-expressions
    state ? dispatch(editTodoQuery({ copyValues, _id }))
      : dispatch(createTodoQuery({ copyValues, userId }));
    navigate('/');
  };

  return (
    <Formik
      initialValues={
                state ? {
                  title: state.title,
                  editorState: newEditorState,
                  year: state.year,
                  isPublic: state.isPublic,
                  isComplete: state.isComplete,
                } : {
                  title: '',
                  editorState: EditorState.createEmpty(),
                  year: new Date(),
                  isPublic: true,
                  isComplete: true,
                }
            }
      validationSchema={validationSchemaTodo}
      onSubmit={(values: ITodoForm) => onSubmitFormHandler(values)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldValue,
        handleBlur,
      }) => (
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
          errors={errors}
          isValid={isValid}
          setFieldValue={setFieldValue}
          handleBlur={handleBlur}
          backToMainPage={backToMainPage}
          state={state}
        />
      )}
    </Formik>
  );
}
export default TodoFormPage;
