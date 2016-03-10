import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	responseMessage: '',

	//tsekarei an uparxei email kai an einai valid
	//an einai valid to isDisabled einai false
	//alliws an den einai valid, to isDisabled einai true!!
	//!!!
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),

	actions: {

	   saveInvitation() {
	      const email = this.get('emailAddress');

	      const newInvitation = this.store.createRecord('invitation', { 
	      	email: email 
	      });

	      newInvitation.save().then((response) => {
	      	this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
	        console.log(this.get('responseMessage'));
	        this.set('emailAddress', '');
	      });

	    }
    }


});
