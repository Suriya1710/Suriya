package com.automation.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class ConfigurationReader {

	public static Properties p;

	public ConfigurationReader() throws Throwable {

		File f = new File(
				"C:\\Eclipse\\CucumberProjects\\src\\test\\java\\com\\automation\\configuration\\configuration.properties");

		FileInputStream fis = new FileInputStream(f);

		p = new Properties();

		p.load(fis);

	}

	public String getBrowser() {
		String browser = p.getProperty("browser");
		return browser;
	}

	public String getUrl() {

		String url = p.getProperty("url");
		return url;
	}

	public String getDbUsername() {

		String username = p.getProperty("dbUserName");
		return username;

	}

	public String getDbPassword() {

		String password = p.getProperty("dbPassWord");
		return password;

	}

}
