const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.pug')
  }

  async send() {
    const msg = this.ctx.request.body.msg

    if (!msg) {
      return
    }

    const result = await this.ctx.curl(`https://oapi.dingtalk.com/robot/send?access_token=${this.config.DINGDING_ACCESS_TOKEN}`, {
      method: 'POST',
      contentType: 'json',
      data: {
        msgtype: 'text',
        text: {
          content: msg
        }
      },
      dataType: 'json'
    })

    this.ctx.body = result.data
  }
}

module.exports = HomeController
