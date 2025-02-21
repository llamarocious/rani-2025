import React from 'react';
import { Jar as JarType, Card } from '../types';
import { canOpenToday, isCardOpened } from '../utils';

interface JarProps {
  jar: JarType;
  cards: Card[];
  onOpenCard: (card: Card) => void;
}

export const Jar: React.FC<JarProps> = ({ jar, cards, onOpenCard }) => {
  const jarCards = cards.filter(card => card.jarId === jar.id);
  const openedCount = jarCards.filter(card => isCardOpened(card.id)).length;
  const canOpen = canOpenToday();

  const handleClick = () => {
    if (!canOpen || openedCount === jarCards.length) return;
    
    const unopenedCards = jarCards.filter(card => !isCardOpened(card.id));
    if (unopenedCards.length > 0) {
      onOpenCard(unopenedCards[0]);
    }
  };

  return (
    <div 
      className={`${jar.bgColor} p-3 rounded-lg shadow-lg cursor-pointer 
        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${(!canOpen || openedCount === jarCards.length) ? 'opacity-50' : ''}`}
      onClick={handleClick}
    >
      <div className="relative aspect-square">
        <img 
          src={jar.image} 
          alt={jar.id} 
          className="w-full  object-contain"
        />
        
        {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {openedCount}/{jarCards.length}
          </span>
        </div> */}
      </div>
    </div>
  );
};