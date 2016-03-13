import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('invitation');
	},

	actions: {
		saveInvitation(newInvitation) {
			newInvitation.save().then((responce) => {
				this.controller.set('model.responseMessage', `Thank you! We have just saved your email address: ${this.controller.get('model.email')}`);
				this.controller.set('model.email', '');
				this.transitionTo('index');
			});
		},

		willTransition() {
			// rollbackAttributes() removes the record from the store
      		// if the model 'isNew'
      		this.controller.get('model').rollbackAttributes();
		}
	}
});
