import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import {
  PauseOutlined,
  PlayArrowOutlined,
  StopOutlined,
} from "@mui/icons-material";
import { usePomodoro } from "../hooks";
import { DateTimeUtils } from "../utils";
import { PomodoroSetupScreen } from "./pomodoro-setup-screen";
import { DEFAULT_POMODORO_SECONDS } from "./pomodoro-constants";

export function PomodoroScreen(): React.ReactElement {
  const { seconds, running, start, stop, pause, setup, resume } = usePomodoro();
  const [pomodoroSeconds, setPomodoroSeconds] = React.useState(
    DEFAULT_POMODORO_SECONDS
  );

  const onPlayButtonClicked = (): void => {
    if (seconds <= 0) {
      start(pomodoroSeconds);
    } else {
      resume();
    }
  };

  const onPauseButtonClicked = (): void => {
    pause();
  };

  const onStopButtonClicked = (): void => {
    stop(pomodoroSeconds);
  };

  const onSetupPomodoro = (seconds: number): void => {
    setup(seconds);
    setPomodoroSeconds(seconds);
  };

  return (
    <Stack
      gap={10}
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Typography variant="h2" fontWeight={500}>
          {DateTimeUtils.secondsToHourMinutesSeconds(seconds)}
        </Typography>
      </Stack>
      <Stack
        gap={2}
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
      >
        <IconButton disabled={running} onClick={onPlayButtonClicked}>
          <PlayArrowOutlined />
        </IconButton>
        <IconButton disabled={!running} onClick={onPauseButtonClicked}>
          <PauseOutlined />
        </IconButton>
        <IconButton onClick={onStopButtonClicked}>
          <StopOutlined />
        </IconButton>
        <PomodoroSetupScreen
          disabled={running}
          defaultSeconds={pomodoroSeconds}
          onSetupPomodoro={onSetupPomodoro}
        />
      </Stack>
    </Stack>
  );
}
