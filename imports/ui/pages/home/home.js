import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './home.html';

Template.Home.events({
	'click .btn-lg'(event) {
		event.preventDefault();

		if (!Meteor.userId()) {
			FlowRouter.go('login');
		}
	}
});
