import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      sx={{ justifyContent: 'space-between', mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          April 14, 2025
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
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
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
