import React from 'react';
import { projectData } from './data';
import Gantt from './component/Gantt';
import Frappe from './component/Frappe';
import GanttTimeline from './component/GanttTimeline';

function App() {
  return (
    <div>
      <Gantt projectData={projectData} />;
      <Frappe />
      <GanttTimeline />
    </div>
  );
}

export default App;
