import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
    	return this.store.findRecord('library', params.library_id);
  	},

  	actions: {

	    saveLibrary(newLibrary) {
	      newLibrary.save().then(() => this.transitionTo('libraries'));
	    },

	    //opote 8elw n alla3w route me transition, kaleitai h willTransition automata ap to ember
	    //mporw mesa na grapsw oti 8elw kai na kanw k elegxo gia to an telika 8a ginei to transition
	    //edw elegw an o xrhsths eswse thn allagh pou ekane sto model
	    //an oxi tou petaw popup opou ton eidopoiw oti 8a xasei tis allages an fugei ap th selida
	    //prattw antistoixa
	    willTransition(transition) {

		    let model = this.controller.get('model');

		    if (model.get('hasDirtyAttributes')) {
		        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

		        if (confirmation) {
		            model.rollbackAttributes();
		        } 
		        else {
		            transition.abort();
		        }
		    }
	    }
  	}
});
