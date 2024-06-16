import { PomodoroState, PomodoroStopAction } from "./pomodoro-state";

export const stopPomodoro = (seconds: number): PomodoroStopAction => ({
  type: "stop",
  seconds,
});

export const pomodoroStopAction = (
  state: PomodoroState,
  action: PomodoroStopAction
): PomodoroState => {
  const { seconds } = action;
  return { ...state, seconds, running: false, error: undefined };
};
