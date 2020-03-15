function user(parent, args, ctx, info) {
  // console.log(parent)
  return ctx.db.query.user({ where: { id: parent.user.id } })
}

module.exports = {
  user
}