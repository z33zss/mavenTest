<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script src="js/jquery-1.10.2.min.js"></script>
<body>
<table border="1">
	<tr>
		<td colspan="4">
			<form id="formdatas">
				用户编号：<input type="text" placeholder="请输入用户编号" name="userid">
				用户名称：<input type="text" placeholder="请输入用户名称" name="username">
				<button onclick="show()">查询</button>
			</form>
		</td>
	</tr>
	<tr>
		<th>用户编号</th>
		<th>用户名称</th>
		<th>用户性别</th>
		<th>用户年龄</th>
	</tr>
	<tbody id="tby"></tbody>
</table>
</body>
<script type="text/javascript">
	window.onload=show()
	function show(){
		alert("3333333333333")
		alert($("[name='userid']").val())
		alert($("[name='username']").val())
		$.ajax({
			type:"post",
			url:"sel",
			dataType:"json",
			data:{
				"userid":$("[name='userid']").val(),
				"username":$("[name='username']").val() 
				//$("#formdata").serialize();
			},
			success:function(data){
				$("#tby").html("");
				$.each(data.list,function(index,obj){
					var str="<tr><td>"+obj.userid+"</td><td>"
					+obj.username+"</td><td>"
					+obj.sex+"</td><td>"
					+obj.age+"</td></tr>";
					$("#tby").append(str);
				})
				
			}
		})
	}
</script>
</html>
