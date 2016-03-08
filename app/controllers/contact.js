import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	message: '',

	validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	validMessage: Ember.computed.match('message', /^.{5,1000}$/),


 	isValid: Ember.computed.and('validEmail', 'validMessage'),
 
	isDisabled: Ember.computed.not('isValid'),

	actions: {

		saveMessage() {
			alert(`Thank you ${this.get('emailAddress')} for your message: ${this.get('message')}`);
			this.set('responceMessage', 'We got your message and we will be in touch soon!');
			this.set('emailAddress', '');
			this.set('message', '');
		}

	},

	

	/*document.getElementById('email').addEventListener('keyup', function() {
		console.log("in event listener");
		var myClass = " has-success has-feedback";
		var element = document.getElementById('email');
		if (this.get(validEmail)) {
			element.className += myClass;
			console.log(element.className);
		}
	})
*/

});

