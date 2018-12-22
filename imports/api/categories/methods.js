import { Meteor } from 'meteor/meteor';

import { Categories } from './categories';

Meteor.methods({
	deleteCategory(categoryId) {
		Categories.remove({_id: categoryId});
	}
});