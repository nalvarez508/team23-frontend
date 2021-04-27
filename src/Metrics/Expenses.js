import React, {Component} from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'


var dataPoints = [];
class Expenses extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			x: [],
			y: []
		}
	}


	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Profit this Year "
			},
			axisY: {
				title: "Price in USD",
				prefix: "$"
			},
			axisX: {
				title: "Month of Year",
				prefix: "M",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Month {x}: ${y}",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	componentDidMount(){
		var chart = this.chart;
		const url = "http://localhost:8080/getHeaders"
		return fetch(url, {
			method: 'GET',
			mode: 'cors',
			headers: new Headers({
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Access-Control-Allow-Origin": "*"
			}),
		})
		.then(response => response.json())
		.then((responseText) => {
			console.log(JSON.stringify(responseText));
			this.setState({
				data: JSON.stringify(responseText)//JSON.stringify(responseText)
			})
			var it = this.state.data;
			var token = it.replace("access_token", '').replace("refresh_token", '').replace("realm_id", '');
			token = token.replace(/[""]/g, '').replace(":", '').replace(":", '').replace(":", '').replace(/[{}]/g, '');
			var splitToken = token.split(",");
			var access = splitToken[0];
			var id = splitToken[2];
			

			fetch("http://localhost:8080/getAllInvoices", {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "access_token": access,
            "realm_id": id        
            }),
            })
            .then(response => response.json())
            .then((json) => {
				for (var i=0; i<json.length; i++){
					dataPoints.push({
						x: json[i].month,
						y: json[i].value
					});
				}
				chart.render();
            })
		});
		
		
	}
}



 
export default Expenses;