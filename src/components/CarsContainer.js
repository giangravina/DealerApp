import React from 'react';
import CarFilter from './CarFilter';
import CarList from './CarList';
import {withCarConsumer} from '../context';
import Loading from './Loading';

function CarsContainer({context}){
const {loading, sortedRooms, rooms} = context;
if(loading){
                        return <Loading/>
                    }
                    return  (
                    <>
                        hello from cars container
                        <CarFilter rooms={rooms}/>
                        <CarList rooms={sortedRooms} />
                    </>
                    );
}


export default withCarConsumer(CarsContainer)




// import React from 'react';
// import CarFilter from './CarFilter';
// import CarList from './CarList';
// import {CarConsumer} from '../context';
// import Loading from './Loading';

// export default function CarsContainer() {
//     return (
//         <CarConsumer>
//             {value => {
//                 const { loading,sortedRooms,rooms } = value
//                 if(loading){
//                     return <Loading/>
//                 }
//                 return  (
//                 <div>
//                     hello from cars container
//                     <CarFilter rooms={rooms}/>
//                     <CarList rooms={sortedRooms} />
//                 </div>
//                 );
//             }}
//             </CarConsumer>
//     );
// }
