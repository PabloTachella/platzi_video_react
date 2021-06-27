import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './routes/App'

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
        {
          "id": 2,
          "slug": "tvshow-2",
          "title" : "Big Buck Bunny",
          "type": "Scripted",
          "language": "English",
          "year": 2009,
          "contentRating": "16+",
          "duration": 164,
          "cover" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
          "source": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
          "id": 3,
          "slug": "tvshow-3",
          "title" : "Elephant Dream",
          "type": "Adventure",
          "language": "English",
          "year": 2002,
          "contentRating": "16+",
          "duration": 137,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
          "description" : "The first Blender Open Movie from 2006",
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          "id": 4,
          "slug": "tvshow-4",
          "title" : "For Bigger Blazes",
          "type": "Comedy",
          "language": "English",
          "year": 2014,
          "contentRating": "16+",
          "duration": 163,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
          "description" : "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
        {
          "id": 5,
          "slug": "tvshow-5",
          "title" : "For Bigger Escape",
          "type": "Scripted",
          "language": "English",
          "year": 2014,
          "contentRating": "16+",
          "duration": 194,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
          "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
        {
          "id": 6,
          "slug": "tvshow-6",
          "title" : "For Bigger Fun",
          "type": "Scripted",
          "language": "English",
          "year": 2017,
          "contentRating": "16+",
          "duration": 124,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
          "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        },
        {
          "id": 7,
          "slug": "tvshow-7",
          "title" : "For Bigger Joyrides",
          "type": "Drama",
          "language": "English",
          "year": 2011,
          "contentRating": "16+",
          "duration": 179,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
          "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        }
    ],
    "originals": [
        {
          "id": 8,
          "slug": "tvshow-8",
          "title" : "For Bigger Meltdowns",
          "type": "Action",
          "language": "English",
          "year": 2012,
          "contentRating": "16+",
          "duration": 148,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
          "description" :"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.", 
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        },
        {
          "id": 9,
          "slug": "tvshow-9",
          "title" : "Sintel",
          "type": "Action",
          "language": "English",
          "year": 2019,
          "contentRating": "16+",
          "duration": 128,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
          "description" : "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        },
        {
          "id": 10,
          "slug": "tvshow-10",
          "title" : "Subaru Outback On Street And Dirt",
          "type": "Animation",
          "language": "English",
          "year": 2011,
          "contentRating": "16+",
          "duration": 346,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
          "description" : "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
        },
        {
          "id": 11,
          "slug": "tvshow-11",
          "title" : "Tears of Steel",
          "type": "War",
          "language": "English",
          "year": 2015,
          "contentRating": "16+",
          "duration": 226,
          "cover": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
          "description" : "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org", 
          "source" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        },
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  
  
const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)