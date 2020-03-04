package com.automation.helper;

public class FileReaderManager {

	private FileReaderManager() {

	}

	/*
	 * public static FileReaderManager getInstanc() {
	 * 
	 * 
	 * FileReaderManager fm=new FileReaderManager(); return fm; } public
	 * ConfigurationReader getConfig() throws Throwable { // TODO Auto-generated
	 * method stub ConfigurationReader cr=new ConfigurationReader(); return cr;
	 * 
	 * }
	 * 
	 * 
	 */

	public static FileReaderManager getInstance() {

		FileReaderManager helper = new FileReaderManager();
		return helper;

	}

	public ConfigurationReader getInstanceReader() throws Throwable {

		ConfigurationReader reader = new ConfigurationReader();
		return reader;

	}

}
