package com.multiusers.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactinsite.baseclass.BaseClass;
import com.automation.helper.FileReaderManager;
import com.automation.helper.PageObjectManager;
import com.multiusers.runner.MultiUsersRunner;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MultiUsersStepDefinition extends BaseClass {

	public static WebDriver driver = MultiUsersRunner.driver;

	public static PageObjectManager pom = new PageObjectManager(driver);

	@Given("^Web Application Succesfully Launched$")
	public void web_Application_Succesfully_Launched() throws Throwable {

		System.out.println("Background");

	}

	@Before
	public static void beforehooks() {

		System.out.println("Before Hooks");

	}

	@Given("^User Launch The Adactin Application$")
	public void user_Launch_The_Adactin_Application() throws Throwable {
		String url = FileReaderManager.getInstance().getInstanceReader().getUrl();
		getURL(url);
System.out.println("Ok");
	}

	@When("^User Enter The Username \"([^\"]*)\" In UserName$")
	public void user_Enter_The_Username_In_UserName(String arg1) throws Throwable {

		inputValueElement(pom.getLogin().getUsername(), arg1);

	}

	@When("^User Enter The Password \"([^\"]*)\" In PassWord$")
	public void user_Enter_The_Password_In_PassWord(String arg1) throws Throwable {

		inputValueElement(pom.getLogin().getPassword(), arg1);

	}

	@Then("^Click The Login Button And It Navigates To The Search Hotel Page$")
	public void click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable {

		clickOnElement(pom.getLogin().getLogin());

	}

	@When("^User Select The Location$")
	public void user_Select_The_Location() throws Throwable {

		dropDown(pom.gethotelpage().getLocation(), "byValue", "Sydney");

	}

	@When("^User Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {

		dropDown(pom.gethotelpage().getHotel(), "byValue", "Hotel Creek");

	}

	@When("^User Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {

		dropDown(pom.gethotelpage().getRoomtype(), "byValue", "Standard");

	}

	@When("^User Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {

		dropDown(pom.gethotelpage().getNumberofrooms(), "byValue", "2");

	}

	@When("^User Select The Check In Date$")
	public void user_Select_The_Check_In_Date() throws Throwable {

		clear(pom.gethotelpage().getCheckin());

		inputValueElement(pom.gethotelpage().getCheckin(), "02/03/2020");

	}

	@When("^User Select The Check Out Date$")
	public void user_Select_The_Check_Out_Date() throws Throwable {

		clear(pom.gethotelpage().getCheckout());
		inputValueElement(pom.gethotelpage().getCheckout(), "03/03/2020");

	}

	@When("^User Select The Adults Per Room$")
	public void user_Select_The_Adults_Per_Room() throws Throwable {

		dropDown(pom.gethotelpage().getAdultroom(), "byValue", "1");

	}

	@When("^User Select The Children Per Room$")
	public void user_Select_The_Children_Per_Room() throws Throwable {

		dropDown(pom.gethotelpage().getChildroom(), "byValue", "1");

	}

	@Then("^User Click The Search Button It Navigates To The Select Hotel Page$")
	public void user_Click_The_Search_Button_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {

		clickOnElement(pom.gethotelpage().getSumbit());

	}

	@When("^User Click The Select Button$")
	public void user_Click_The_Select_Button() throws Throwable {

		clickOnElement(pom.getSelectHotelPage().getClickradiobtn());

	}

	@Then("^User Click The Continue Button It Navigates To The Book A Hotel Page$")
	public void user_Click_The_Continue_Button_It_Navigates_To_The_Book_A_Hotel_Page() throws Throwable {

		clickOnElement(pom.getSelectHotelPage().getContinuebtn());

	}

	@When("^User Enter The Valid First Name$")
	public void user_Enter_The_Valid_First_Name() throws Throwable {

		inputValueElement(pom.BookAHotelPage().getFirstname(), "Suriya");

	}

	@When("^User Enter The Valid Last Name$")
	public void user_Enter_The_Valid_Last_Name() throws Throwable {

		inputValueElement(pom.BookAHotelPage().getLastname(), "Veeran");

	}

	@When("^User Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {

		inputValueElement(pom.BookAHotelPage().getAddress(), "No 221B BakerStreet,Gotham City,Washington Dc");

	}

	@When("^User Enter The Valid Credit Card Number$")
	public void user_Enter_The_Valid_Credit_Card_Number() throws Throwable {

		inputValueElement(pom.BookAHotelPage().getCardnum(), "12345678900987654");

	}

	@When("^User Choose The Credit Card Type$")
	public void user_Choose_The_Credit_Card_Type() throws Throwable {

		dropDown(pom.BookAHotelPage().getCardtype(), "byValue", "VISA");

	}

	@When("^User Select The Select Month In The Expiry Date Box$")
	public void user_Select_The_Select_Month_In_The_Expiry_Date_Box() throws Throwable {

		dropDown(pom.BookAHotelPage().getCardExpMonth(), "byVisibleText", "October");

	}

	@When("^User Select The Select Year In The Expiry Date Box$")
	public void user_Select_The_Select_Year_In_The_Expiry_Date_Box() throws Throwable {

		dropDown(pom.BookAHotelPage().getCardExpYear(), "byValue", "2022");

	}

	@When("^User Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {

		inputValueElement(pom.BookAHotelPage().getCcvno(), "1234");

	}

	@Then("^User Click The Book Now Button It Navigates To The Booking Confirmation Page$")
	public void user_Click_The_Book_Now_Button_It_Navigates_To_The_Booking_Confirmation_Page() throws Throwable {

		clickOnElement(pom.BookAHotelPage().getBooknow());

	}

	@Then("^User Click The Logout Button$")
	public void user_Click_The_Logout_Button() throws Throwable {

		Thread.sleep(3000);
		clickOnElement(pom.logout().getLogout());
System.out.println("Scenario");
		
	}

	@After
	public static void afterHooks() {

		System.out.println("After Hooks");

	}

}
