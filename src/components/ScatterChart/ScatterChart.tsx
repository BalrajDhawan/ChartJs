import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
)

export const ScatterChart = ({ className, enableCustomTooltip }: { className: string, enableCustomTooltip: boolean }) => {
    
    const footer = enableCustomTooltip ?
    (chart: any) => {
        const currIdx = chart[0].dataIndex;
        const value = chart[0].dataset.data[currIdx]
        let numElem = 1;
        if (currIdx+2 < chart[0].dataset.data.length && currIdx-2 >= 0) {
            chart[0].dataset.data[currIdx-2] - value > 0 && chart[0].dataset.data[currIdx-2] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx-1] - value > 0 && chart[0].dataset.data[currIdx-1] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx+1] - value > 0 && chart[0].dataset.data[currIdx+1] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx+2] - value > 0 && chart[0].dataset.data[currIdx+2] - value <= 10 ? numElem++ : numElem;
            return 'From point: '+ value + ', '+ numElem + ' are present in 10 meter range';
        }
        if (currIdx+4 < chart[0].dataset.data.length) {
            chart[0].dataset.data[currIdx+1] - value > 0 && chart[0].dataset.data[currIdx+1] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx+2] - value > 0 && chart[0].dataset.data[currIdx+2] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx+3] - value > 0 && chart[0].dataset.data[currIdx+3] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx+4] - value > 0 && chart[0].dataset.data[currIdx+4] - value <= 10 ? numElem++ : numElem;
            return 'From point: '+ value + ', '+ numElem + ' are present in 10 meter range';
        }
        if (currIdx-4 >= 0) {
            chart[0].dataset.data[currIdx-4] - value > 0 && chart[0].dataset.data[currIdx-4] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx-3] - value > 0 && chart[0].dataset.data[currIdx-3] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx-2] - value > 0 && chart[0].dataset.data[currIdx-2] - value <= 10 ? numElem++ : numElem;
            chart[0].dataset.data[currIdx-1] - value > 0 && chart[0].dataset.data[currIdx-1] - value <= 10 ? numElem++ : numElem;
            return 'From point: '+ value + ', '+ numElem + ' are present in 10 meter range';
        }
        return '';
    } :
    ()=>{};
    const options = {
        scales: {
            x: {
                display: false,
                type: 'linear',
                position: 'bottom'
            },
            y: {
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                footer: footer,
                }
            }
        }
  };
    const labels = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0];
    const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 66, 55, 77, 80, 88, 54, 53, 50, 67, 68, 69, 70, 72, 71, 50, 52, 54, 56, 80, 73, 63, 53, 82, 65,70,77,7,87,97,80,88,76,65,38,53,64,68,62,76,73,75,79],
        fill: false,
        pointStyle: 'circle',
        pointRadius: 5,
        pointBackgroundColor: 'rgb(47, 131, 157)',
        borderColor: 'rgb(47, 131, 157)',
        tension: 0.1
    }]
};

    return <Scatter className={className} width={'600px !important'} height={'150px !important'}  options={options as any} data={data} ></Scatter>
}

export default ScatterChart;
