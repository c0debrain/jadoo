import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';
import { Products } from '../../../api/products/products';

import './product.html';

Template.Product.helpers({
	category() {
		Meteor.subscribe('oneCategory', this.category);
		return Categories.findOne({_id: this.category, author: Meteor.userId()});
	},
	currentUserEmail() {
		return Meteor.user().emails[0].address;
	}
});

Template.Product.events({
	'click .delete-product'(event) {
		event.preventDefault();

		if (confirm('Are you sure?')) {
			Meteor.call('deleteProduct', this._id);
		}
	}
});
