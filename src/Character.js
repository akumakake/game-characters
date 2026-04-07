export default class Character {
  constructor(name, type) {
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string of length between 2 and 10 characters');
    }
    
    if (!allowedTypes.includes(type)) {
      throw new Error(`Type must be one of: ${allowedTypes.join(', ')}`);
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    
    // Базовые значения attack/defence (будут переопределены в наследниках)
    this.attack = 0;
    this.defence = 0;
  }
}