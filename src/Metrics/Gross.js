import React, {Component} from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'

class Gross extends Component {
 
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Expenses this Month "
			},
			axisY: {
				title: "Price in USD",
				prefix: "$"
			},
			axisX: {
				title: "Week of Month",
				prefix: "W",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: ${y}",
				dataPoints: [
					{ x: 1, y: 16300.24 },
					{ x: 2, y: 16509.70 },
					{ x: 3, y: 18431.56 },
					{ x: 4, y: 17198.35 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default Gross;