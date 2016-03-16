import Ember from 'ember';

export default Ember.Route.extend({

	model() {
    	return this.store.createRecord('library');
  	},

  	//exw mia koinh template kai gia to new kai gia to edit th form.hbd
  	//8etw ton titlo pou 8elw me to setupController (ftiaxnw ton virtual controller dld)
	//kai kanw render th form.hbs  	

  	setupController: function (controller, model) {
    	this._super(controller, model);

    	controller.set('title', 'Create a new library');
    	controller.set('buttonLabel', 'Create');
  	},

	renderTemplate() {
	    this.render('libraries/form');
	},

  	actions: {
  		saveLibrary(newLibrary) {
			newLibrary.save().then(() => this.transitionTo('libraries'));
		},

	    willTransition() {
	      // rollbackAttributes() removes the record from the store
	      // if the model 'isNew'
	      this.controller.get('model').rollbackAttributes();
	    }
  	}
});
