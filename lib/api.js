const axios = require('axios');


module.exports = {
    getPaste : function(id) {
        const path = process.env.NEXT_PUBLIC_API_URL;
        const url = `${path}/${id}`;
        try {
            return axios.get(url);
        } catch (error) {
            console.log(error)
        }
    },
    uploadPaste : function(name, paste) {
        const path = process.env.NEXT_PUBLIC_API_URL;
        const url = `${path}/paste`;
        const data = {
            name: name,
            body: paste,
        };
        try {
            return axios.post(url, data);
        } catch (error) {
            console.log(error)
        }
    }
}
