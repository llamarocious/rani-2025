import { useState } from 'react';
import { Jar } from './components/Jar';
import { CardModal } from './components/Card';
import { jars, cards } from './data';
import { Card as CardType } from './types';
import { openCard } from './utils';

function App() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  const handleOpenCard = (card: CardType) => {
    setSelectedCard(card);
    openCard(card.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Open When...
          </h1>
          <p className="text-xl text-gray-600">
            A collection of messages just for you. Open one card per day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {jars.map(jar => (
            <Jar
              key={jar.id}
              jar={jar}
              cards={cards}
              onOpenCard={handleOpenCard}
            />
          ))}
        </div>

        <CardModal
          card={selectedCard}
          isOpen={!!selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      </div>
    </div>
  );
}

export default App;