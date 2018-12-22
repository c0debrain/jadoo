import { Meteor } from 'meteor/meteor';

import { Products } from './products';

Meteor.methods({
	deleteProduct(productId) {
		Products.remove({_id: productId});
	},
	updateQuantity(productId, quantity) {
		const availableQuantity = Products.findOne({ _id: productId }).quantity;
		let left = availableQuantity - Number(quantity);
		Products.update(productId, {
			$set: {
				quantity: left
			}
		});
	}
});
