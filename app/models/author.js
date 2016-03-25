import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', {inverse: 'author'}, async: true),
  bookTitles: books.title;
  randomize() {
  	this.set('name', Faker.name.findName());
  	return this;
  }
});
