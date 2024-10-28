
import { Flat, } from '@alptugidin/react-circular-progress-bar'
import 'react-circular-progressbar/dist/styles.css';

const Prograssber = () => {
    return (
        <section>
            <h1 className='text-3xl pt-10 md:pt-20 md:text-5xl lg:text-7xl font-playfair font-bold text-center'>Our Prograssber</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 pt-10 pb-20 md:pb-32 md:pt-20 gap-32 max-w-4xl mx-auto'>
                <div>
                    <Flat
                        progress={90}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        text={'Match'}
                        showMiniCircle={true}
                        showValue={true}
                        sx={{
                            strokeColor: '#0284C7',
                            barWidth: 10,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '25' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 20,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#0284C7',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 6,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                    <h3 className='text-2xl md:text-3xl text-black font-bold font-playfair text-center mt-5'>Create 
                    Dress</h3>
                </div>
                <div>
                    <Flat
                        progress={70}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        text={'Match'}
                        showMiniCircle={true}
                        showValue={true}
                        sx={{
                            strokeColor: '#ff0000',
                            barWidth: 10,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 13,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#ff0000',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#16A34A',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                     <h3 className='text-2xl md:text-3xl text-black font-bold font-playfair text-center mt-5'>Sale 
                     Dress</h3>
                </div>
                <div>
                    <Flat
                        progress={30}
                        range={{ from: 0, to: 100 }}
                        sign={{ value: '%', position: 'end' }}
                        text={'Match'}
                        showMiniCircle={true}
                        showValue={true}
                        sx={{
                            strokeColor: '#16A34A',
                            barWidth: 10,
                            bgStrokeColor: '#ffffff',
                            bgColor: { value: '#000000', transparency: '20' },
                            shape: 'full',
                            strokeLinecap: 'round',
                            valueSize: 20,
                            valueWeight: 'bold',
                            valueColor: '#000000',
                            valueFamily: 'Trebuchet MS',
                            textSize: 13,
                            textWeight: 'bold',
                            textColor: '#16A34A',
                            textFamily: 'Trebuchet MS',
                            loadingTime: 1000,
                            miniCircleColor: '#ff0000',
                            miniCircleSize: 5,
                            valueAnimation: true,
                            intersectionEnabled: true
                        }}
                    />
                     <h3 className='text-2xl md:text-3xl text-black font-bold font-playfair text-center mt-5'>Store 
                     Dress</h3>
                </div>

            </div>
        </section>
    );
};

export default Prograssber;
