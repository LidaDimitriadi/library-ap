import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('invitation');
	},

	actions: {
		saveInvitation(newInvitation) {
			newInvitation.save().then((response) => {
				this.controller.set('model.responseMessage', `Thank you! We have just saved your email address: ${this.controller.get('model.email')}`);
	        	this.controller.set('model.email', '');
			});
		}
	}
});
