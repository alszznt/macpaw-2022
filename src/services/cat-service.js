export default class CatService {

    _apiBase = 'https://api.thecatapi.com/v1';
    _subId = 'user-1';

    getResource = async (url, head) => {
        const res = await fetch(`${this._apiBase}${url}`, head);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    };

    getImage = async () => {
        const res = await this.getResource(`/images/search`, { params: { limit:1, size:"full" } })
        return res;
    }

    getImageById = async (id) => {
        const res = await this.getResource(`/images/${ id }`)
        return res;
    }

    fetchVoting = async (id, val) => {
        const head = {
            method: 'POST',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                image_id: id, 
                sub_id: this._subId,
                value: val
            })
        }
        const res = await this.getResource(`/votes`, head)
        return res;
    }

    getVotes = async (limit = 10, order = 'DESC', page = 0) => {
        const head = {
            method: 'GET',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json'
            }
        }
        const res = await this.getResource(`/votes?order=${ order }&limit=${ limit }&page=${ page }`, head)
        return res;
    }

    addFavourite = async (id) => {
        const head = {
            method: 'POST',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                image_id: id, 
                sub_id: this._subId
            })
        }
        const res = await this.getResource(`/favourites`, head)
        return res;
    }

    deleteFavourite = async (id) => {
        const head = {
            method: 'DELETE',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json',
            }
        }
        const res = await this.getResource(`/favourites/${ id }`, head)
        return res;
    }

    getFavourite = async (limit, order = 'DESC', page = 0) => {
        const head = {
            method: 'GET',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json',
            }
        }
        const res = await this.getResource(`/favourites?order=${ order }&limit=${ limit }&page=${ page }`, head)
        return res;
    }

    getBreeds = async () => {
        const head = {
            method: 'GET',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json'
            }
        }
        const res = await this.getResource(`/breeds/`, head)
        return res;
    }

    getCatsImages = async (id) => {
        const head = {
            method: 'GET',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json',
            }
        }
        const res = await this.getResource(`/images/search?breed_ids=${ id }&limit=8`, head)
        return res;
    }

    fetchSearchData = async (value) => {
        const head = {
            method: 'GET',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json',
            }
        }
        const res = await this.getResource(`/breeds/search?q=${ value }`, head)
        return res;
    }



}
