const axios = require('axios');

const getTuyaToken = async (clientId, secret) => {
    const url = 'https://openapi.tuyaus.com/v1.0/token?grant_type=1';
    const headers = {
        'Content-Type': 'application/json',
    };
    const body = {
        clientId,
        secret,
    };

    try {
        const response = await axios.post(url, body, { headers });
        return response.data.result.access_token;
    } catch (error) {
        console.error('Error getting Tuya token:', error);
        return null;
    }
};

module.exports = getTuyaToken;