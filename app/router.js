import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('conditions-treated');
  this.route('new-patients');
  this.route('about');
  this.route('treatment-philosophy');
});

export default Router;
