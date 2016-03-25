import Ember from 'ember';

export default Ember.Controller.extend({
	library : {},
	book: {},
	author: {},

	actions: {
		saveBook(newBook, library, author) {
			newBook.set('author', this.get('author'));
			newBook.set('authorName', this.get('author.name'));
			newBook.save();
			author.get('books').pushObject(newBook);
			author.save();
			library.get('books').pushObject(newBook);
			library.save();	
			this.transitionToRoute('libraries');
		}
	}
});
