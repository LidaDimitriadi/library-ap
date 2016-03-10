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
			const email = this.get('emailAddress');
			const message = this.get('message');

			const newMessage = this.store.createRecord('contact', {
				email: email,
				message: message
			});

			newMessage.save().then((responce) => {
				this.set('responceMessage', 'We got your message and we will be in touch soon!');
				this.set('emailAddress', '');
				this.set('message', '');
			});

		}

	}

});

