import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Vendors } from '../../../api/vendors/vendors';

import './editVendor.html';

Template.EditVendor.onCreated(function() {
});

Template.EditVendor.helpers({
	vendor() {
		return Vendors.findOne({_id: FlowRouter.getParam('_id'), author: Meteor.userId()});
	}
});
