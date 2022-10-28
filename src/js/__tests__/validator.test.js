import Validator from '../validator';

test('check if the name is correct', () => {
  const user = new Validator('KilleR');
  expect(user.validateUsername()).toEqual(true);
});
test('check for correctness a name containing a simbol &', () => {
  const user = new Validator('M@rk');
  expect(user.validateUsername()).toEqual(false);
});
test('check for correctness a name containing a number in start ', () => {
  const user = new Validator('5element');
  expect(user.validateUsername()).toEqual(false);
});
test('check for correctness a name containing a number in end ', () => {
  const user = new Validator('agent007');
  expect(user.validateUsername()).toEqual(false);
});
test('check for correctness a name containing a number more then 3 times', () => {
  const user = new Validator('agent0007super');
  expect(user.validateUsername()).toEqual(false);
});
