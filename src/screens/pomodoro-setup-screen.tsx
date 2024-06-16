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
  defaultSeconds: number;
  onSetupPomodoro: (seconds: number) => void;
}

export function PomodoroSetupScreen(props: Props): JSX.Element {
  const { disabled, defaultSeconds, onSetupPomodoro } = props;

  const [open, setOpen] = React.useState(false);
  const [pomodoroSeconds, setPomodoroSeconds] = React.useState(defaultSeconds);

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
            value={pomodoroSeconds / 60}
            onChange={(_, value) => setPomodoroSeconds((value as number) * 60)}
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
          <Button
            color="info"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancelar
          </Button>
          <Button
            color="info"
            autoFocus
            onClick={() => {
              setOpen(false);
              onSetupPomodoro(pomodoroSeconds);
            }}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
