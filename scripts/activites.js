"use strict";

window.onload = init;

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienc d artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

function init() {
    //fill dropdown 
    fillDropdown();
    // Select category button
    const selectCategoryButton = document.getElementById("selectCategoryButton");
    selectCategoryButton.onclick = selectCategoryButtonOnClick;

    //Fill Details
     fillDetails();

    // Select activity 
    const selectActivityButton = document.getElementById("selectActivityButton");
    selectActivityButton.onclick = selectActivityButtonOnClick;

   

}

//Create a function to display dropdown
function fillDropdown() {
    const selectActivitySection = document.getElementById("selectActivitySection");
    selectActivitySection.style.visibility = "hidden";
    categoryDetailsOutput.style.visibility="hidden";
    

    const CategoriesList = document.getElementById("CategoriesList");
    let selectCategoryOption = document.createElement("option");
    selectCategoryOption.value = "";
    selectCategoryOption.textContent = "Select one activity";
    CategoriesList.appendChild(selectCategoryOption);

    let categoriesLength = categories.length;
    for (let i = 0; i < categoriesLength; i++) {
        let newOption = document.createElement("option");
        newOption.value = categories[i];
        newOption.textContent = categories[i];

        CategoriesList.appendChild(newOption);
    }
}

//Create Onclick Function for category btn
function selectCategoryButtonOnClick() {

    const activitiesList = document.getElementById("activitiesList");
   activitiesList.options.length = 0

    //Add default prompt.
    let selectActivityOption = document.createElement("option");
    selectActivityOption.value = "";
    selectActivityOption.textContent = "Select one activity";

    activitiesList.appendChild(selectActivityOption);

    let selectedCategory = getSelectedCategory();

    let categoryActivities = getActivitiesForCategory(activities, selectedCategory);

    //display the smaller set of activities to the second dropdown
    let categoryActivitiesLength = categoryActivities.length;

    for(let i = 0; i < categoryActivitiesLength ; i++){ 
        let newOption = document.createElement("option");
        newOption.value = categoryActivities[i].id; 
        newOption.textContent = categoryActivities[i].name;
        activitiesList.appendChild(newOption);
    }

    //make sure the result is visible.
    const selectActivitySection = document.getElementById("selectActivitySection");
    selectActivitySection.style.visibility = "visible";
}

function fillDetails(){

    //call category output section
    const categoryDetailsOutput = document.getElementById("categoryDetailsOutput");
    
   
}


function selectActivityButtonOnClick(){
    categoryDetailsOutput.style.visibility="visible"

}






function getActivityName(activities, name) {
    let Search = [];

    let activitiesNum = activities.length;
    for (let i = 0; i < activitiesNum; i++) {
        if (activities[i].name == name) {
            Search.push(activities[i])
        }
    }
    return Search


}

//this should take a full list of all activities, and a single cateogry name, 
//and return an array of only the activities that belong to that category.
function getActivitiesForCategory(activities, category){
    
    //todo: fix to return the search matches

    //Create Loop to find the activites of catergory name
    let activitesLength = activities.length;
    let categoryActivities = [];
    
     for(let i = 0; i < activitesLength; i++){
     if(activities[i].category == category){
        categoryActivities.push(activities[i]);
     }
      }
      return categoryActivities;

      
    }



function getSelectedCategory(){

    const CategoriesList = document.getElementById("CategoriesList");
    return CategoriesList.value;
}

// function fillDetails(){

//     const categoryDetailsOutput = document.getElementById("categoryDetailsOutput");
//     categoryDetailsOutput.style.display="hidden"
// }

// function selectActivityButtonOnClick(){
//     categoryDetailsOutput.style.display="visible"

// }