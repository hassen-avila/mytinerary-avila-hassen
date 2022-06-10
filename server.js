const express=require('express')
const app= express()

const PORT = 4000

app.set('port',PORT)

app.get('/', (req, res)=>{
    res.json(
        {
            "events": [
            {
            "id":1, 
            "name":"Paris",
            "country": "France", 
            "img":"https://www.collinsdictionary.com/images/full/france_396753979_1000.jpg",
            "description":"Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city."
            },
            {
            "id":2,
            "name":"Madrid",
            "country": "Spain", 
            "img":"https://universaleduhub.com/wp-content/uploads/2020/11/English-in-Spain-picture.jpg",
            "description":"Madrid, cheerful and vibrant at all hours, is famous for being an open city with all kinds of people from anywhere in the world."
            },
            {
            "id":3, 
            "name":"Chicago", 
            "country": "United State", 
            "img":"https://www.planetware.com/photos-large/USNY/usa-best-places-chicago.jpg",
            "description":"Chicago, the Windy City as it is often called, lies along the shores of Lake Michigan. Known for its vibrant arts scene, numerous cultural attractions, excellent shopping, and interesting architecture, this city attracts visitors from the US and around the globe."
            },
            {
            "id":4, 
            "name":"The Palace Museum", 
            "country": "China", 
            "img":"https://dam.ngenespanol.com/wp-content/uploads/2019/09/China-70-anos-p.jpg",
            "description":"The Palace Museum is one of the worlds most renowned cultural heritage sites. As the largest and the best-preserved wooden imperial architecture complex in the world, it served as the home of 24 emperors during the Ming and Qing dynasties."
            },
            {
            "id":5, 
            "name":"Rome", 
            "country": "Italy", 
            "img":"https://www.caracteristicas.co/wp-content/uploads/2016/06/civilizacion-romana-e1558669365322.jpg",
            "description":"Rome is a fabulous mix of history, archeology, art, religion and religious culture and delicious food; and while it certainly is the most popular place to visit in Italy, its also a city that has remained true to itself."
            },  
            {
            "id":6, 
            "name":"Ankara", 
            "country": "Turkey", 
            "img":"https://www.coe.int/documents/204503/67779268/Ankara+-+Turkey/28737cb6-ecbf-2206-b466-3e7255a210f5?t=1592323334000",
            "description":"The city of Ankara is the capital of Turkey and one of Turkeys most diverse tourist destinations. It has many historical sites, such as museums and entertainment parks. You can spend fun and entertainment moments with your family and friends in Ankara as the city has many wonderful tourist attractions."
            },
            {
            "id":7, 
            "name":"Mexico City", 
            "country": "Mexico", 
            "img":"http://noticias.unsam.edu.ar/wp-content/uploads/2019/08/metropolitan-cathedral-zocalo-mexico-city.jpg_610108952.jpg",
            "description":"The city boasts tremendous cultural activities, including the much-visited National Museum of Anthropology, the University Museum of Contemporary Art, and more unusual centers like the Museum of Light, the Chocolate Museum and the Tattoo Museum, with exhibitions to suit all tastes."
            },
            {
            "id":8, 
            "name":"Bangkok", 
            "country": "Thailand", 
            "img":"https://iflr.com/Media/images/iflr/may-2020/bangkok.jpg",
            "description":"Bangkok has attracted millions of visitors annually for decades, offering tourists an incredible experience of cultural tradition-meets-modernity. Its got world-class food, stunning historical landmarks, and some of the best hospitality around the globe."
            },
            {
            "id":9, 
            "name":"Berlin", 
            "country": "Germany", 
            "img":"https://cdn.cnn.com/cnnnext/dam/assets/170706112840-germany.jpg",
            "description":"Berlin is the ideal place for a city break in Europe. Ticking all the boxes, the buzzing metropolis boasts a killer nightlife scene, amazing local food, a rich history, world famous beer and some of the most remarkable sights and museums in the world."
            },
            {
            "id":10, 
            "name":"London", 
            "country": "United Kingdom", 
            "img":"https://s30876.pcdn.co/wp-content/uploads/london-e1634207674493-1170x630.jpg.optimal.jpg",
            "description":"Big Ben, the Tower of London, Buckingham Palace, the London Eye, the list goes on and on. There is nothing quite like the experience of hopping on a red double-decker bus and seeing some of the most recognisable sights in the world from its top deck."
            },
            {
            "id":11, 
            "name":"Cordoba", 
            "country": "Argentina", 
            "img":"https://cdn.theculturetrip.com/wp-content/uploads/2017/07/nico-niospe.jpg",
            "description":"Cordoba is a university city, and as such has a happening nightlife scene. Nueva Cordoba is the place to hang with the young hip things, who hit the bars and clubs around 11pm and stay out ’til the wee hours. If you are looking for a more chill Cordobese experience in the capital, then don’t stay in Nueva Cordoba, as the party really does go on all night, perhaps not a great thing for lovers of a good sleep"
            },
            {
            "id":12, 
            "name":"Rio de Janeiro", 
            "country": "Brazil", 
            "img":"https://www.diariodecultura.com.ar/wp-content/uploads/2021/04/Rio_de_Janeiro.jpg",
            "description":"Lauded in song, with names redolent with sun and sophisticated, Rio’s beaches are famous around the world. Praia de Copacabana, perhaps the most famous, stretches from the Morro do Leme hill in the northeast to the Arpoador rocks in the southwest, a lively stretch of sand where almost anything goes."
            }
            ]
        }
        
    )
})

app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto: '+app.get('port'))
})