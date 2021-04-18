import MusicService from './music'

const trackService = {}

trackService.search = function(q, offset = 0) {
    const type = 'track'

    return MusicService.get('/search', {
        params: { q, type, offset }
    })
        .then(res => res.data)    
}

trackService.getById = function(id) {
    return MusicService.get(`/tracks/${id}`)
        .then(res => res.data)
}

export default trackService