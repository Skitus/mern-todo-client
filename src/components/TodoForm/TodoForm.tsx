import React, { ChangeEvent } from 'react';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { RichEditor } from '../RichEditor/RichEditor';
import './TodoForm.scss';

function TodoForm({
  handleChange,
  handleSubmit,
  values,
  errors,
  isValid,
  setFieldValue,
  handleBlur,
  backToMainPage,
  state,
}: any) {
  return (
    <Grid className="todo-form-wrapper" container justifyContent="center">
      <Grid container item xs={11} sm={11} md={10} lg={10}>
        <Typography className="caption" variant="h2" component="h6" align="center">
          {state ? 'Edit Todo' : 'Create new Todo'}
        </Typography>
        <TextField
          className="title-input"
          id="title"
          name="title"
          onChange={handleChange('title')}
          value={values.title}
          label="Title"
          variant="standard"
        />
        {errors.title && (
        <Typography className="error" variant="h6" component="h6" align="center">
          {errors.title}
        </Typography>
        )}

        <Typography className="caption" variant="h6" component="h6" align="center">
          Description
        </Typography>

        <RichEditor
          editorState={values.editorState}
          onChange={setFieldValue}
          onBlur={handleBlur}
        />

        <Grid container justifyContent="space-around" direction="row" alignItems="center">
          <LocalizationProvider className="date-picker" dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="dd-MM-yyyy"
              value={values.year}
              onChange={(val) => setFieldValue('year', val)}
              renderInput={(params) => <TextField {...params} />}
            />
            {errors.year && (
            <Typography className="error" variant="h6" component="h6" align="center">
              {errors.year}
            </Typography>
            )}

          </LocalizationProvider>
          <FormGroup>
            <Grid container justifyContent="space-between" direction="row">
              <Grid>
                <FormControlLabel
                  className="public-input"
                  name="isPublic"
                  control={(
                    <Checkbox
                      checked={values.isPublic}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => setFieldValue('isPublic', event.target.checked)}
                    />
                                    )}
                  label="Public"
                />
              </Grid>
              <Grid>
                <FormControlLabel
                  className="completed-input"
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
            </Grid>
          </FormGroup>
        </Grid>
        <Button
          className="create-todo-button"
          disabled={!isValid}
          type="submit"
          variant="contained"
          onClick={() => handleSubmit()}
        >
          {state ? 'Edit' : 'Create'}
        </Button>
        <Button
          className="back-button"
          type="submit"
          variant="contained"
          onClick={backToMainPage}
        >
          Back to main
        </Button>
      </Grid>
    </Grid>
  );
}

export default TodoForm;
