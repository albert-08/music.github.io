import trae from 'trae'
import configService from './config'

const MusicService = trae.create({
    baseUrl: configService.apiUrl
})

export default MusicService