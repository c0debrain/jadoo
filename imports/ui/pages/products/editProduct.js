import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Categories } from '../../../api/categories/categories';
import { Products } from '../../../api/products/products';
import { Vendors } from '../../../api/vendors/vendors';

import './editProduct.html';

Template.EditProduct.onCreated(function() {
});

Template.EditProduct.helpers({
	product() {
		return Products.findOne({_id: FlowRouter.getParam('_id'), author: Meteor.userId()});
	},
	categoryOptions() {
		Meteor.subscribe('categories');
		return Categories.find().map(obj => {
			return {
				label: obj.name,
				value: obj._id
			}
		});
	},
	vendorOptions() {
		Meteor.subscribe('vendors');
		return Vendors.find().map(obj => {
			return {
				label: obj.name,
				value: obj._id
			}
		});
	}
});
