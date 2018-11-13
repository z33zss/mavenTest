package com.julong.entityBean;

public class UserBean {
	private Integer userid;     		//用户编号
	private String username;		//用户名称
	private char sex;				//用户性别
	private String age;				//用户年龄
	
	public UserBean() {
		super();
	}

	public UserBean(Integer userid, String username, char sex, String age) {
		this.userid = userid;
		this.username = username;
		this.sex = sex;
		this.age = age;
	}

	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public char getSex() {
		return sex;
	}
	public void setSex(char sex) {
		this.sex = sex;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "UserBean [userid=" + userid + ", username=" + username + ", sex=" + sex + ", age=" + age + "]";
	}
	
	
}
