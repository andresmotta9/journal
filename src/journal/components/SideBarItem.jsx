import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();
  const onNoteClicked = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onNoteClicked} id={id}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container flexDirection="column">
          <ListItemText primary={newTitle} sx={{ display: 'block' }} />
          <ListItemText secondary={body} sx={{ display: 'block' }} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
