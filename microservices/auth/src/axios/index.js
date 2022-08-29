const { default: axios } = require("axios");
const { microUsersDev } = require("../config");

const instance = axios.create({
    baseURL: microUsersDev
})

const get = async (url) => {
    return await instance.get(url, {
        withCredentials: true
    })
}

const post = async (url, data) => {
    return await instance.post(url, data, {
        withCredentials: true
    })
}

module.exports = instance, { get, post }