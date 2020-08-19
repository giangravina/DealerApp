import React from 'react'
import Room from './Car'

export default function CarList() {
    return (
        <div>
            hello from car list
        </div>
    )
}

// export default function CarList({rooms}) {
//     if (Room.length === 0){
//         return  (
//             <div className="empty-search">
//             <h3>unfortunately no rooms matched your search parameters</h3>
//             </div>
//         );
//     }
//     return (
//         <section className="roomslist">
//             <div className="roomlist-center">
//                 {
//                     FeaturedRooms.map(item=> {
//                         return <Room key={item.id} room={item} />;
//                     })}
//             </div>
//         </section>
//     );
// }
