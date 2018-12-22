import { Meteor } from 'meteor/meteor';

import { Vendors } from './vendors';

Meteor.methods({
	deleteVendor(vendorId) {
		Vendors.remove({_id: vendorId});
	}
});
