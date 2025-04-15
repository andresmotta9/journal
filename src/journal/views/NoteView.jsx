import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    savedMessage,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (savedMessage.length > 0) {
      Swal.fire('Updated Note', savedMessage, 'success');
    }
  }, [savedMessage]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputchange = ({ target }) => {
    if (target.files === 0) return;
    console.log('uploading files');
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      sx={{ justifyContent: 'space-between', mb: 1 }}
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid>
        <input
          type="file"
          multiple
          onChange={onFileInputchange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container width="100%">
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Type a title"
          label="title"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
