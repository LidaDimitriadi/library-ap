import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    message: DS.attr('string'),

    validEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	validMessage: Ember.computed.match('message', /^.{5,1000}$/),


 	isValid: Ember.computed.and('validEmail', 'validMessage'),
 
	isDisabled: Ember.computed.not('isValid'),

	responseMessage: ''


});
