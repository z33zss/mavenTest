package com.julong.web;

import java.io.Console;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.julong.entityBean.UserBean;
import com.julong.service.UserService;

@Controller
public class UserController {
	@Resource
	private UserService serviceImp;
	
	@RequestMapping("/sel")
	public @ResponseBody Map<String,Object> selAll(@RequestParam Integer userid,@RequestParam String username,HttpServletRequest request,HttpServletResponse response){
		UserBean user=new UserBean();
		if (userid!=null && !"".equals(userid)) {
			user.setUserid(userid);
		}
		if (username!=null && !"".equals(username)) {
			user.setUsername(username);
		}
		List<UserBean> list=serviceImp.selAll(user);
		for(UserBean userlist:list) {
			System.out.println(userlist);
		}
		Map<String,Object> map=new HashMap<String,Object>();
		if(list.size()>0) {
			map.put("list", list);
		}else {
			map.put("msg", "用户不存在");
		}
		return map;
	}
}
