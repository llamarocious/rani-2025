import { OpenedState } from './types';
import { isToday, parseISO } from 'date-fns';

export const getStoredState = (): OpenedState => {
  const stored = localStorage.getItem('openWhenState');
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    lastOpenedDate: null,
    openedCards: []
  };
};

export const saveState = (state: OpenedState) => {
  localStorage.setItem('openWhenState', JSON.stringify(state));
};

export const canOpenToday = (): boolean => {
  const state = getStoredState();
  if (!state.lastOpenedDate) return true;
  return !isToday(parseISO(state.lastOpenedDate));
};

export const openCard = (cardId: string) => {
  const state = getStoredState();
  const newState: OpenedState = {
    lastOpenedDate: new Date().toISOString(),
    openedCards: [...state.openedCards, cardId]
  };
  saveState(newState);
};

export const isCardOpened = (cardId: string): boolean => {
  const state = getStoredState();
  return state.openedCards.includes(cardId);
};