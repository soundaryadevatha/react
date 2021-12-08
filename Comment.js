// 4) Create a component called Comment. It should have 1 input type as text 
//to enter ur name, one input type to enter your email, one input type as
// textarea to enter your comment and one button submit
// on clicking submit button, display a message in alert "your 
//comment has been submitted. waiting for moderator."style the component properly in App.css file.

import {Component} from "react";
class Comment extends Component{
	submit(){
		alert("your comment has been submitted. waiting for moderator.")
	}
	render(){
		return(
				<div className="comment">
				Enter your Name:<input type="text" name="username"/><br></br><br></br>
				EmailId:<input type="email" name="email"/><br></br><br></br>
				Enter your Comment:<br></br><textarea rows="7" cols="40"></textarea><br></br><br></br>
				<button onClick={this.submit}>Submit</button>
				</div>
			);
	}

}
export default Comment;