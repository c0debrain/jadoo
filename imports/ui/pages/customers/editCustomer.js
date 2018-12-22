import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Customers } from '../../../api/customers/customers';

import './editCustomer.html';

Template.EditCustomer.onCreated(function() {
});

Template.EditCustomer.helpers({
	customer() {
		return Customers.findOne({_id: FlowRouter.getParam('_id'), author: Meteor.userId()});
	}
});
