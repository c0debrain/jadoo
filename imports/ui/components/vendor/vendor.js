import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Vendors } from '../../../api/vendors/vendors';

import './vendor.html';

Template.Vendor.events({
	'click .delete-vendor'(event) {
		event.preventDefault();

		if (confirm('Are you sure?')) {
			Meteor.call('deleteVendor', this._id);
		}
	}
});
