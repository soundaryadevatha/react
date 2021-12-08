import {Component} from "react";
class Greet extends Component{
		greeting()
		{
			var myDate = new Date();
    		var hrs = myDate.getHours();
    		var greet;
    		if (hrs < 12)
    			alert("Good Morning");
        	
   			else if (hrs >= 12 && hrs <= 17)
        		alert('Good Afternoon');
    		else if (hrs >= 17 && hrs <= 24)
        		alert('Good Evening');
        }
	render(){
		return(
		<div className="Login">
		<h2>Greeting</h2>
			<button onClick={this.greeting}>Greet</button>
		</div>
			);
	}
}
export default Greet;