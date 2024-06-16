export type PomodoroAction =
  | PomodoroSetupAction
  | PomodoroStartAction
  | PomodoroStopAction
  | PomodoroPauseAction
  | PomodoroResumeAction
  | PomodoroDecrementAction;

export interface PomodoroSetupAction {
  type: "setup";
  seconds: number;
}

export interface PomodoroStartAction {
  type: "start";
  seconds: number;
}

export interface PomodoroStopAction {
  type: "stop";
  seconds: number;
}

export interface PomodoroPauseAction {
  type: "pause";
}

export interface PomodoroResumeAction {
  type: "resume";
}

export interface PomodoroDecrementAction {
  type: "decrement";
}

export enum PomodoroError {
  tooLong,
  tooShort,
}

export interface PomodoroState {
  error?: PomodoroError | undefined;
  running: boolean;
  seconds: number;
}

export const POMODORO_INITIAL_STATE: PomodoroState = {
  running: false,
  seconds: 60 * 30,
};
