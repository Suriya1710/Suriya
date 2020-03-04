package com.multiusers.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactinsite.baseclass.BaseClass;
import com.automation.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\multiusers\\featurefile", 
glue = "com\\multiusers\\stepdefinition",

plugin = {
		"html:Report/htmlreport.html", 
		"com.cucumber.listener.ExtentCucumberFormatter:Report/report.html",
		"json:Reports/jsonReport.json", 
		//"pretty"

},
//tags={"@Login,@SelectHotel,@ConfirmHotel,@BookTheRoom,@Logout"},
		dryRun = false, strict = true, monochrome = true)

public class MultiUsersRunner {
	
	public static WebDriver driver;

	@BeforeClass

	public static void setup() throws Throwable {

		String browser = FileReaderManager.getInstance().getInstanceReader().getBrowser();

		driver = BaseClass.getDriver(browser);

	}

	@AfterClass

	public static void close() {

		driver.close();
	}

	
	

}
