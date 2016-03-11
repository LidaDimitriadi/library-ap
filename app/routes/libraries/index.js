import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    	return this.store.findAll('library');
    },

    actions: {
    	//
    	deleteLibrary(library) {
    		//confirm einai to popup kai analoga me to ti pathsw 
    		//dinei true-false sthn confirmation
    		let confirmation = confirm('Are you sure?');
    		if (confirmation) {
    			library.destroyRecord();
    		}
    	}
    }
});
