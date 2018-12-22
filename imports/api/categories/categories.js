import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Categories = new Mongo.Collection('categories');

Categories.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

Categories.attachSchema(new SimpleSchema({
	name : {
		type: String,
		label: 'Name',
		autoform: {
			placeholder: 'Category Name'
		}
	},
	description: {
		type: String,
		label: 'Description',
		optional: true,
		max: 1000,
		autoform: {
			placeholder: 'Category Description (not more than 100 characters)',
			rows: 5
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