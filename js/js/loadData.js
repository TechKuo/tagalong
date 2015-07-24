myApp.controller('MyController', function($scope, $state) {

// restaurant information

$scope.testFunction = function(){
    $('.collapsible').collapsible({
      accordion : false,  // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      
    });
}

$scope.restaurants = 
[
  {
    "Restaurant":"WingBucket",
    "Address":"1200 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"4 stars",
    "Tags":"American (New), Chicken wings, fast food",
    "Distance": 0.08,
    "Hours":"Mon-Thu, Sun 11 am - 10 pm & Fri-Sat 11 am - 12 am",
    "Phone":"214-760-9491",
    "Website":"http://www.wingbucket.com",
    "itemId":"0"
  },
  {
    "Restaurant":"Chop House Burger",
    "Address":"1501 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3.5 stars",
    "Tags":"Burgers",
    "Distance": 0.1,
    "Hours":"Mon-Thu, Sun 11 am - 9 pm & Fri-Sat 11 am - 10 pm",
    "Phone":"214-741-2747",
    "Website":"http://www.chophouseburger.com",
    "itemId":"1"
  },
  {
    "Restaurant":"Which Wich",
    "Address":"1410 Main St. Dallas, TX 75202",
    "Price":"$",
    "Rating":"4 stars",
    "Tags":"Sandwiches",
    "Distance": 0.09,
    "Hours":"Mon-Wed 10 am - 6 pm, Thu-Sat 10 am - 8 pm, Sun 10 am - 3 pm",
    "Phone":"214-741-9424",
    "Website":"http://www.whichwich.com",
    "itemId":"2"
  },
  {
    "Restaurant":"Iron Cactus",
    "Address":"1520 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Mexican, Gluten-Free",
    "Distance": 0.1,
    "Hours":"Mon-Wed 11 am - 10 pm, Thu-Sat 11 am - 11pm, Sun 10 am - 10 pm",
    "Phone":"214-749-4766",
    "Website":"http://www.ironcactus.com",
    "itemId":"3"
  },
  {
    "Restaurant":"Pho Colonial",
    "Address":"1623 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Vietnamese",
    "Distance": 0.2,
    "Hours":"M-F 11 am - 9:30 pm",
    "Phone":"469-480-3059",
    "Website":"http://www.phocolonial.com",
    "itemId":"4"
  },
  {
    "Restaurant":"Dallas Fish Market",
    "Address":"1501 Main St. Dallas, TX 75202",
    "Price":"$$$",
    "Rating":"3 stars",
    "Tags":"Seafood, Sushi, Sake, Happy Hour",
    "Distance": 0.1,
    "Hours":"Lunch: Mon-Fri 11 am - 2 pm; Dinner: Mon-Thu 5 pm - 10 pm, Fri-Sat 5 pm - 11 pm, Sun 5 pm - 9 pm",
    "Phone":"214-744-3474",
    "Website":"http://www.dallasfishmarket.com",
    "itemId":"5"
  },
  {
    "Restaurant":"City Tavern",
    "Address":"1402 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3.5 stars",
    "Tags":"American (Traditional), Bars, Music Venues",
    "Distance": 0.09,
    "Hours":"Mon-Fri 11 am - 2 am, Sat-Sun 12 pm - 2 am",
    "Phone":"214-745-1402",
    "Website":"http://www.citytaverndowntown.com",
    "itemId":"6"
  },
  {
    "Restaurant":"Campisi's",
    "Address":"1520 Elm St. Ste 111, Dallas, TX 75201",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Italian, Pizza",
    "Distance": 0.2,
    "Hours":"Mon-Sat 10:30 am - 10 pm & Sun 11 am - 9 pm",
    "Phone":"214-752-0141",
    "Website":"http://www.campisis.us",
    "itemId":"7"
  },
  {
    "Restaurant":"Freshii",
    "Address":"1412 Main St. Ste 101, Dallas, 75202",
    "Price":"$",
    "Rating":"3 stars",
    "Tags":"Salad, Breakfast & Brunch, Gluten-free",
    "Distance": 1.0,
    "Hours":"Mon-Thu 8 am - 7 pm, Fri 8 am - 5 pm & Sat 10 am - 3 pm",
    "Phone":"214-748-6000",
    "Website":"https://freshii.com/us",
    "itemId":"8"
  },
  {
    "Restaurant":"Texas Spice",
    "Address":"555 S Lamar,Dallas, TX 75202",
    "Price":"$$",
    "Rating":"4 stars",
    "Tags":"American (New)",
    "Distance": .35,
    "Hours":"Lunch: Mon-Sun 6:30 am - 2 pm; Dinner 5pm - 10 pm",
    "Phone":"214-744-6664",
    "Website":"http://www.omnihotels.com/hotels/dallas/dining/texas-spice",
    "itemId":"9"
  }

];

// shows order in which restaurants will appear
$scope.restaurantOrder = 'Distance';

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
  
$scope.events= 
[
  {
    "Restaurant":"WingBucket",
    "Website":"http://www.wingbucket.com",
    "Date":"Tuesday, Aug ",
    "Day": 18,
    "Time":"12:00-1:00 PM",
    "Invited":"6",
    "Going":"3",  
    "People":"Rukshinie F, Claire W, Justin K",
    "Comments":"Meet on 2 Bell 14th floor by elevators.",
    "Public":"Public",
    "Status":"Attending"
  },
  {
    "Restaurant":"Pho Colonial",
    "Website":"http://www.phocolonial.com",
    "Date":"Wednesday, Aug ",
    "Day": 19,
    "Time":"12:15-1:00 PM",
    "Invited":"7",
    "Going":"4", 
    "People":"Rukshinie F, Claire W, Justin K, Kathleen M",
    "Comments":"",
    "Public":"Private",
    "Status":"Invited" 
  },
  {
   "Restaurant":"Dallas Fish Market",
   "Website":"http://www.dallasfishmarket.com",
    "Date":"Wednesday, August 19",
    "Day": 19,
    "Time":"4:00-6:00 PM",
    "Invited":"8",
    "Going":"5",
    "People":"Rukshinie F, Claire W, Justin K, Kathleen M, Tech K",
    "Comments":"Come help us celebrate Tech's birthday!",
    "Public":"Public",
    "Status":"Hosting"
  },
  {
    "Restaurant":"WingBucket",
    "Website":"http://www.wingbucket.com",
    "Date":"Wednesday, Aug ",
    "Day": 18,
    "Time":"12:00-1:00 PM",
    "Invited":"3",
    "Going":"1", 
    "People":"Rukshinie F",
    "Comments":"TDP Intern lunch",
    "Public":"Private",
    "Status":"Attending" 
  },
  {
    "Restaurant":"Which Wich",
    "Website":"http://www.whichwich.com",
    "Date":"Thursday, Aug ",
    "Day": 20,
    "Time":"11:30-12:30 PM",
    "Invited":"9",
    "Going":"2", 
    "People":"Rukshinie F, Claire W,",
    "Comments":"",
    "Public":"Public",
    "Status":"Hosting" 
  },
  {
    "Restaurant":"Chop House Burger",
    "Website":"http://www.chophouseburger.com",
    "Date":"Thursday, Aug ",
    "Day": 20,
    "Time":"12:00-1:00 PM",
    "Invited":"4",
    "Going":"3", 
    "People":"Rukshinie F, Claire W, Justin K",
    "Comments":"6",
    "Public":"Public",
    "Status":"Invited" 
  },
  {
    "Restaurant":"City Tavern",
    "Website":"http://www.citytaverndowntown.com",
    "Date":"Friday, Aug ",
    "Day": 21,
    "Time":"12:00-1:00 PM",
    "Invited":"10",
    "Going":"3", 
    "People":"Rukshinie F, Claire W, Justin K",
    "Comments":"",
    "Public":"Public",
    "Status":"Attending" 
  }

]

$scope.eventOrder = 'date';

$scope.browseEvents = 
[
  {
    "Restaurant":"Chop House Burger",
    "Website":"http://www.chophouseburger.com",
    "Date":"Tuesday, Aug ",
    "Day": 18,
    "Time":"12:00-1:00 PM",
    "Invited":"9",
    "Going":"2",
    "People":"Rukshinie F, Claire W",
    "Comments":"",
    "Public":"Public",
    
  },
  {
    "Restaurant":"Iron Cactus",
    "Website":"http://www.ironcactus.com",
    "Date":"Tues, Aug ",
    "Day": 18,
    "Time":"12:00-1:00 PM",
    "Invited":"4",
    "Going":"5",  
    "People":"Rukshinie F, Claire W, Justin K, Kathleen M, Tech K",
    "Comments":"Meet in the lobby of 2 Bell",
    "Public":"Public",
    
  },
  {
   "Restaurant":"City Tavern",
   "Website":"http://www.citytaverndowntown.com",
    "Date":"Wednesday, Aug ",
    "Day": 19,
    "Time":"4:00-6:00 PM",
    "Invited":"2",
    "Going":"4", 
    "People":"Rukshinie F, Claire W, Justin K, Kathleen M", 
    "Comments":"Come to happy hour with the TDP Interns!",
    "Public":"Public",
  
  },
  {
    "Restaurant":"Pho Colonial",
    "Website":"http://www.phocolonial.com",
    "Date":"Tuesday, Aug ",
    "Day": 18,
    "Time":"12:00-1:00 PM",
    "Invited":"0",
    "Going":"5",  
    "People":"Rukshinie F, Claire W, Justin K, Kathleen M, Tech K",
    "Comments":"Meet by the elevators on the 14th floor of 2 Bell",
    "Public":"Public",
    
  },
  {
    "Restaurant":"Wing Bucket",
    "Website":"http://www.wingbucket.com",
    "Date":"Thursday, Aug ",
    "Day": 20,
    "Time":"11:30-12:30 PM",
    "Invited":"3",
    "Going":"2",  
    "People":"Rukshinie F, Claire W",
    "Comments":"",
    "Public":"Public",
    
  },
  {
    "Restaurant":"Which Wich",
    "Website":"http://www.whichwich.com",
    "Date":"Thursday, August ",
    "Day": 20,
    "Time":"12:00-12:30 PM",
    "Invited":"9",
    "Going":"3",  
    "People":"Rukshinie F, Claire W, Justin K",
    "Comments":"Let's meet by Kathleen's desk at 11:55 PM",
    "Public":"Public",
    
  },
  {
    "Restaurant":"Dallas Fish Market",
    "Website":"http://www.dallasfishmarket.com",
    "Date":"Friday, August ",
    "Day": 21,
    "Time":"4:30-6:00 PM",
    "Invited":"8",
    "Going":"3",  
    "People":"Rukshinie F, Claire W, Justin K",
    "Comments":"Ending the week with sushi and drinks!!",
    "Public":"Public",
    
  }

]

$scope.browseEventsOrder = 'Day';

$scope.getItemId = function(val) {
    $state.go('details');
}

$scope.onMyClick = function(){
  $(".tooltipped").tooltip({delay:50});
};



});

