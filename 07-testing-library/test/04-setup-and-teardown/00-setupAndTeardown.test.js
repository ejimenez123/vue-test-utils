import * as City from '../../js/City0';

beforeEach(() => {
  City.initializeDatabase();
});

afterEach(() => {  
  City.clearDatabase();
});

test('city database has Vienna', () => {
  expect(City.isIt('Vienna')).toBeTruthy();  
});

test('city database has San Juan', () => {
  expect(City.isIt('San Juan')).toBeFalsy();
});

