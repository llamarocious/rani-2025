import { Card, Jar } from './types';

export const jars: Jar[] = [
  {
    id: 'happy',
    image: '../src/assets/jars/happy-jar.png',
    bgColor: 'bg-yellow-200',
  },
  {
    id: 'sad',
    image: '../src/assets/jars/sad-jar.png',
    bgColor: 'bg-blue-200',
  },
  {
    id: 'missing',
    image: '../src/assets/jars/missing-jar.png',
    bgColor: 'bg-white',
  },
  {
    id: 'stressed',
    image: '../src/assets/jars/stressed-jar.png',
    bgColor: 'bg-purple-200',
  },
  {
    id: 'doubtful',
    image: '../src/assets/jars/doubtful-jar.png',
    bgColor: 'bg-pink-200',
  },
  {
    id: 'soso',
    image: '../src/assets/jars/soso-jar.png',
    bgColor: 'bg-gray-500',
  },
  {
    id: 'upsetwm',
    image: '../src/assets/jars/upsetwm-jar.png',
    bgColor: 'bg-orange-200',
  },
  {
    id: 'upsetwu',
    image: '../src/assets/jars/upsetwu-jar.png',
    bgColor: 'bg-green-200',
  }
];

export const cards: Card[] = [
  {
    id: 'happy-1',
    jarId: 'happy',
    bgColor: jars.find(jar => jar.id === 'happy')?.bgColor || 'default-color',
    content: 'Your smile lights up my world. Here\'s a reminder of how much joy you bring to my life...'
  },
  {
    id: 'sad-1',
    jarId: 'sad',
    bgColor: jars.find(jar => jar.id === 'sad')?.bgColor || 'default-color',
    content: 'I wish I could be there to hug you right now. Remember that this feeling will pass...',
  },
  {
    id: 'missing-1',
    jarId: 'missing',
    bgColor: jars.find(jar => jar.id === 'missing')?.bgColor || 'default-color',
    content: 'Remember that time when we...',
  },
  {
    id: 'stressed-1',
    jarId: 'stressed',
    bgColor: jars.find(jar => jar.id === 'stressed')?.bgColor || 'default-color',
    content: 'Close your eyes, take a deep breath, and know that I believe in you...',
  },
  {
    id: 'doubtful-1',
    jarId: 'doubtful',
    bgColor: jars.find(jar => jar.id === 'doubtful')?.bgColor || 'default-color',
    content: 'You are capable of so much more than you think. Believe in yourself...',
  },
  {
    id: 'soso-1',
    jarId: 'soso',
    bgColor: jars.find(jar => jar.id === 'soso')?.bgColor || 'default-color',
    content: 'It\'s okay to feel this way. Remember that I am here for you...',
  },
  {
    id: 'upsetwm-1',
    jarId: 'upsetwm',
    bgColor: jars.find(jar => jar.id === 'upsetwm')?.bgColor || 'default-color',
    content: 'I know you are upset. Let\'s talk about it...',
  },
  {
    id: 'upsetwu-1',
    jarId: 'upsetwu',
    bgColor: jars.find(jar => jar.id === 'upsetwu')?.bgColor || 'default-color',
    content: 'I may be upset, but I still love you...',
  }
];