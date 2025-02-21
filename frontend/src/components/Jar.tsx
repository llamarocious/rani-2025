import React from 'react';
import { Jar as JarType, Card as CardType } from '../types';
import { canOpenToday, isCardOpened } from '../utils';

interface JarProps {
  jar: JarType;
  cards: CardType[];
  onOpenCard: (card: CardType) => void;
}

export const Jar: React.FC<JarProps> = ({ jar, cards, onOpenCard }) => {
  const jarCards = cards.filter(card => card.jarId === jar.id);
  const openedCount = jarCards.filter(card => isCardOpened(card.id)).length;
  const canOpen = canOpenToday();

  return (
    <div className={`${jar.color} rounded-lg p-6 shadow-lg transition-transform hover:scale-105`}>
      <h2 className="text-2xl font-bold text-white mb-2">{jar.name}</h2>
      <p className="text-white mb-4">{jar.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-white">
          {openedCount}/{jarCards.length} opened
        </span>
        <button
          onClick={() => {
            const unopenedCards = jarCards.filter(card => !isCardOpened(card.id));
            if (unopenedCards.length > 0) {
              onOpenCard(unopenedCards[0]);
            }
          }}
          disabled={!canOpen || openedCount === jarCards.length}
          className={`px-4 py-2 rounded-full bg-white text-gray-800 font-semibold
            ${(!canOpen || openedCount === jarCards.length) 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-gray-100'}`}
        >
          {openedCount === jarCards.length 
            ? 'All opened' 
            : canOpen 
              ? 'Open card' 
              : 'Come back tomorrow'}
        </button>
      </div>
    </div>
  );
};