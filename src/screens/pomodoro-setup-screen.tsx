import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slider,
} from "@mui/material";
import { SettingsOutlined } from "@mui/icons-material";

interface Props {
  disabled: boolean;
}

export function PomodoroSetupScreen(props: Props): JSX.Element {
  const { disabled } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton disabled={disabled} onClick={() => setOpen(true)}>
        <SettingsOutlined />
      </IconButton>
      <Dialog maxWidth="sm" fullWidth open={open}>
        <DialogTitle>Configurações</DialogTitle>
        <DialogContent>
          <DialogContentText mt={2}>
            Qual o tempo do seu pomodoro?
          </DialogContentText>
          <Slider
            marks
            min={5}
            max={60}
            step={5}
            shiftStep={30}
            defaultValue={30}
            aria-label="Tempo do Pomodoro"
            valueLabelDisplay="auto"
            color="info"
          />
        </DialogContent>
        <DialogActions>
          <Button color="info" autoFocus onClick={() => setOpen(false)}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
