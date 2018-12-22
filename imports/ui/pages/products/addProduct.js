import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Products } from '../../../api/products/products';
import { Categories } from '../../../api/categories/categories';
import { Vendors } from '../../../api/vendors/vendors';

import './addProduct.html';

window.Products = Products;

Template.AddProduct.helpers({
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
