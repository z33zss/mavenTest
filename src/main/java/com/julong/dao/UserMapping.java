package com.julong.dao;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.julong.entityBean.UserBean;

@Repository
public interface UserMapping {
	public List<UserBean> selAll(UserBean user);
}
