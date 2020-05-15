//tasowanie kart
function shuffle(array) {
    const _array = array.slice(0)
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random()*(i+1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
    return _array
}


//tworzę tablicę z kartami
export default function initializeDeck() {
    let id = 0;
    const cards = ["adler", "bird", "bird2", "flaming", "gulls", "kingfisher", "owl", "sparrow", "swan"].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    },[])
    return shuffle(cards)
}