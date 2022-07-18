export default class CatService {

    _apiBase = 'https://api.thecatapi.com/v1';
    _user = 'user-123'

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

    fetchVoting = async (id, val) => {
        const head = {
            method: 'POST',
            headers: {
                'x-api-key': 'c91f4c8b-f7c1-4cee-9461-2f27f43bc610',
                'Content-Type' : 'application/json',
            },
            body: {
                image_id: id, 
                sub_id: this._user,
                value: val
            }
        }
        console.log(head);
        const res = await this.getResource(`/votes`, head)
        return res;

    }

}
