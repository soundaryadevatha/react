// 5) Create a Login component. The login component should 
// have a link to reset password and forgot password.
//  The login compoent should have 2 input , 
//  one for username and other for password.
import {Component} from "react";
class LoginComponent extends Component{
	render(){
		return(
		<div className="Login">
			UserName:<input type="text" name="username"/><br></br>
			Password:<input type="password" name="password"/>
			<a href="forgot password.html">forgot password</a><br></br>
			<a href="reset password.html">reset password</a>
		</div>
			);
	}
}
export default LoginComponent;