import Character from '../app';
import { DamageStrength } from '../app';
import { Magician } from '../app';
import { Daemon } from '../app';

test('создание нового персонажа Character', () => {
  const character = new Character('Max');
  const result = {
    name: 'Max', level: 1, health: 100,
  };
  expect(character).toEqual(result);
});

test('Не верное имя', () => {
  expect(() => new Character('Bowerman1111')).toThrow();
});

test('новый персонаж Daemon', () => {
  const daemon = new Daemon('Draco');
  const result = {
    name: 'Draco', level: 1, health: 100, _attack: 10, defence: 40, type: 'Daemon', _stoned: false,
  };
  expect(daemon).toEqual(result);
});

test('новый персонаж Magician', () => {
  const magician = new Magician('Oldus');
  const result = {
    name: 'Oldus', level: 1, health: 100, _attack: 100, defence: 40, type: 'Magician', _stoned: false,
  };
  expect(magician).toEqual(result);
});

test('новый персонаж SuperCharacter', () => {
  const damageStrength = new DamageStrength('Reya');
  const result = {
    name: 'Reya', level: 1, health: 100, _stoned: false,
  };
  expect(damageStrength).toEqual(result);
});

test('Magician атакует вторую клетку без дурмана', () => {
  const magician = new Magician('Reya');
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(90);
});
test('Magician атакует вторую клетку с дурманом', () => {
  const magician = new Magician('Reya');
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(85);
});

test('Daemon атакует шестую клетку без дурмана', () => {
  const daemon = new Daemon('Reya');
  daemon.stoned = false;
  daemon.distance = 6;
  const result = daemon.attack;
  expect(result).toBe(0);
});
test('Daemon атакует вторую клетку с дурманом', () => {
  const daemon = new Daemon('Reya');
  daemon.stoned = true;
  daemon.distance = 2;
  const result = daemon.attack;
  expect(result).toBe(4);
});