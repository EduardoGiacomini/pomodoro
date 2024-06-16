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

export function PomodoroScreen(): React.ReactElement {
  const { seconds, running, start, stop, pause, resume } = usePomodoro();

  const onPlayButtonClicked = (): void => {
    if (seconds <= 0) {
      const thirtyMinutesInSeconds = 30 * 60;
      start(thirtyMinutesInSeconds);
    } else {
      resume();
    }
  };

  const onPauseButtonClicked = (): void => {
    pause();
  };

  const onStopButtonClicked = (): void => {
    const thirtyMinutesInSeconds = 30 * 60;
    stop(thirtyMinutesInSeconds);
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
        <PomodoroSetupScreen disabled={running} />
      </Stack>
    </Stack>
  );
}
