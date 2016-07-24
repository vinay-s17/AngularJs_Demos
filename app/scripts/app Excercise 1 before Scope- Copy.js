'use strict';

var app = angular.module('myDishApp', []);
app.controller('myDishControl', function(){
	var dishes = [{ name: '1 Pizza', price: '150',image: 'images/uthapizza.png', category:'non-veg'},
{ name: '2 Pizza', price: '250',image: 'images/uthapizza.png', category:'veg'},
{ name: '3 Pizza', price: '350',image: 'images/uthapizza.png', category:'veg'},
{ name: '4 Pizza', price: '450',image: 'images/uthapizza.png', category:'non-veg'}];
this.dishes = dishes;	
this.testDisplay = 'Welcome to Dishes Page'	;

this.tab = 1;
this.filtText = '';

this.select = function(tabNum){
	this.tab = tabNum;
	if (tabNum == 2)
	    this.filtText = 'veg';
	else if (tabNum == 3)
	    this.filtText = 'non-veg';
	else
	    this.filtText = '';



}

this.makeToActiveClass = function(tabNumber){
return	(this.tab  === tabNumber);
}


		
});
