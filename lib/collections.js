import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
export const Categories = new Mongo.Collection('categories');
