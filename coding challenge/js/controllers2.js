myApp.controller('MyController', function($scope, $state) {


	
  $scope.artists = 
{
  0: {
    "name":"Kathleen Morgan",
    "shortname":"Kathleen_Morgan",
    "department":"TDP",
    "attID":"km234r",
    // "bio":"Kathleen attends the University of Texas in Austin. ",
  },
  1: {
    "name":"Justin Keeling",
    "shortname":"Justin_Keeling",
    "department":"TDP",
    "attID":"jk6510",
    // "bio":"Justin attends the University of Texas in Dallas. ",
  },
  2: {
    "name":"Tech Kuo",
    "shortname":"Tech_Kuo",
    "department":"TDP",
    "attID":"tk685f",
    // "bio":"Tech attends Cornell University.",
  },
  3: {
    "name":"Claire Weldon",
    "shortname":"Claire_Weldon",
    "department":"TDP",
    "attID":"cw741q",
    // "bio":"Claire Weldon attends Texas A&M University.",
  },
  4: {
    "name":"Rukshinie Fernando",
    "shortname":"Rukshinie_Fernando",
    "department":"TDP",
    "attID":"rf824a",
    // "bio":"Rukshinie attends the University of Texas in Austin.",
  },
  5: {
    "name":"Chelsea Secker",
    "shortname":"Chelsea_Secker",
    "department":"College Recruiting",
    "attID":"cs110y",
    // "bio":"Rukshinie attends the University of Texas in Austin.",
  },
  6: {
    "name":"Elizabeth Winters",
    "shortname":"Elizabeth_Winters",
    "department":"College Recruiting",
    "attID":"ew246u",
    // "bio":"Rukshinie attends the University of Texas in Austin.",
  },
  7: {
    "name":"Jennifer Langston",
    "shortname":"Jennifer_Langston",
    "department":"College Recruiting",
    "attID":"jk4091",
    // "bio":"Rukshinie attends the University of Texas in Austin.",
  },
  8: {
    "name":"Andrew Bidinger",
    "shortname":"Andrew_Bidinger",
    "department":"College Recruiting",
    "attID":"ab734j",
    // "bio":"Rukshinie attends the University of Texas in Austin.",
  },
  9: {
    "name":"Randall Stephenson",
    "shortname":"Randall_Stephenson",
    "department":"Chairman",
    "attID":"rs2982",
    // "bio":"Rukshinie attends the University of Texas in Austin.",
  },
};

    $scope.artistOrder = 'name';
  


  $scope.getItemId = function(val) {
    // alert(val);
    $state.go('details');
  }


$scope.restaurants = 
{
  0:{
    "Restaurant":"WingBucket",
    "Address":"1200 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"4 stars",
    "Tags":"American (New), Chicken wings, fast food",
    "Distance": 0.08,
    "Hours":"Mon-Thu, Sun 11 am - 10 pm & Fri-Sat 11 am - 12 am",
    "Phone":"214-760-9491",
    "Website":"http://www.wingbucket.com" 
  },
  1:{
    "Restaurant":"Chop House Burger",
    "Address":"1501 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3.5 stars",
    "Tags":"Burgers",
    "Distance": 0.1,
    "Hours":"Mon-Thu, Sun 11 am - 9 pm & Fri-Sat 11 am - 10 pm",
    "Phone":"214-741-2747",
    "Website":"http://www.chophouseburger.com",
  
  },
  2:{
    "Restaurant":"Which Wich",
    "Address":"1410 Main St. Dallas, TX 75202",
    "Price":"$",
    "Rating":"4 stars",
    "Tags":"Sandwiches",
    "Distance": 0.09,
    "Hours":"Mon-Wed 10 am - 6 pm, Thu-Sat 10 am - 8 pm, Sun 10 am - 3 pm",
    "Phone":"214-741-9424",
    "Website":"http://www.whichwich.com",
  },
  3:{
    "Restaurant":"Iron Cactus",
    "Address":"1520 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Mexican, Gluten-Free",
    "Distance": 0.1,
    "Hours":"Mon-Wed 11 am - 10 pm, Thu-Sat 11 am - 11pm, Sun 10 am - 10 pm",
    "Phone":"214-749-4766",
    "Website":"http://www.ironcactus.com",
  },
  4:{
    "Restaurant":"Pho Colonial",
    "Address":"1623 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Vietnamese",
    "Distance": 0.2,
    "Hours":"M-F 11 am - 9:30 pm",
    "Phone":"469-480-3059",
    "Website":"http://www.phocolonial.com",
  },
  5:{
    "Restaurant":"Dallas Fish Market",
    "Address":"1501 Main St. Dallas, TX 75202",
    "Price":"$$$",
    "Rating":"3 stars",
    "Tags":"Seafood, Sushi, Sake, Happy Hour",
    "Distance": 0.1,
    "Hours":"Lunch: Mon-Fri 11 am - 2 pm; Dinner: Mon-Thu 5 pm - 10 pm, Fri-Sat 5 pm - 11 pm, Sun 5 pm - 9 pm",
    "Phone":"214-744-3474",
    "Website":"http://www.dallasfishmarket.com",
  },
  6:{
    "Restaurant":"City Tavern",
    "Address":"1402 Main St. Dallas, TX 75202",
    "Price":"$$",
    "Rating":"3.5 stars",
    "Tags":"American (Traditional), Bars, Music Venues",
    "Distance": 0.09,
    "Hours":"Mon-Fri 11 am - 2 am, Sat-Sun 12 pm - 2 am",
    "Phone":"214-745-1402",
    "Website":"http://www.citytaverndowntown.com",
  },
  7:{
    "Restaurant":"Campisi's",
    "Address":"1520 Elm St. Ste 111, Dallas, TX 75201",
    "Price":"$$",
    "Rating":"3 stars",
    "Tags":"Italian, Pizza",
    "Distance": 0.2,
    "Hours":"Mon-Sat 10:30 am - 10 pm & Sun 11 am - 9 pm",
    "Phone":"214-752-0141",
    "Website":"http://www.campisis.us",
  },
  8:{
    "Restaurant":"Freshii",
    "Address":"1412 Main St. Ste 101, Dallas, 75202",
    "Price":"$",
    "Rating":"3 stars",
    "Tags":"Salad, Breakfast & Brunch, Gluten-free",
    "Distance": 1.0,
    "Hours":"Mon-Thu 8 am - 7 pm, Fri 8 am - 5 pm & Sat 10 am - 3 pm",
    "Phone":"214-748-6000",
    "Website":"https://freshii.com/us",
  },
  9:{
    "Restaurant":"Texas Spice",
    "Address":"555 S Lamar,Dallas, TX 75202",
    "Price":"$$",
    "Rating":"4 stars",
    "Tags":"American (New)",
    "Distance": .35,
    "Hours":"Lunch: Mon-Sun 6:30 am - 2 pm; Dinner 5pm - 10 pm",
    "Phone":"214-744-6664",
    "Website":"http://www.omnihotels.com/hotels/dallas/dining/texas-spice",
  }

};

    $scope.restaurantOrder = 'Distance';


  });

