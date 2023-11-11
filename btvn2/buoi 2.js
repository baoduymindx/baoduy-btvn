const animes = [
    {
        id: 1,
        name: 'yugi-oh',
        nameSx: 1990,
        episode: 700,
        img: '/img/sanpham1.jpg',
        category: 'banhngot'
    }, {
        id: 2,
        name: 'bleach',
        nameSx: 1990,
        episode: 700
    }, {
        id: 3,
        name: 'attack on titan',
        nameSx: 1990,
        episode: 700
    }
]

function getAnime(inputValue) {
    for (let i = 0; i < animes.length; i++) {
        let nameAnime = animes[i].name.toLowerCase()
        let newInputValue = inputValue.toLowerCase();
        if (nameAnime.includes(newInputValue)) {
            console.log(animes[i])
        } else {
            console.log('Khong tim thay Anime can tim')
            console.log('vui long tim lai')
        }
    }
}

getAnime('..')
function xinChao(name) {
    alert('xin chao thay va ' + name)
}
xinChao('ca ban')
