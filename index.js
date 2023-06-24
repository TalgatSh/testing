export const mage = { name: 'Маг', health: 90 };
export const warrior = { name: 'Воин', health: 45 };
export const thief = { name: 'Вор', health: 10 };

export default function healthBar(obj) {
  let status;

  if (obj.health >= 50) {
    status = 'healthy';
  }

  if (obj.health < 50 && obj.health > 15) {
    status = 'wounded';
  }

  if (obj.health <= 15) {
    status = 'critical';
  }

  return status;
}
