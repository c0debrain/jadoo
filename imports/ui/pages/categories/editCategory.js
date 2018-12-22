import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';

import './editCategory.html';

Template.EditCategory.onCreated(function() {
});

Template.EditCategory.helpers({
	category() {
		return Categories.findOne({_id: FlowRouter.getParam('_id'), author: Meteor.userId()});
	}
});
