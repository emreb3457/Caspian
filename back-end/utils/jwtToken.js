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
            httpOnly: true
        }
    } else {
        options = {
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000  //1 gün 
            ),
            httpOnly: true
        }
    }
    // Write response
console.log(options)
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user,
    })


}

module.exports = sendToken;