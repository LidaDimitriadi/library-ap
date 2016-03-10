import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    	return this.store.createRecord('contact');
  	},

  	actions: {

		saveMessage(newMessage) {
			newMessage.save().then((responce) => {
				this.controller.set('model.responseMessage', 'We got your message and we will be in touch soon!');
				console.log(this.controller.get('model.responseMessage'));
				this.controller.set('model.email', '');
				this.controller.set('model.message', '');
			});
		}
	}
});
