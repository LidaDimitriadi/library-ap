import DS from 'ember-data';

export default DS.Model.extend({
  	email: DS.attr('string'),
	//tsekarei an uparxei email kai an einai valid
	//an einai valid to isDisabled einai false
	//alliws an den einai valid, to isDisabled einai true!!
	//!!!

	isValid: Ember.computed.match('email', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),

	responseMessage: ''

});
