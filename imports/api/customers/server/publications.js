import { Meteor } from 'meteor/meteor';

import { Customers } from '../customers';

Meteor.publish('customers', () => {
	return Customers.find();
});

Meteor.publish('oneCustomer', (customerId) => {
	return Customers.find({_id: customerId});
});
