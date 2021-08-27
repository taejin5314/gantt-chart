import React, { useState } from 'react';
import TimeLine from 'react-gantt-timeline';

let d1 = new Date(2021);
let d2 = new Date();
d2.setDate(d2.getDate() + 5);
let d3 = new Date();
d3.setDate(d3.getDate() + 8);
let d4 = new Date();
d4.setDate(d4.getDate() + 20);
let d5 = new Date();
d5.setDate(23);
let d6 = new Date();

console.log(d5, d6);

const tasks = [
  {
    id: '1',
    name: 'Task 1',
    start: new Date(2021, 11, 1),
    end: new Date(2021, 11, 3)
  },
  {
    id: '2',
    name: 'Task 2',
    start: new Date(2021, 10, 16),
    end: new Date(2021, 10, 30)
  },
  {
    id: '3',
    name: 'Task 4',
    start: new Date(2021, 10, 29),
    end: new Date(2021, 10, 30)
  },
  {
    id: '4',
    name: 'Task 5',
    start: new Date(2021, 10, 30),
    end: new Date(2021, 11, 17)
  }
];

function GanttTimeline() {
  const [state, setState] = useState({ data: tasks, links: [], selectedItem: null });

  const genID = () => {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
  };

  const createLink = (start, end) => {
    return {
      id: genID(),
      start: start.task.id,
      end: end.task.id
    };
  };
  const onUpdateTask = (item, props) => {
    item.start = props.start ? props.start : item.start;
    item.end = props.end ? props.end : item.end;
    item.name = props.name ? props.name : item.name;
    setState({ data: [...state.data] });
  };
  const onCreateLink = (item) => {
    let newLink = createLink(item.start, item.end);
    setState({
      links: [...state.links, newLink],
      selectedItem: newLink
    });
  };
  const onSelectItem = (item) => {
    console.log(`Select Item ${item}`);
    setState({ selectedItem: item });
  };

  return (
    <div>
      <TimeLine data={state.data} links={state.links} onUpdateTask={onUpdateTask} onCreateLink={onCreateLink} onSelectItem={onSelectItem} selectedItem={state.selectedItem} />
    </div>
  );
}

export default GanttTimeline;
