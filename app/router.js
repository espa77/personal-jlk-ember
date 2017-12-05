import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new-patients');
  this.route('about');
  this.route('approach');
  this.route('philosophy');
});

export default Router;
