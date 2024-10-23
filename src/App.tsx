import { useState } from 'react';
import ModalViewer from './components/ModalViewer/ModalViewer'; // Assuming the component is in the same directory
import { Button } from '@mui/material';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import LineChart from './components/LineChart/LineChart';
import BarChart from './components/BarChart/BarChart';
import ScatterChart from './components/ScatterChart/ScatterChart';
import MultiChart from './components/MultiChart/MultiChart';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleActionClick = () => {
    alert('Action clicked!');
    handleCloseModal(); // Close modal after action
  };

  return (
    <div className='d-flex justify-content-center w-100dvw'>
      <Button variant="contained" onClick={handleOpenModal}>
        Click Me
      </Button>

      <ModalViewer
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Graphs using Chart.js"
        actions={[]}
      >
        <div className='d-flex flex-column grid-container'>
          <p className='m-0 border-end-0 border-radius border-bottom-1 grid-item'>Line Chart</p>
          <LineChart className={'border-1 border-radius'}></LineChart>
          <p className='m-0 border-end-0 border-radius border-bottom-1 grid-item'>Bar Chart</p>
          <BarChart className={'border-1 border-radius'}></BarChart>
          <p className='m-0 border-end-0 border-radius border-bottom-1 grid-item'>Scatter Chart</p>
          <ScatterChart className={'border-1 border-radius'} enableCustomTooltip={false}></ScatterChart>
          <p className='m-0 border-end-0 border-radius border-bottom-1 grid-item'>Multi Chart with combined hover for multiple dataPoints</p>
          <ScatterChart className={'border-1 border-radius'} enableCustomTooltip={true} ></ScatterChart>
        </div>
      </ModalViewer>
    </div>
  );
};

export default App;
