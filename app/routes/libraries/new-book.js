import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
	//xreiazomai ena model gia th library
	//kai ena gia to new book
	//ara xrhsimopoiv RSVP.hash
	model(params) {
		return Ember.RSVP.hash({
      		library: this.store.findRecord('library', params.library_id),
      		author: this.store.createRecord('author', {
      			name: ''
      		}),
      		book: this.store.createRecord('book', {
      			library: this.store.findRecord('library', params.library_id)
      		})
    	});
	},

	setupController(controller, model) {
		controller.set('library', model.library);
	    controller.set('book', model.book);
	    controller.set('author', model.author);
	},

	actions: {

		willTransition(transition) {
	      	// rollbackAttributes() removes the record from the store
	      	// if the model 'isNew'
	      	let model = this.controller.get('model');
	      	if (model.get('hasDirtyAttributes')) {
		        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

		        if (confirmation) {
		          model.rollbackAttributes();ss
		        } else {
		          transition.abort();
		        }
		    }    
		}
	}
});
