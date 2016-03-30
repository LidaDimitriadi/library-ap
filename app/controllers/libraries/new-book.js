import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
	library : {},
	book: {},
	authorName: '',

	actions: {
		saveBook(newBook, library) {
			//check if author exists, if not I create new
			let auth = this.get('authorName');
			let author = this.store.createRecord('author', {
				name: auth,
			});
			author.get('books').pushObject(newBook);
			var that = this;
			var ref = new Firebase("https://library-app-lida.firebaseio.com/authors");
			//o sugkekrimenos author
  			ref.orderByChild('name').equalTo(auth).once("value", function(snapshot) {
  				//an einai kainourios author, aplws ton swzw
  				if (!snapshot.val()) {
  					author.save();
  					return;
  				}
  				//alliws an uparxei hdh prepei na pros8esw to biblio
  				else {
  					//briskw to key tou uparxontos author
  					var key = Object.keys(snapshot.val());
  					key = key.toString();
  					//fortwnw to record (promise gi auto xreiazomai to then())
  					that.store.findRecord('author', key).then((author) => {
  						author.get('books').pushObject(newBook);
  						author.save();
  					});
   					return;
  				}
  			});
			library.get('books').pushObject(newBook);
			library.save();
			newBook.set('authorName', auth);
			newBook.save();
		}
	}
});
