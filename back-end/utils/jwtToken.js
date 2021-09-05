const randtoken = require("rand-token")
const sendToken = (user, statusCode, res) => {

    var refreshTokens = {};
    // Create Jwt token
    const token = user.getJwtToken();
    refreshTokens[user._id] = randtoken.uid(256)
    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    // Write response
    
    res.status(statusCode).cookie('token', {token,ref:refreshTokens}, options).json({
        success: true,
        token,
        user,
        refreshTokens
    })


}

module.exports = sendToken;