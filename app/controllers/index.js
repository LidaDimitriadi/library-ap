import Ember from 'ember';

export default Ember.Controller.extend({
	//isDisabled: true,

	isDisabled: Ember.computed('isDisabled', function() {
		if (this.get('emailAddress') === '') {
			this.isDisabled = true;
			console.log("it is active");
		}
		else {
			this.isDisabled = false;
			console.log("it is disabled");
		}
	}),


	emailAddress: '',

	actualEmailAddress: Ember.computed('emailAddress', function() {
		console.log('email address is: ', this.get('emailAddress'));
	}),

	emailAddressChanged: Ember.observer('emailAddress', function() {
		console.log('email changed to: ', this.get('emailAddress'));
	})
});
