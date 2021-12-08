// 2) create a user registration tag(we also call them components).
// the user registration will have username, password,
// fullname,dob,education, textarea to describe, radio to show is it male or female.
import {Component} from "react";
class UserRegistration extends Component{
	render(){
		return(
				<div className="UserRegistration">
				<h2>UserRegistration</h2>
				UserName:<input type="text" name="username"/><br></br><br></br>
				Password:<input type="password" name="password"/><br></br><br></br>
				FullName:<input type="text" name="fullname"/><br></br><br></br>
				DateOfBirth:<input type="date"/><br></br><br></br>
				<label for="education">Education:</label>
				<select name="education" id="education">
  					<option value="BTech">BTech</option>
  					<option value="Degree">Degree</option>
  					<option value="BBM">BBM</option>
  					<option value="Doctor">Doctor</option>
				</select><br></br><br></br>
				Description:<br></br><textarea rows="7" cols="40"></textarea><br></br><br></br>
				<input type="radio" value="Male" name="gender" /> Male<br></br>
        		<input type="radio" value="Female" name="gender" /> Female

				</div>
			);
	}

}
export default UserRegistration;