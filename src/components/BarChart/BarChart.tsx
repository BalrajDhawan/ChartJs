import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const BarChart = ({ className }: { className: string }) => {
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
    const labels = ['Jan', 'Feb', "Mar", 'Apr', 'May', 'Jun', 'Jul'];
    const data = {
    labels: labels,
    datasets: [{
        label: '',
        data: [65, 59, 80, 81, 100, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};
    const barPattern = {
        id: 'barPattern',
        beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
            const { ctx, chartArea: { top, bottom, height }, scales: { x,y } } = chart;
            ctx.save();
            const width = chart.getDatasetMeta(0).data[0].width;
            ctx.fillRect(x.getPixelForValue(0) - width/2, top/2, width, height/2 - 0.5)
            ctx.fillRect(x.getPixelForValue(4) - width/2, top, width, height - 0.5)
        }
    }

    return <Bar plugins={[barPattern]} className={className} width={'600px !important'} height={'150px !important'}  options={options} data={data} ></Bar>
}

export default BarChart;
