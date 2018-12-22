import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './login.html';

Template.Login.events({
	'submit form'(event) {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		Meteor.loginWithPassword(email, password, (error) => {
			if (error) {
				$('.alert').toggle();
				$('.alert strong').html(error.reason);
			} else {
				FlowRouter.go('home');
			}
		});
	}
});