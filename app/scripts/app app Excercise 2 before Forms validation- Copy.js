'use strict';

    var app = angular.module('myDishApp', [])
    .controller('MyDishControl', ['$scope', function($scope){
        $scope.dishes = [{ name: '1 Pizza', price: '150',image: 'images/uthapizza.png', category:'non-veg'},
        { name: '2 Pizza', price: '250',image: 'images/uthapizza.png', category:'veg'},
        { name: '3 Pizza', price: '350',image: 'images/uthapizza.png', category:'veg'},
        { name: '4 Pizza', price: '450',image: 'images/uthapizza.png', category:'non-veg'}];

        $scope.testDisplay = 'Welcome to Dishes Page';

        $scope.tab = 1;
        $scope.filtText = '';

        $scope.select = function(tabNum){
            $scope.tab = tabNum;
	    if (tabNum == 2)
	        $scope.filtText = 'veg';
	    else if (tabNum == 3)
	        $scope.filtText = 'non-veg';
	    else
	        $scope.filtText = '';
    }

    $scope.makeToActiveClass = function(tabNumber){
        return	($scope.tab  === tabNumber);
    }

    $scope.showDetails = false;
    $scope.toggleDetails = function ()
    {
        $scope.showDetails = !$scope.showDetails;
    }
    }])

    .controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])

    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
        $scope.invalidChannelSelection = true;
        console.log('incorrect');
    }
    else {
        $scope.invalidChannelSelection = false;
        $scope.feedback = {
            mychannel: "", firstName: "", lastName: "",
            agree: false, email: ""
        };
        $scope.feedback.mychannel = "";

        $scope.feedbackForm.$setPristine();
        console.log($scope.feedback);
    }
        };
    }])

    .controller('dishDetailController', ['$scope', function($scope) {

    var dish = {
        name: 'Uthapizza',
        image: 'images/uthapizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
            },
            {
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
            },
            {
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "25 Cent",
                date: "2011-12-02T17:57:28.556094Z"
            }

        ]
    };

    $scope.dish = dish;

    }])


    .controller('DishCommentController', ['$scope', function ($scope) {

        $scope.feedback = { yourName: "", ratings: 5, comments: "" };
        $scope.submitComment = function () {
            var obj = { author: $scope.feedback.yourName, rating: $scope.feedback.ratings, comment: $scope.feedback.comments, date: new Date().toISOString()};
            $scope.dish.comments.push(obj);
            $scope.feedback.yourName = "";
            $scope.feedback.ratings = 5;
            $scope.feedback.comments = "";
            obj = null;
            $scope.commentForm.$setPristine();
        }
    }])
;
