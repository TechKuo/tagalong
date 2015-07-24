myApp.controller('MyController', function($scope, $state) {

// restaurant information

$scope.restaurants = 
[
  {
    "Restaurant":"WingBucket",
    "Address":"1200 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"4 stars",
    "Tags":"American (New), Chicken wings, fast food",
    "Distance":"0.08 mi",
    "Hours":"Mon-Thu, Sun 11 am - 10 pm & Fri-Sat 11 am - 12 am",
    "Phone":"214-760-9491",
    "Website":"http://www.wingbucket.com",
    "icon":"images/food_icon/chicken50.png"
  },
  {
    "Restaurant":"Chop House Burger",
    "Address":"1501 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3.5 stars",
    "Tags":"Burgers",
    "Distance":"0.1 mi",
    "Hours":"Mon-Thu, Sun 11 am - 9 pm & Fri-Sat 11 am - 10 pm",
    "Phone":"214-741-2747",
    "Website":"http://www.chophouseburger.com",
    "icon":"images/food_icon/burger50.png"
  },
  {
    "Restaurant":"Which Wich",
    "Address":"1410 Main St. Dallas, TX 75202",
    "Price":"$",
    "Rating":"4 stars",
    "Tags":"Sandwiches",
    "Distance":"0.09 mi",
    "Hours":"Mon-Wed 10 am - 6 pm, Thu-Sat 10 am - 8 pm, Sun 10 am - 3 pm",
    "Phone":"214-741-9424",
    "Website":"http://www.whichwich.com", 
    "icon":"images/food_icon/sandwich50.png"
  },
  {
    "Restaurant":"Iron Cactus",
    "Address":"1520 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Mexican, Gluten-Free",
    "Distance":"0.1 mi",
    "Hours":"Mon-Wed 11 am - 10 pm, Thu-Sat 11 am - 11pm, Sun 10 am - 10 pm",
    "Phone":"214-749-4766",
    "Website":"http://www.ironcactus.com", 
    "icon":"images/food_icon/taco50.png"
  },
  {
    "Restaurant":"Pho Colonial",
    "Address":"1623 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Vietnamese",
    "Distance":"0.2 mi",
    "Hours":"M-F 11 am - 9:30 pm",
    "Phone":"469-480-3059",
    "Website":"http://www.phocolonial.com", 
    "icon":"images/food_icon/noodles50.png"
  },
  {
    "Restaurant":"Dallas Fish Market",
    "Address":"1501 Main St. Dallas, TX 75202",
    "Price":"$$$",
    "Rating":"3 stars",
    "Tags":"Seafood, Sushi, Sake, Happy Hour",
    "Distance":"0.1 mi",
    "Hours":"Lunch: Mon-Fri 11 am - 2 pm; Dinner: Mon-Thu 5 pm - 10 pm, Fri-Sat 5 pm - 11 pm, Sun 5 pm - 9 pm",
    "Phone":"214-744-3474",
    "Website":"http://www.dallasfishmarket.com", 
    "icon":"images/food_icon/fish50.png"
  },
  {
    "Restaurant":"City Tavern",
    "Address":"1402 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3.5 stars",
    "Tags":"American (Traditional), Bars, Music Venues",
    "Distance":"0.09 mi",
    "Hours":"Mon-Fri 11 am - 2 am, Sat-Sun 12 pm - 2 am",
    "Phone":"214-745-1402",
    "Website":"http://www.citytaverndowntown.com", 
    "icon":"images/food_icon/burger50.png"
  },
  {
    "Restaurant":"Campisi's",
    "Address":"1520 Elm St. Ste 111, Dallas, TX 75201",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Italian, Pizza",
    "Distance":"0.2 mi",
    "Hours":"Mon-Sat 10:30 am - 10 pm & Sun 11 am - 9 pm",
    "Phone":"214-752-0141",
    "Website":"http://www.campisis.us", 
    "icon":"images/food_icon/pizza50.png"
  },
  {
    "Restaurant":"Freshii",
    "Address":"1412 Main St. Ste 101, Dallas, 75202",
    "Price":"$",
    "Rating":"3 stars",
    "Tags":"Salad, Breakfast & Brunch, Gluten-free",
    "Distance":"1.0 mi",
    "Hours":"Mon-Thu 8 am - 7 pm, Fri 8 am - 5 pm & Sat 10 am - 3 pm",
    "Phone":"214-748-6000",
    "Website":"https://freshii.com/us", 
    "icon":"images/food_icon/salad50.png"
  },
  {
    "Restaurant":"Texas Spice",
    "Address":"555 S Lamar,Dallas, TX 75202",
    "Price":"$$",
    "Rating":"4 stars",
    "Tags":"American (New)",
    "Distance":"0.35 mi",
    "Hours":"Lunch: Mon-Sun 6:30 am - 2 pm; Dinner 5pm - 10 pm",
    "Phone":"214-744-6664",
    "Website":"http://www.omnihotels.com/hotels/dallas/dining/texas-spice", 
    "icon":"images/food_icon/burger50.png"
  }

];

// retrieve users/employees from Parse

var UserClass = Parse.Object.extend("Users");
var query = new Parse.Query(UserClass);

query.find( {
    success: function(results) {
        $scope.users = [];
        for (var i=0; i < results.length; i++) {
            var resultsUser = {
                name : results[i].get("name"),
                attuid : results[i].get("username"),
                location : results[i].get("location"),
                department: results[i].get("department")
            }
            $scope.users.push(resultsUser);
        }
    }, error: function(results) {
        alert("Error with Retrieving Users")
    }
});

// shows order in which employees will appear
$scope.employeeOrder = 'name';

// shows order in which restaurants will appear
$scope.restaurantOrder = 'Distance';

// shows order in which events will appear
$scope.eventOrder = 'date';


$scope.getItemId = function(val) {
    $state.go('details');
}

$scope.onMyClick = function(){
  $(".tooltipped").tooltip({delay:50});
};

$scope.testFunction = function(){
    $('.collapsible').collapsible({
      accordion : false,  // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      
    });
}

});
