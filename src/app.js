const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 50 },
  { name: 'лучник', health: 0 },
];

characters.filter((item) => item.health > 0);

export default function showHealthLevel(character) {
  if (character.health < 15 && character.health > 0) {
    return 'critical';
  }
  if (character.health >= 15 && character.health <= 50) {
    return 'wounded';
  }
  if (character.health > 50) {
    return 'healthy';
  }

  return null;
}
