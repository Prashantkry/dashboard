"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
    id: 'centerTextPlugin',
    beforeDraw: function (chart) {
        const { width, height, ctx } = chart;
        ctx.restore();
        // const fontSize = (height / 114).toFixed(2);
        const fontSize = "5px"
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = "middle";

        const text = ["Total", "123456"];
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const lineHeight = 25;
        const textY = height / 2;

        text.forEach((line, index) => {
            const textX = Math.round((width - ctx.measureText(line).width) / 2);
            ctx.fillStyle = 'black';
            ctx.fillText(line, textX, textY - ((text.length - 1) / 2 * lineHeight) + (index * lineHeight));
        });
        ctx.save();
    }
};

ChartJS.register(centerTextPlugin);

export const data = {
    datasets: [
        {
            data: [2, 3, 5],
            backgroundColor: [
                '#FFCB49',
                '#7464FF',
                '#4FD2B5',
            ],
            borderColor: [
                '#FFCB49',
                '#7464FF',
                '#4FD2B5',
            ],
            borderWidth: 1,
            cutout: '80%',
        },
    ],
};

const Chart = () => {
    return <Pie data={data} />;
}

export default Chart