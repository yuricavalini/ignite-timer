import { ActionTypes } from '../constants/cyclesConstants';
import { Cycle } from '../models/cycle';

interface AddNewCycleActionProps {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface MarkCurrentCycleAsFinishedActionProps {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

interface InterruptCurrentCycleActionProps {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

export type ActionsProp =
  | AddNewCycleActionProps
  | MarkCurrentCycleAsFinishedActionProps
  | InterruptCurrentCycleActionProps;

export function addNewCycleAction(newCycle: Cycle): AddNewCycleActionProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedActionProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction(): InterruptCurrentCycleActionProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE as const,
  };
}
