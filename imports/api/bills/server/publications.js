import { Meteor } from 'meteor/meteor';

import { Bills } from '../bills';

Meteor.publish('bills', () => {
	return Bills.find();
});

Meteor.publish('oneBill', (billId) => {
	return Vendors.find({_id: billId});
});
