import React from "react";
import { Grid, TextField, IconButton, Box } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function FormView() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid container item xs={11}>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container item xs={1}>
          <p> dumba </p>
        </Grid>
      </Grid>
    </main>
  );
}
