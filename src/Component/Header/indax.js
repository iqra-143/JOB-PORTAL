import React from "react";
import { Box, Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const JobListing = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.secondary.main} color="white">
      <Typography variant="h5" color="red">Open Job Listening</Typography>
      <Button variant="contained" color="primary">Post a job</Button>
    </Box>
  );
};

export default JobListing;
