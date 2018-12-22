import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';

import './category.html';

Template.Category.events({
	'click .delete-category'(event) {
		event.preventDefault();

		if (confirm('Are you sure?')) {
			Meteor.call('deleteCategory', this._id);
		}
	}
});

