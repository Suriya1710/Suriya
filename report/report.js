$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cucumbertask.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Enter The Username \"Blackstar17\" In UserName",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enter The Password \"Music17\" In PassWord",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 3642912300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blackstar17",
      "offset": 25
    }
  ],
  "location": "CucumberStepDefinition.user_Enter_The_Username_In_UserName(String)"
});
formatter.result({
  "duration": 354821600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music17",
      "offset": 25
    }
  ],
  "location": "CucumberStepDefinition.user_Enter_The_Password_In_PassWord(String)"
});
formatter.result({
  "duration": 204442300,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2328600800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Search And Select The Room And Details In The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-and-select-the-room-and-details-in-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SelectHotel"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Click The Search Button It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Location()"
});
formatter.result({
  "duration": 247980900,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 295552200,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 207680100,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 188533300,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 358851500,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 350208100,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 140351000,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 200240200,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Click_The_Search_Button_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1911841500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User Confirm The Room In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-confirm-the-room-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@ConfirmHotel"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User Click The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User Click The Continue Button It Navigates To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefinition.user_Click_The_Select_Button()"
});
formatter.result({
  "duration": 132736700,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinition.user_Click_The_Continue_Button_It_Navigates_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 1762011300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User LogOut In The My Itinerary Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-logout-in-the-my-itinerary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User Click The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefinition.user_Click_The_Logout_Button()"
});
formatter.result({
  "duration": 3958985400,
  "status": "passed"
});
});