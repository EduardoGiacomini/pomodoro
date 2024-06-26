import { pomodoroPauseAction } from "./pomodoro-pause-action";
import { pomodoroStartAction } from "./pomodoro-start-action";
import { pomodoroResumeAction } from "./pomodoro-resume-action";
import { pomodoroDecrementAction } from "./pomodoto-decrement-action";
import { PomodoroAction, PomodoroState } from "./pomodoro-state";
import { pomodoroStopAction } from "./pomodoro-stop-action";
import { pomodoroSetupAction } from "./pomodoro-setup-action";

export function pomodoroReducer(
  state: PomodoroState,
  action: PomodoroAction
): PomodoroState {
  switch (action.type) {
    case "setup":
      return pomodoroSetupAction(state, action);
    case "start":
      return pomodoroStartAction(state, action);
    case "stop":
      return pomodoroStopAction(state, action);
    case "pause":
      return pomodoroPauseAction(state, action);
    case "resume":
      return pomodoroResumeAction(state, action);
    case "decrement":
      return pomodoroDecrementAction(state, action);
    default:
      console.warn("[PomodoroReducer] Unknown action " + action);
      return state;
  }
}
