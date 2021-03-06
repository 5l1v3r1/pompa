import Controller from '@ember/controller';
import { sort, alias } from '@ember/object/computed';

export default Controller.extend({
  goals: alias('model'),
  goalsSorting: Object.freeze(['score:desc', 'numericId']),
  sortedGoals: sort('goals', 'goalsSorting'),
});
