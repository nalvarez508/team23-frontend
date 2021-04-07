import React, {Component} from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
import {dataTest} from './InventoryDropdown';

class InventoryLevel extends Component {
	render() {		
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            axisY: {
                title: "Quantity",
            },
            axisX: {
                title: "Week of Month",
                prefix: "W",
                interval: 1
            },
            data: [{
                type: "line",
                toolTipContent: "Week {x}: {y} units",
                dataPoints: dataTest
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
 
export default InventoryLevel;