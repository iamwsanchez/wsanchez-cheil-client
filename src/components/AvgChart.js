import React, { Component } from 'react';
import * as echarts from 'echarts';
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
echarts.use([SVGRenderer, CanvasRenderer]);

class AvgChart extends Component  {
    
    constructor (props) {
        super(props);
        this.propertyName = props.propertyName;
        this.chartContainerId = 'chart-container-' + props.propertyName;
        this.keys = props.keys;
        this.values = props.values;        
    }
    componentDidMount(){
        this.draw();
    }
    draw(){
        this.chartDom = document.getElementById(this.chartContainerId);    
        let myChart = echarts.init(this.chartDom, null, {
            width: 400,
            height: 400,
            renderer: 'svg'
          });
        let option;
        
        option = {
            title: {
                text:  this.propertyName.charAt(0).toUpperCase() + this.propertyName.slice(1),
                subtext: 'Graphical representation of ' + this.propertyName.charAt(0).toUpperCase() + this.propertyName.slice(1) + ' by Class'
              },          
            xAxis: {
                type: 'category',
                data: this.keys
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: this.values,
                    type: 'bar'
                }
            ]
        };
        
        option && myChart.setOption(option);
    }
    render(){
        return(
            <div id={this.chartContainerId} className='col s6'></div>
        )
    }
};

export default AvgChart;