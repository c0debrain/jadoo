import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Customers } from '../../../api/customers/customers';

import './customer.html';

Template.Customer.events({
	'click .delete-customer'(event) {
		event.preventDefault();

		if (confirm('Are you sure?')) {
			Meteor.call('deleteCustomer', this._id);
		}
	}
});
