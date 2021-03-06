const DB = require('../utils/db')

module.exports = {

  /**
   * 添加评论
   */
  add: async ctx => {
    let user = ctx.state.$wxInfo.userinfo.openId
    let username = ctx.state.$wxInfo.userinfo.nickName
    let avatar = ctx.state.$wxInfo.userinfo.avatarUrl

    let movieId = ctx.request.body.movie_id
    let record = ctx.request.body.record || null
    let content = ctx.request.body.content || null

    if (!isNaN(movieId)) {
      await DB.query('INSERT INTO review(user, username, avatar, content, voice, movie_id) VALUES (?, ?, ?, ?, ?, ?)', [user, username, avatar, content, record, movieId])
    }

    ctx.state.data = {}
  },

  /**
   * 获取评论列表
   */
  list: async ctx => {
    let movieId = ctx.params.id

    if (!isNaN(movieId)) {
      ctx.state.data = await DB.query('SELECT * FROM review WHERE movie_id = ?', movieId)
    } else {
      ctx.state.data = []
    }
  },

  /**
   * 获取影评详情
   */
  detail: async ctx => {
    let id = ctx.params.id
    ctx.state.data = (await DB.query('SELECT review.id, review.content, review.voice, review.avatar, review.username, movies.image, movies.title, review.movie_id FROM review RIGHT JOIN movies ON review.movie_id = movies.id WHERE review.id = ?', id))[0]
  },

  /**
   * 获取我对某一部影片的评价
   * 
   */
  my: async ctx => {
    let user = ctx.state.$wxInfo.userinfo.openId
    let movieId = ctx.params.id

    if (!isNaN(movieId) && user) {
      ctx.state.data = await DB.query('SELECT * FROM review RIGH JOIN movies ON movie_id = movies.id WHERE movie_id = ? AND user = ?', [movieId, user])
    } else {
      ctx.state.data = []
    }
  },
}