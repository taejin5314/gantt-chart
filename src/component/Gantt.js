import { ColumnDirective, ColumnsDirective, GanttComponent } from '@syncfusion/ej2-react-gantt';
import React from 'react';
import './Gantt.css';

function Gantt({ projectData }) {
  const taskValues = {
    id: 'id',
    name: 'name',
    startDate: 'start_date',
    endDate: 'end_date'
  };

  return (
    <div>
      <GanttComponent dataSource={projectData} taskFields={taskValues}>
        <ColumnsDirective>
          <ColumnDirective field="name" headerText="Task Name" headerTextAlign="Left"></ColumnDirective>
          <ColumnDirective field="start_date" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="end_date" format="dd-MMM-yy"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default Gantt;
