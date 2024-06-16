import { PomodoroState, PomodoroPauseAction } from "./pomodoro-state";

export const pausePomodoro = (): PomodoroPauseAction => ({
  type: "pause",
});

export const pomodoroPauseAction = (
  state: PomodoroState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: PomodoroPauseAction
): PomodoroState => {
  return { ...state, running: false };
};
