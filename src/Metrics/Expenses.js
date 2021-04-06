import React, {Component} from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'

class Expenses extends Component {
 
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
					{ x: 1, y: 8013.21 },
					{ x: 2, y: 7290.70 },
					{ x: 3, y: 9946.58 },
					{ x: 4, y: 8700.33 }
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
 
export default Expenses;