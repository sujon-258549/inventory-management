import { Link } from 'react-router-dom';
import UseAllsupervisor from '../customhuk/UseAlluseperivsor';
import UseAllworker from '../customhuk/UseAllworker';
import Usemarketingget from '../customhuk/Usemarketingget';
import './Sideber.css';
import ReactECharts from 'echarts-for-react';
import { useState, useEffect } from 'react';
import useAdmin from '../customhuk/UseAdmin';
import UseUserrole from '../customhuk/UseUserrole';

const SideberHome = () => {
    const [isAdmin] = useAdmin();
    const { allmarketing = [] } = Usemarketingget();
    const { allsupervisor = [] } = UseAllsupervisor();
    const { allworker = [] } = UseAllworker();

    const [isUserrole] = UseUserrole();
    console.log(isUserrole);

    // Set up chart options with initial empty data
    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'User Statistics',
            subtext: 'Dynamic Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 10,
            left: 'center',
            data: ['Supervisors', 'Workers', 'Sellers']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                data: [],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    });

    // Update chart options when data changes
    useEffect(() => {
        setChartOptions((prevOptions) => ({
            ...prevOptions,
            series: [
                {
                    ...prevOptions.series[0],
                    data: [
                        { value: allsupervisor.length + 1, name: 'Supervisors' },
                        { value: allworker.length + 1, name: 'Workers' },
                        { value: allmarketing.length + 1, name: 'Sellers' },
                    ]
                }
            ]
        }));
    }, [allmarketing, allsupervisor, allworker]);

    // Define categories and links dynamically for cards
    const categories = [
        { title: 'Total Supervisor', data: allsupervisor, link: '/dashboard/supervisor' },
        { title: 'Total Worker', data: allworker, link: '/dashboard/worker' },
        { title: 'Total Seller', data: allmarketing, link: '/dashboard/marketing' },
    ];

    return (
        <div className='pb-10'>
            <div className='min-h-96 walcome flex justify-center items-center'>
                <div>
                    <h1
                        className="text-4xl md:text-6xl pt-20 uppercase md:pt-40 text-black font-playfair font-extrabold"
                        style={{ textShadow: '1px 1px 10px yellow' }}
                    >
                        {isUserrole?.name}
                    </h1>
                    <h1
                        className="text-3xl md:text-4xl  uppercase text-center text-black font-playfair font-extrabold"
                        style={{ textShadow: '1px 1px 10px yellow' }}
                    >
                       Role : {isUserrole?.role}
                    </h1>
                </div>
            </div>

            {isAdmin && (
                <>
                    <ReactECharts option={chartOptions} />

                    <div className="flex gap-5 justify-center flex-wrap">
                        {categories.map((category, index) => (
                            <Link to={category.link} key={index}>
                                <div className="card">
                                    <p>{category.title}</p>
                                    <span>{category.data.length + 1}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SideberHome;
