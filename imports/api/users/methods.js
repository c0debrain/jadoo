import { Meteor } from 'meteor/meteor';

Meteor.methods({
	getUserCount() {
		return Meteor.users.find().count();
	}
});