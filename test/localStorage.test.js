import { fetchItem, storeItem, addItem } from '../src/localStorage';
import { testData, defaultProjects } from './testData';

describe('LocalStorage functions', () => {
  it('should initialise a localstorage array called projects and assign default project', () => {
    expect(fetchItem('testProjects')).toBeDefined();
    expect(fetchItem('testProjects').length).toBe(1);
    expect(JSON.stringify(fetchItem('testProjects'))).toEqual(JSON.stringify(defaultProjects));
  });

  it('should add another project', () => {
    addItem('testProjects', testData.project);
    expect(fetchItem('testProjects').length).toBe(2);
  });

  it('should create a localStorage property and assign the data', () => {
    expect(window.localStorage.testProperty).not.toBeDefined();
    storeItem('testProperty', [{ name: 'test' }]);
    expect(window.localStorage.testProperty).toBeDefined();
  });
});
