import { Template } from 'meteor/templating';

import { FlowRouter } from 'meteor/kadira:flow-router';

import './register.html';

Template.Register.events({
	'submit form'(event) {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		Accounts.createUser({
			email: email,
			password: password,
			profile: {
			}
		}, (error) => {
			if (error) {
				$('.alert').toggle();
			} else {
				FlowRouter.go('home');
			}
		});
	}
});