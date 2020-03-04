$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("multiusers.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Enter The Username \"\u003cusername\u003e\" In UserName",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter The Password \"\u003cpassword\u003e\" In PassWord",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;1"
    },
    {
      "cells": [
        "Blackstar1710",
        "Music17"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2"
    },
    {
      "cells": [
        "Blackstar17",
        "Music17"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13075800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web Application Succesfully Launched",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiUsersStepDefinition.web_Application_Succesfully_Launched()"
});
formatter.result({
  "duration": 233194500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Enter The Username \"Blackstar1710\" In UserName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter The Password \"Music17\" In PassWord",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 4259079900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blackstar1710",
      "offset": 25
    }
  ],
  "location": "MultiUsersStepDefinition.user_Enter_The_Username_In_UserName(String)"
});
formatter.result({
  "duration": 428753600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music17",
      "offset": 25
    }
  ],
  "location": "MultiUsersStepDefinition.user_Enter_The_Password_In_PassWord(String)"
});
formatter.result({
  "duration": 243060200,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1177969300,
  "status": "passed"
});
formatter.after({
  "duration": 259100,
  "status": "passed"
});
formatter.before({
  "duration": 222500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web Application Succesfully Launched",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiUsersStepDefinition.web_Application_Succesfully_Launched()"
});
formatter.result({
  "duration": 130200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Enter The Username \"Blackstar17\" In UserName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter The Password \"Music17\" In PassWord",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 941980400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blackstar17",
      "offset": 25
    }
  ],
  "location": "MultiUsersStepDefinition.user_Enter_The_Username_In_UserName(String)"
});
formatter.result({
  "duration": 353633000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music17",
      "offset": 25
    }
  ],
  "location": "MultiUsersStepDefinition.user_Enter_The_Password_In_PassWord(String)"
});
formatter.result({
  "duration": 256462200,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1950646000,
  "status": "passed"
});
formatter.after({
  "duration": 141600,
  "status": "passed"
});
formatter.before({
  "duration": 144000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web Application Succesfully Launched",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiUsersStepDefinition.web_Application_Succesfully_Launched()"
});
formatter.result({
  "duration": 101200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Search And Select The Room And Details In The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-and-select-the-room-and-details-in-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@SelectHotel"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Click The Search Button It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Location()"
});
formatter.result({
  "duration": 430584300,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 320612200,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 307529100,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 275031900,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 455838100,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 487478800,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 262232400,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 352353700,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Click_The_Search_Button_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1986660900,
  "status": "passed"
});
formatter.after({
  "duration": 167200,
  "status": "passed"
});
formatter.before({
  "duration": 143900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web Application Succesfully Launched",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiUsersStepDefinition.web_Application_Succesfully_Launched()"
});
formatter.result({
  "duration": 108600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User Confirm The Room In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-confirm-the-room-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@ConfirmHotel"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User Click The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User Click The Continue Button It Navigates To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Click_The_Select_Button()"
});
formatter.result({
  "duration": 182864500,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Click_The_Continue_Button_It_Navigates_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 1674075000,
  "status": "passed"
});
formatter.after({
  "duration": 135800,
  "status": "passed"
});
formatter.before({
  "duration": 146300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web Application Succesfully Launched",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiUsersStepDefinition.web_Application_Succesfully_Launched()"
});
formatter.result({
  "duration": 144100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User Book The Room And Payment Details In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-the-room-and-payment-details-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@BookTheRoom"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User Enter The Valid First Name",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User Enter The Valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Enter The Valid Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Choose The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Select The Select Month In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User Select The Select Year In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User Click The Book Now Button It Navigates To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Enter_The_Valid_First_Name()"
});
formatter.result({
  "duration": 388392100,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Enter_The_Valid_Last_Name()"
});
formatter.result({
  "duration": 290472200,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 1012293900,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Enter_The_Valid_Credit_Card_Number()"
});
formatter.result({
  "duration": 640716300,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Choose_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 355239500,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Select_Month_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 365717900,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Select_The_Select_Year_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 300995800,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 276282200,
  "status": "passed"
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Click_The_Book_Now_Button_It_Navigates_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 159475200,
  "status": "passed"
});
formatter.after({
  "duration": 125800,
  "status": "passed"
});
formatter.before({
  "duration": 199600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Web Application Succesfully Launched",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiUsersStepDefinition.web_Application_Succesfully_Launched()"
});
formatter.result({
  "duration": 130300,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User LogOut In The My Itinerary Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-logout-in-the-my-itinerary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User Click The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiUsersStepDefinition.user_Click_The_Logout_Button()"
});
formatter.result({
  "duration": 5126727100,
  "status": "passed"
});
formatter.after({
  "duration": 113500,
  "status": "passed"
});
});