const axios = require("axios");
const getAccessToken = async () => {
    try {
        const response = await axios.post("https://zoom.us/oauth/token", null, {
            params: {
                grant_type: "account_credentials",
                account_id: process.env.ZOOM_ACCOUNT_ID
            },
            auth: {
                username: process.env.ZOOM_CLIENT_ID,
                password: process.env.ZOOM_CLIENT_SECRET,
            }

        })
        return response.data.access_token
    } catch (error) {
        console.log(error)
    }
};

module.exports = { getAccessToken };