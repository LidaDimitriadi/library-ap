import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
	//xreiazomai ena model gia th library
	//kai ena gia to new book
	//ara xrhsimopoiv RSVP.hash
	//de dhmiourgw author giati 8elw na tsekarw an yparxei hdh sto db
	model(params) {
		return Ember.RSVP.hash({
      		library: this.store.findRecord('library', params.library_id),
      		book: this.store.createRecord('book', {
      			library: this.store.findRecord('library', params.library_id)
      		}),
      		authorName: ''
    	});
	},

	setupController(controller, model) {
		controller.set('library', model.library);
	    controller.set('book', model.book);
	    controller.set('authorName', model.authorName);
	},

	actions: {

		willTransition(transition) {
	      	// rollbackAttributes() removes the record from the store
	      	// if the model 'isNew'
	      	let model = this.controller.get('model');
	      	if (model.get('hasDirtyAttributes')) {
		        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

		        if (confirmation) {
		          model.rollbackAttributes();
		        } else {
		          transition.abort();
		        }
		    }    
		}
	}
});
