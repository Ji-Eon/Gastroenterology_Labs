import React from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';

const getListData = (value: Dayjs) => {
    let listData: { type: string; content: string }[] = [];
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'Research Presentation' },
          { type: 'success', content: 'Team Meeting' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'Client Review' },
          { type: 'success', content: 'Project Deadline' },
          { type: 'error', content: 'System Maintenance' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'Quarterly Report' },
          { type: 'success', content: 'Team Building Activity' },
          { type: 'error', content: 'Urgent: Policy Update' },
        ];
        break;
      default:
    }
    return listData || [];
  };

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarComponent: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};

export default CalendarComponent;