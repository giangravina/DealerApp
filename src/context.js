import React, { Component } from 'react';
import items from './data';

const CarContext = React.createContext();
// <CarContext.Provider value={'hello'}

export default class CarProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };
    //getData

    componentDidMount(){
        //this.getData
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading: false
        })

        }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields,images,id};
            return room;

        });
        return tempItems;
    }

    getRoom = (slug) =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };



    render() {
        return <CarContext.Provider value={{...this.state, getRoom:this.getRoom }}>
            {this.props.children}
        </CarContext.Provider>;
    }
}

const CarConsumer = CarContext.Consumer;

export{ CarProvider,CarConsumer,CarContext };