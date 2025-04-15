import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid item>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item>
        <Typography color="white" variant="h5">
          Select or create a note
        </Typography>
      </Grid>
    </Grid>
  );
};
