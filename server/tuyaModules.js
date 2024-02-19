//import node-fetch

const crypto = require('crypto');
const {default: axios} = require("axios");
const config = {
    host: 'https://openapi.tuyaus.com',
}
exports.getTuyaToken = async (clientId, secret) => {


     return getToken(clientId, secret);

};

async function getToken(clientId, secret) {
    const httpClient = axios.create({
        baseURL: config.host,
        timeout: 5 * 1e3,
    });
    const method = 'GET';
    const timestamp = Date.now().toString();
    const signUrl = '/v1.0/token?grant_type=1';
    const contentHash = crypto.createHash('sha256').update('').digest('hex');
    const stringToSign = [method, contentHash, '', signUrl].join('\n');
    const signStr = clientId + timestamp + stringToSign;
    console.log('SignStr', signStr);
    const headers = {
        t: timestamp,
        sign_method: 'HMAC-SHA256',
        client_id: clientId,
        sign: encryptStr(signStr, secret),
    };
    const { data: login } = await httpClient.get('/v1.0/token?grant_type=1', { headers });
    if (!login || !login.success) {
        throw Error(`Authorization Failed: ${login.msg}`);
    }
    let token = login.result.access_token;
    return token;
}
function encryptStr(str, secret) {
    return crypto.createHmac('sha256', secret).update(str, 'utf8').digest('hex').toUpperCase();
}