import { Card, Jar } from './types';

export const jars: Jar[] = [
  {
    id: 'happy',
    name: 'When You\'re Happy',
    description: 'For those moments of joy and celebration',
    color: 'bg-yellow-500'
  },
  {
    id: 'sad',
    name: 'When You\'re Sad',
    description: 'To lift your spirits when you\'re feeling down',
    color: 'bg-blue-500'
  },
  {
    id: 'missing',
    name: 'When You Miss Me',
    description: 'For times when you need me close',
    color: 'bg-pink-500'
  },
  {
    id: 'stressed',
    name: 'When You\'re Stressed',
    description: 'To help you relax and find peace',
    color: 'bg-purple-500'
  },
  {
    id: 'low-confidence',
    name: 'When You\'re Low on Confidence',
    description: 'For when you need reminding of your worth',
    color: 'bg-purple-500'
  },
  {
    id: 'upsetwm',
    name: 'When You\'re Upset with Me',
    description: 'To help you be reminded that I\'m trying my best',
    color: 'bg-orange-500'
  },
  {
    id: 'upsetwu',
    name: 'When I\'m  Upset with You',
    description: 'For times when I\'m the one who needs understanding',
    color: 'bg-purple-500'
  },
  {
    id: 'so-so',
    name: 'When You\'re Feeling So-So',
    description: 'For those in-between days',
    color: 'bg-gray-500'
  }
];

export const cards: Card[] = [
  {
    id: 'happy-1',
    jarId: 'happy',
    title: 'Your Beautiful Smile',
    content: 'Your smile lights up my world. Here\'s a reminder of how much joy you bring to my life...'
  },
  {
    id: 'sad-1',
    jarId: 'sad',
    title: 'A Warm Hug',
    content: 'I wish I could be there to hug you right now. Remember that this feeling will pass...'
  },
  {
    id: 'missing-1',
    jarId: 'missing',
    title: 'Our Favorite Memory',
    content: 'Remember that time when we...'
  },
  {
    id: 'stressed-1',
    jarId: 'stressed',
    title: 'Take a Deep Breath',
    content: 'Close your eyes, take a deep breath, and know that I believe in you...'
  }
];