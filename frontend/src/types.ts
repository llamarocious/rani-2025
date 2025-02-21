export interface Card {
    id: string;
    jarId: string;
    title: string;
    content: string;
    image?: string;
  }
  
  export interface Jar {
    id: string;
    name: string;
    description: string;
    color: string;
  }
  
  export interface OpenedState {
    lastOpenedDate: string | null;
    openedCards: string[];
  }