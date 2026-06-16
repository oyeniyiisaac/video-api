const express = require('express');
const app = express();
const cors = require('cors')
const port = 5020;
app.use(cors())
const videoApi = [
    {
        id: 1,
        Title: 'Battle Drone',
        yearOfRelease: '2018',
        Director: 'Mitch Gould',
        Genre: 'Action/Sci-Fi',
        VideoURL: 'https://youtu.be/vjgVt-ui8Tk?si=lRYlwseiDMVA0SR-',
        mainCharacter: ['Valkyrie', 'Shiro', 'Dax', 'Grigori', 'Blackwood']
    },
    {
        id: 2,
        Title: 'Mechanic: Resurrection',
        yearOfRelease: '2016',
        Director: 'Dennis Gansel',
        Genre: 'Action/Sci-Fi',
        VideoURL: 'https://youtu.be/wn0FUX5907k?si=CSp4yqhsxjwLBqWb',
        mainCharacter: 'Jason Statham(Arthur Bishop)'
    },
    {
        id: 3,
        Title: 'MONICA 2',
        yearOfRelease: '2026',
        Director: 'Uche Montana',
        Genre: 'Drama/Romance',
        VideoURL: 'https://youtu.be/7jteLIoNDaQ?si=-iIXtZoMdw6b8kgs',
        mainCharacter: 'Uche Montana'
    },
    {
        id: 4,
        Title: 'MONICA',
        yearOfRelease: '2026',
        Director: 'Uche Montana',
        Genre: 'Drama/Romance',
        VideoURL: 'https://youtu.be/-yVrN03f610?si=py1TXXMPmfrfbtuV',
        mainCharacter: 'Uche Montana'
    },
    {
        id: 5,
        Title: 'FREE JEMIMAH',
        yearOfRelease: '2026',
        Director: 'Royal Nolly Films TV and 5 Star Romance TV',
        Genre: 'Drama',
        VideoURL: 'https://youtu.be/gQ_-ZUxtLDc?si=iFM-nHl7fnIm-X_f',
        mainCharacter: 'Maurice Sam'
    },
    {
        id: 6,
        Title: 'Target Locked(The Beekeeper)',
        yearOfRelease: '2024',
        Director: 'David Ayer',
        Genre: 'Action/Thriller',
        VideoURL: 'https://www.youtube.com/watch?v=Mpk7lrpVJe0',
        mainCharacter: 'Adam Clay (played by Jason Statham)'
    },
    {
        id: 7,
        Title: 'High Voltage',
        yearOfRelease: '2009',
        Director: 'Mark Neveldine and Brian Taylor',
        Genre: 'Action/Comedy',
        VideoURL: 'https://www.youtube.com/watch?v=yzLa2YcD_Ww',
        mainCharacter: 'Jason Statham'
    },
    {
        id: 8,
        Title: 'The She Mercenary',
        yearOfRelease: '2026',
        Director: 'Stephen Durham',
        Genre: 'Action/Thriller/Revenge',
        VideoURL: 'https://www.youtube.com/watch?v=UeVbnzn2yTc',
        mainCharacter: 'Ellen Hollman'
    },
    {
        id: 9,
        Title: 'Double Crossfire',
        yearOfRelease: '2026',
        Director: 'Stephen Durham',
        Genre: 'Action/Thriller/Heist',
        VideoURL: 'https://www.youtube.com/watch?v=M88-NieTStg',
        mainCharacter: 'Miguel A. Nunez Jr.'
    },
    {
        id: 10,
        Title: 'Shadow Command',
        yearOfRelease: '2026',
        Director: 'Stephen Durham',
        Genre: 'Action/Political Thiller/Suspense',
        VideoURL: 'https://www.youtube.com/watch?v=UeVbnzn2yTc',
        mainCharacter: 'Forest Whitaker'
    },
    {
        id: 11,
        Title: 'Special Ops',
        yearOfRelease: '2026',
        Director: 'Stephen Durham',
        Genre: 'Action/War/Thriller',
        VideoURL: 'https://www.youtube.com/watch?v=AbfP2XJGIhI',
        mainCharacter: 'Tom Abell'
    },
    {
        id: 12,
        Title: 'Black Horizon',
        yearOfRelease: '2026',
        Director: 'Stephen Durham',
        Genre: 'Action/Sci-Fi/Thriller',
        VideoURL: 'https://www.youtube.com/watch?v=JnQ9EEshnZA',
        mainCharacter: 'Micheal Dudikoff'
    },
    {
        id: 13,
        Title: 'SpiderQuake',
        yearOfRelease: '2026',
        Director: 'Stephen Durham',
        Genre: 'Action/Sci-Fi/Creature Feature',
        VideoURL: 'https://youtu.be/zMB2UO_RErI',
        mainCharacter: 'Steven G. Rice'
    },
    {
        id: 14,
        Title: 'The Eradicator',
        yearOfRelease: '2026',
        Director: 'Stephen Durham',
        Genre: 'Action/Sci-Fi/Revenge',
        VideoURL: 'https://youtu.be/LNATonibyDQ',
        mainCharacter: 'Micheal Dudikoff'
    },
    {
        id: 15,
        Title: 'Beast of Two Worlds',
        yearOfRelease: '2024',
        Director: 'Odunlade Adekola',
        Genre: 'Epic/Folklore',
        VideoURL: 'https://youtu.be/1EmUp5zvBFo?si=XiX927J-nIXcHe9-',
        mainCharacter: ['Odunlade Adekola', 'Eniola Ajao', 'Sola Sobowale']
    },
    {
        id: 16,
        Title: 'Ruse',
        yearOfRelease: '2024',
        Director: 'Bimbo Ademoye',
        Genre: 'Romantic/Comedy',
        VideoURL: 'https://youtu.be/3rNo06AZd-s?si=KQYYWtjBiDsf5p81',
        mainCharacter: ['Bimbo Ademoye', 'Kunle Remi', 'Sophie Alakija']
    },
    {
        id: 17,
        Title: 'Hidden Desires',
        yearOfRelease: '2024',
        Director: 'Emem Isong',
        Genre: 'Romantic/Drama',
        VideoURL: 'https://youtu.be/leIbTT4sKiQ?si=MQfxaqm1rY_cYFu3',
        mainCharacter: ['Majid Michel', 'Pamela Okoye', 'Chris Akwarandu']
    },
    {
        id: 18,
        Title: 'The General',
        yearOfRelease: '2024',
        Director: 'Chinenye Nnebe',
        Genre: 'Comedy',
        VideoURL: 'https://youtu.be/CdtRiU1Y2ew?si=AH-BnG5eeVTirEdL',
        mainCharacter: ['Sonia Uche', 'Ebube Obi', 'Toosweet Annan']
    },
    {
        id: 19,
        Title: 'Swapped',
        yearOfRelease: '2026',
        Director: 'Maurice Sam',
        Genre: 'Suspense/Drama',
        VideoURL: 'https://youtu.be/CdtRiU1Y2ew?si=AH-BnG5eeVTirEdL',
        mainCharacter: ['Maurice Sam', 'Chinenye Nnebe']
    },
    {
        id: 20,
        Title: 'Driven By Love',
        yearOfRelease: '2026',
        Director: 'Global Crown',
        Genre: 'Romance/Inspiration',
        VideoURL: 'https://youtu.be/a8HtqoPou7E?si=Q1xSpwHpC7ouq4QZ',
        mainCharacter: ['Victory Micheal', 'Omeche Oko', 'Sonita Fred']
    },

]


app.get('/welcome', (req, res) => {
    res.json(videoApi)
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, (req, res) => {
    console.log(`hello ${port}`);

})
