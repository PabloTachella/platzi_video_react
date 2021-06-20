import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Catergories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const App = () => {
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [] )

    console.log(videos)

    return(
        <div className="App">
            <Header />
            <Search />

            {videos.mylist?.lenght > 0 &&  //solo si mi lista es mayor a 0 renderiza esta seccion
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends?.map(item =>
                        <CarouselItem key={item.id} {...item} /> //al renderizado de carouselItem le paso el id del item y luego todos elementos que tiene item
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
}

export default App