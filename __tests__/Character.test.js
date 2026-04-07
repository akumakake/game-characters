import Character from '../src/Character';
import Bowman from '../src/Bowman';
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';
import Daemon from '../src/Daemon';
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';

describe('Character class', () => {
  test('should throw error if name is too short', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string of length between 2 and 10 characters');
  });
  
  test('should throw error if name is too long', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Name must be a string of length between 2 and 10 characters');
  });
  
  test('should throw error if name is not a string', () => {
    expect(() => new Character(123, 'Bowman')).toThrow('Name must be a string of length between 2 and 10 characters');
  });
  
  test('should throw error if type is invalid', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });
  
  test('should create character with valid parameters', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char.name).toBe('Hero');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
  });
});

describe('Bowman', () => {
  test('should create Bowman with correct stats', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Swordsman', () => {
  test('should create Swordsman with correct stats', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});

describe('Magician', () => {
  test('should create Magician with correct stats', () => {
    const magician = new Magician('Gandalf');
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

describe('Daemon', () => {
  test('should create Daemon with correct stats', () => {
    const daemon = new Daemon('Azazel');
    expect(daemon.name).toBe('Azazel');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});

describe('Undead', () => {
  test('should create Undead with correct stats', () => {
    const undead = new Undead('Ghoul');
    expect(undead.name).toBe('Ghoul');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe('Zombie', () => {
  test('should create Zombie with correct stats', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});