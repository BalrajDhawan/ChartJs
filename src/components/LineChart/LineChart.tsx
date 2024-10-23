import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales
)

export const LineChart = ({ className }:{ className: string}) => {
    const options = {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
    const labels = ['Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat'];
    const data = {
    labels: labels,
    datasets: [
    {
        data: [0,0,0,0,0,0,0,0,0,0,0,0, 59, 0, 0, 56, 0, 50, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 59, 0, 0, 56, 0, 50, 0,0,0,0],
        fill: false,
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointRadius: 4,
        tension: 0.1
    },
    {
        data: [65, 59, 62, 61, 56, 55, 50, 60, 65, 59, 62, 61, 56, 55, 50, 60, 65, 59, 62, 61, 56, 55, 50, 60, 65, 59, 62, 61, 56, 55, 50, 60, 65, 59, 62, 61, 56, 55, 50, 60, 65, 59, 62, 61, 56, 55, 50, 60, 65, 59, 62, 61, 56, 55, 50, 60],
        fill: true,
        borderColor: 'rgb(13,153,255)',
        backgroundColor: 'rgb(200,224,254)',
        pointBackgroundColor: 'rgb(13,153,255)',
        pointRadius: 4,
        tension: 0.1
    }]
};
    return <Line className={className} options={options as any} width={'600px !important'} height={'150px !important'} data={data} ></Line>
}

export default LineChart;
