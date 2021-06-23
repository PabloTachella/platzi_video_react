import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import Categories from '../components/Catergories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initialState'

const Home = () => {
    const initialState = useInitialState(API)

    return initialState.length === 0 ? <h1>...Loading</h1> : (
        <> 
            <Search />

            {initialState.mylist.lenght > 0 &&  //solo si mi lista es mayor a 0 renderiza esta seccion
                <Categories title="Mi Lista">
                    <Carousel>
                        {initialState.mylist.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} /> //al renderizado de carouselItem le paso el id del item y luego todos elementos que tiene item
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {initialState.originals.map(item => 
                        <CarouselItem key={item.id} {...item} />
                        )}
                </Carousel>
            </Categories>
        </>
    )
}

export default Home