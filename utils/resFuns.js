
const RES_CODE = {
    suc: 8888,
    fail: 4444
}
function setRes(status, message, data, res) {
    const code = RES_CODE[status]
    res.setHeader('Cache-Control', 'no-cache')
    res.status(200).json({ code, message, data })
}
// 响应成功信息
const responseSuc = (res, message = '', data = null) => {
    setRes('suc', message, data, res)
}
// 响应失败信息
const responseFail = (res, message = '', data = null) => {
    setRes('fail', message, data, res)
}

module.exports = {
    responseSuc,
    responseFail
}