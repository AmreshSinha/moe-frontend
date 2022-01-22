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
        const url = `${path}/paste?name=${name}&body=${paste}`;
        try {
            return axios.get(url);
        } catch (error) {
            console.log(error)
        }
    }
}

// async function getPaste(id) {
//     console.log(id);
//     const reqJson = await fetch(`${path}/${id}`);
//     const data = await reqJson.json();
//     return data;
// }

// async function uploadPaste(name, paste) {
//     const pasteJson = JSON.stringify(paste);
//     const uploadPaste = await fetch(`${path}/paste?name=${name}&${paste}`);
//     const data = await uploadPaste.json();
//     return data;
// }

// module.exports.getPaste = getPaste;