const buildDate = (days) => {
    return new Date(new Date().setDate(new Date().getDate() + days));
};

const setLocalCookie = (data, res) => {
    return res
        .cookie('token', data.token, {
            httpOnly: true,
            sameSite: 'none',
            expires: buildDate(7),
            secure: false,
        })
        .status(200)
        .json({
            success: data.success,
            user: data.user
        });
};


module.exports = setLocalCookie