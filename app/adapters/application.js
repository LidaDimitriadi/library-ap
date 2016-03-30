import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: new Firebase('https://LIBRARY-APP-LIDA.firebaseio.com/')
});
