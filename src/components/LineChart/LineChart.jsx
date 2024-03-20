import { LineChart as LChart, Line , XAxis , YAxis} from 'recharts';

const LineChart = () => {

    const marksdata = [
        { student: 1, mathMark: 85, physicsMark: 78, chemistryMark: 90 },
        { student: 2, mathMark: 72, physicsMark: 65, chemistryMark: 80 },
        { student: 3, mathMark: 90, physicsMark: 88, chemistryMark: 92 },
        { student: 4, mathMark: 65, physicsMark: 60, chemistryMark: 70 },
        { student: 5, mathMark: 78, physicsMark: 72, chemistryMark: 85 },
        { student: 6, mathMark: 88, physicsMark: 82, chemistryMark: 95 },
        { student: 7, mathMark: 92, physicsMark: 90, chemistryMark: 98 },
        { student: 8, mathMark: 70, physicsMark: 68, chemistryMark: 75 },
        { student: 9, mathMark: 83, physicsMark: 75, chemistryMark: 88 },
        { student: 10, mathMark: 79, physicsMark: 70, chemistryMark: 82 },
      ];

    return (
        <div>
            <LChart width={800} height={500} data={marksdata} >
                <Line dataKey="mathMark" stroke='red'></Line>
                <Line dataKey={'physicsMark'} stroke='green'></Line>
                <XAxis></XAxis>
            </LChart>
        </div>
    );
};

export default LineChart;