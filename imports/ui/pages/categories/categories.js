import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';

import './categories.html';
import '../../components/category/category';

// window.Categories = Categories;

Template.Categories.helpers({
	categories() {
		return Categories.find({author: Meteor.userId()}, {sort: {createdAt: -1}}).fetch();
	}
});
