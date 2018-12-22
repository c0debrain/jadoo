import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Vendors = new Mongo.Collection('vendors');

Vendors.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

Vendors.attachSchema(new SimpleSchema({
	name : {
		type: String,
		label: 'Name',
		autoform: {
			placeholder: "Vendor's Name"
		}
	},
	address: {
		type: String,
		label: 'Address',
		optional: true,
		max: 1000,
		autoform: {
			placeholder: "Vendor's Address (not more than 100 characters)",
			rows: 5
		}
	},
	city: {
		type: String,
		label: 'City',
		optional: true,
		max: 200,
		autoform: {
			placeholder: "Vendor's City"
		}
	},
	pincode: {
		type: Number,
		label: 'Pincode',
		optional: true,
		min: 100000,
		max: 999999,
		autoform: {
			placeholder: "Vendor's Pincode"
		}
	},
	state: {
		type: String,
		label: 'State',
		optional: true,
		max: 200,
		autoform: {
			placeholder: "Vendor's State"
		}
	},
	author: {
		type: String,
		label: 'Author',
		autoValue() {
			return this.userId
		},
		autoform: {
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue() {
			return new Date()
		},
		autoform: {
			type: 'hidden'
		}
	}
}));
