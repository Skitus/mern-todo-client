import React, { useCallback, ChangeEvent } from 'react';
import { Formik } from 'formik';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../bll/listOfTodos/listOfTodos.slice';
import { loginUserSelector } from '../../bll/loginUser/loginUser.selector';
import { listOfTodosSelector } from '../../bll/listOfTodos/listOfTodos.selector';
import { IFilterForm } from '../../types/interfaces';
import './FilterForm.scss';

function FilterForm() {
  const dispatch = useDispatch();
  const { userId } = useSelector(loginUserSelector);
  const { todosCurrentPage, todosPerPage } = useSelector(listOfTodosSelector);
  const initialValues: IFilterForm = { search: '', isPublic: false, isComplete: false };

  const onSubmitFormHandler = useCallback((values: IFilterForm) => {
    dispatch(fetchTodos({ userId, values, todosCurrentPage, todosPerPage }));
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IFilterForm) => onSubmitFormHandler(values)}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        setFieldValue,
      }) => (
        <>
          <Grid className="search-input-wrapper" container item lg={7}>
            <TextField
              className="search-input"
              id="search"
              name="search"
              onChange={handleChange('search')}
              value={values.search}
              label="Search"
              variant="standard"
            />
          </Grid>
          <FormGroup>
            <Grid container direction="row">
              <FormControlLabel
                name="isPublic"
                control={(
                  <Checkbox
                    checked={values.isPublic}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('isPublic', event.currentTarget.checked)}
                  />
                                )}
                label="Public"
              />

              <FormControlLabel
                name="isComplete"
                control={(
                  <Checkbox
                    checked={values.isComplete}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('isComplete', event.target.checked)}
                  />
                                )}
                label="Completed"
              />
            </Grid>
          </FormGroup>
          <Grid className="search-button-wrapper" xs={12} md={12} lg={1}>
            <Button
              className="search-button"
              type="submit"
              variant="contained"
              onClick={() => handleSubmit()}
            >
              Search
            </Button>
          </Grid>
        </>
      )}
    </Formik>
  );
}

export default FilterForm;
