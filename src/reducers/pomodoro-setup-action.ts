import { PomodoroState, PomodoroSetupAction } from "./pomodoro-state";

export const setupPomodoro = (seconds: number): PomodoroSetupAction => ({
  type: "setup",
  seconds,
});

export const pomodoroSetupAction = (
  state: PomodoroState,
  action: PomodoroSetupAction
): PomodoroState => {
  const { seconds } = action;
  return { ...state, seconds, running: false, error: undefined };
};
