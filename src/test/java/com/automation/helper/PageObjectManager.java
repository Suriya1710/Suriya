package com.automation.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactinsite.pom.BookAHotelPage;
import com.adactinsite.pom.LogInPage;
import com.adactinsite.pom.LogoutPage;
import com.adactinsite.pom.SearchHotelPage;
import com.adactinsite.pom.SelectHotelPage;

public class PageObjectManager {

	public WebDriver driver;

	private LogInPage login;
	private SearchHotelPage hotelpage;
	private SelectHotelPage selecthotel;
	private BookAHotelPage bookhotel;
	private LogoutPage logout;

	public PageObjectManager(WebDriver idriver) {

		this.driver = idriver;
		PageFactory.initElements(driver, this);

	}

	public LogInPage getLogin() {

		login = new LogInPage(driver);
		return login;

	}

	public SearchHotelPage gethotelpage() {

		hotelpage = new SearchHotelPage(driver);

		return hotelpage;

	}

	public SelectHotelPage getSelectHotelPage() {

		selecthotel = new SelectHotelPage(driver);

		return selecthotel;

	}

	public BookAHotelPage BookAHotelPage() {

		bookhotel = new BookAHotelPage(driver);

		return bookhotel;
	}

	public LogoutPage logout() {

		logout = new LogoutPage(driver);
		return logout;

	}

}
