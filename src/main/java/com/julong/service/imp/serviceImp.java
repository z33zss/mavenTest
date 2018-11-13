package com.julong.service.imp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.julong.dao.UserMapping;
import com.julong.entityBean.UserBean;
import com.julong.service.UserService;
@Service
public class serviceImp implements UserService{
	@Resource
	private UserMapping userMapping;
	@Override
	public List<UserBean> selAll(UserBean user) {
		return userMapping.selAll(user);
	}

}
