import { OpenedState } from './types';
import { isToday, parseISO } from 'date-fns';

// Maximum number of cards that can be opened per day
const DAILY_CARD_LIMIT = 1;

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
  
  if (!isToday(parseISO(state.lastOpenedDate))) return true;
  
  // Count cards opened today
  const todayOpenedCount = state.openedCards.length - 
    state.openedCards.filter(() => !isToday(parseISO(state.lastOpenedDate!))).length;
  
  return todayOpenedCount < DAILY_CARD_LIMIT;
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

export const getTodayOpenedCount = (): number => {
  const state = getStoredState();
  if (!state.lastOpenedDate) return 0;
  
  return state.openedCards.filter((cardId) => 
    isToday(parseISO(cardId))
  ).length;
};