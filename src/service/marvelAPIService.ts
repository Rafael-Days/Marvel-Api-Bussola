import axios from 'axios';

const publicKey = 'dd89016343afe1f464593291c9afca44';
const privateKey = 'befc3ff8b0d783066229c135fd7e972c3f60804b';

// Função para gerar o hash MD5
function generateHash(timestamp: string): string {
    return require('blueimp-md5')(timestamp + privateKey + publicKey);
}

// URL base da API da Marvel
const baseURL = 'https://gateway.marvel.com/v1/public';

// ID do evento "Infinity War"
const infinityWarEventId = 29;

// Serviço para consumir a API da Marvel
const MarvelAPIService = {
    // Função para buscar informações sobre a saga "Infinity War"
    async getInfinityWarEvent() {
        const timestamp = new Date().getTime().toString();
        const hash = generateHash(timestamp);
        const url = `${baseURL}/events/${infinityWarEventId}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar informações sobre a saga "Infinity War":', error);
            throw error;
        }
    },

    // Função para buscar personagens da saga "Infinity War"
    async getInfinityWarCharacters() {
        const timestamp = new Date().getTime().toString();
        const hash = generateHash(timestamp);
        const url = `${baseURL}/events/${infinityWarEventId}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar personagens da saga "Infinity War":', error);
            throw error;
        }
    },

    // Função para buscar quadrinhos da saga "Infinity War"
    async getInfinityWarComics() {
        const timestamp = new Date().getTime().toString();
        const hash = generateHash(timestamp);
        const url = `${baseURL}/events/${infinityWarEventId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar quadrinhos da saga "Infinity War":', error);
            throw error;
        }
    },

    // Função para buscar criadores da saga "Infinity War"
    async getInfinityWarCreators() {
        const timestamp = new Date().getTime().toString();
        const hash = generateHash(timestamp);
        const url = `${baseURL}/events/${infinityWarEventId}/creators?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar criadores da saga "Infinity War":', error);
            throw error;
        }
    }
};

export default MarvelAPIService;