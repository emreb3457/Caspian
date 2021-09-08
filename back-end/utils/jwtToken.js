const randtoken = require("rand-token")
const sendToken = (user, statusCode, res, rm) => {

    var refreshTokens = {};
    // Create Jwt token
    const token = user.getJwtToken();

    // Options for cookie
    let options
    if (rm == true) {
        options = {
            expires: new Date(Number(new Date()) + 315360000000), //10 years
            httpOnly: true,
            sameSite: 'none',
            secure: true
        }
    } else {
        options = {
            expires: new Date(
                Date.now() + process.env.cookie_expires_time * 24 * 60 * 60 * 1000  //1 gün 
            ),
            httpOnly: true,
            sameSite: 'none',
            secure: true
        }
    }
    // Write response

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user,
    })


}

module.exports = sendToken;