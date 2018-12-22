import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Products } from '../../../api/products/products';

import './products.html';
import '../../components/product/product';

Template.Products.helpers({
	products() {
		return Products.find({author: Meteor.userId()}, {sort: {createdAt: -1}}).fetch();
	}
});
