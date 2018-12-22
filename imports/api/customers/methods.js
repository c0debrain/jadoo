import { Meteor } from 'meteor/meteor';

import { Customers } from './customers';

Meteor.methods({
	deleteCustomer(customerId) {
		Customers.remove({_id: customerId});
	}
});
