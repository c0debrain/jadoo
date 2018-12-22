import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Customers } from '../../../api/customers/customers';

import './customers.html';
import '../../components/customer/customer';

Template.Customers.helpers({
	customers() {
		return Customers.find({author: Meteor.userId()}, {sort: {createdAt: -1}}).fetch();
	}
});
