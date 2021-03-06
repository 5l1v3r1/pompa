import Controller from '@ember/controller';
import { sort, alias } from '@ember/object/computed';

export default Controller.extend({
  campaign: alias('model'),
  scenarios: alias('model.scenarios'),
  scenariosSorting: Object.freeze(['numericId']),
  sortedScenarios: sort('scenarios', 'scenariosSorting'),
});

