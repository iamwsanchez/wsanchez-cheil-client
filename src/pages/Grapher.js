import React, { Component } from 'react';
import * as echarts from 'echarts';
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import CarsService from '../services/cars-service'

echarts.use([SVGRenderer, CanvasRenderer]);

class Grapher extends Component {
    constructor(props){
        super(props)
        this.plotGraph = this.plotGraph.bind(this);
        this.state = {
            
        }
    }
    componentDidMount(){
        this.plotGraph();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.audio !== this.props.audio);
    }
    componentDidUpdate() {
        
    }
    plotGraph() {
        var years = [];
        var quantities = [];
        CarsService.getAll().then(({ data }) => {
            years = data
                    .map(dataItem => dataItem.Year) // get all years
                    .filter((year, index, array) => array.indexOf(year) === index); // filter out duplicates
          
            quantities = years
                    .map(year => data.filter(item => item.Year === year).length);

                    // Create the echarts instance
                    var chartDom = document.getElementById('chart-container');
                    var myChart = echarts.init(chartDom, null, {
                        width: 600,
                        height: 400,
                        renderer: 'svg'
                      });
                    var option;
                    
                    option = {
                        title: {
                            text: 'Vehículos por año',
                            subtext: 'Conteo y representación gráfica de vehículos por año'
                          },          
                        xAxis: {
                            type: 'category',
                            data: years
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                data: quantities,
                                type: 'bar'
                            }
                        ]
                    };
                    
                    option && myChart.setOption(option);

        });

    }
    render(){
        return(
            <>
                <div id="chart-container"></div>
            </>
        )
    }
}

export default Grapher;