import { Meteor } from 'meteor/meteor';

import { Products } from '../products';

Meteor.publish('products', () => {
	return Products.find();
});

Meteor.publish('oneProduct', (productId) => {
	return Products.find({_id: productId});
});

