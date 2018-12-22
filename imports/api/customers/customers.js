import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Customers = new Mongo.Collection('customers');

Customers.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

Customers.attachSchema(new SimpleSchema({
	firstName : {
		type: String,
		label: 'First Name',
		autoform: {
			placeholder: "Customer's First Name"
		}
	},
	lastName : {
		type: String,
		label: 'Last Name',
		autoform: {
			placeholder: "Customer's Last Name"
		}
	},
	gender: {
		type: String,
		label: 'Gender',
		autoform: {
			type: 'select-radio',
			options() {
				return [{
					label: 'Male',
					value: 'male'
				}, {
					label: 'Female',
					value: 'female'
				}];
			}
		}
	},
	email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'E-mail',
		autoform: {
			placeholder: 'johndoe@somewhere.com'
		}
  },
	address: {
		type: String,
		label: 'Address',
		optional: true,
		max: 1000,
		autoform: {
			placeholder: "Customer's Address (not more than 100 characters)",
			rows: 5
		}
	},
	city: {
		type: String,
		label: 'City',
		optional: true,
		max: 200,
		autoform: {
			placeholder: "Customer's City"
		}
	},
	pincode: {
		type: Number,
		label: 'Pincode',
		optional: true,
		min: 100000,
		max: 999999,
		autoform: {
			placeholder: "Customer's Pincode"
		}
	},
	state: {
		type: String,
		label: 'State',
		optional: true,
		max: 200,
		autoform: {
			placeholder: "Customer's State"
		}
	},
	phoneNumber: {
	  type: Number,
		label: 'Phone Number',
	  autoform: {
	    afFieldInput: {
	      type: 'tel'
	    }
	  }
	},
	status: {
		type: Boolean,
		label: 'Status'
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
