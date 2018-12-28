/**
 * 定义一个设置响应报文的类
 * @author Wicken Wu 
 */ 
const RES_CODE = {
    suc: 8888,
    fail: 4444
}
class ResMessage {
    static setRes(status, message, data) {
        const code = RES_CODE[status]
        return { code, message, data }
    }
    static setSucRes(message, data) {
        return ResMessage.setRes('suc', message, data)
    }
    static setFailRes(message) {
        return ResMessage.setRes('fail', message)
    }
}

module.exports = ResMessage