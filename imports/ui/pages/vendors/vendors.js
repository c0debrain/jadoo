import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Vendors } from '../../../api/vendors/vendors';

import './vendors.html';
import '../../components/vendor/vendor';

Template.Vendors.helpers({
	vendors() {
		return Vendors.find({author: Meteor.userId()}, {sort: {createdAt: -1}}).fetch();
	}
});
