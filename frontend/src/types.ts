export interface Card {
  id: string;
  jarId: string;
  content: string;
  bgColor: string;
}

export interface Jar {
  id: string;
  image: string;
  bgColor: string;
}

export interface OpenedState {
  lastOpenedDate: string | null;
  openedCards: string[];
}