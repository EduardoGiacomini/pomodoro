import { PomodoroState, PomodoroResumeAction } from "./pomodoro-state";

export const resumePomodoro = (): PomodoroResumeAction => ({
  type: "resume",
});

export const pomodoroResumeAction = (
  state: PomodoroState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: PomodoroResumeAction
): PomodoroState => {
  const { running, seconds } = state;

  if (running || seconds <= 0) {
    return state;
  }

  return { ...state, running: true };
};
