import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignmentMarks = [
        { id: 1, name: 'donate-today', marks: 45 },
        { id: 2, name: 'new-year-new-me', marks: 59 },
        { id: 3, name: 'developer-portfolio', marks: 52 },
        { id: 4, name: 'leader-board', marks: 56 },
        { id: 5, name: 'tea-house', marks: 58 },
        { id: 6, name: 'legal-solution', marks: 49 },
        { id: 7, name: 'Ai-Universe', marks: 36 },
        { id: 8, name: 'geometry-genius', marks: 48 }
      ];      
    return (
        <div className='w-9/12 h-4/5'>
            <h2 className='text-cyan-500 text-3xl text-center m-5'>Assignment marks here!!</h2>
           <AreaChart
           width={1300}
           height={300}
           data={assignmentMarks}
           >
            <Area dataKey="marks"></Area>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
           </AreaChart>
        </div>
    );
};

export default Statistics;