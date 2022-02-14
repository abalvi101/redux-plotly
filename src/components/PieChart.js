import React from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';

const PieChart = ( ) => {
    const color = useSelector((store) => store.colorReducer)

    return (
        <Plot
            data = {[
                {
                    values: [color.red, color.blue, color.green],
                    labels: ['Rojo', 'Azul', 'Verde'],
                    marker: {
                        colors: ['rgb(255, 121, 121)', 'rgb(52, 123, 255)', 'rgb(85, 204, 105)']
                    },
                    type: 'pie',
                }
            ]}
            layout = {{
                width: 320,
                height: 320,
                title: "Gráfico circular"}
            }
        />
    )
}

export default PieChart;