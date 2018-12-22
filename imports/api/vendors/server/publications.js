import { Meteor } from 'meteor/meteor';

import { Vendors } from '../vendors';

Meteor.publish('vendors', () => {
	return Vendors.find();
});

Meteor.publish('oneVendor', (vendorId) => {
	return Vendors.find({_id: vendorId});
});
