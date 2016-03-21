import Ember from 'ember';
import Faker from 'faker';

export default Ember.Route.extend({
	//to RSVP xrhsimopoieitai otan 8elw na xrhsimopoihsw polla models
	//kai pleon den exw aplo pinaka pou 8a ton xeirizomoun me aplo model()
	model() {
		return Ember.RSVP.hash({
			libraries: this.store.findAll('library'),
			books: this.store.findAll('book'),
			authors: this.store.findAll('author')
		});
	},

	setupController(controller, model) {
	    controller.set('libraries', model.libraries);
	    controller.set('books', model.books);
	    controller.set('authors', model.authors);
	  }
});
