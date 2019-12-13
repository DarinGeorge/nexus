const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');
const chatsResolvers = require('./chats');
const messagesResolvers = require('./messages');
const connectionsResolvers = require('./connections');
const notificationsResolvers = require('./notifications');

module.exports = {
  Post: {
    commentCount: parent => parent.comments.length
  },
  User: {
    ...usersResolvers.User
  },
  Chat: {
    ...chatsResolvers.Chat
  },
  Message: {
    ...messagesResolvers.Message
  },
  Connection: {
    ...connectionsResolvers.Connection
  },
  Query: {
    ...postsResolvers.Query,
    ...usersResolvers.Query,
    ...messagesResolvers.Query,
    ...chatsResolvers.Query,
    ...connectionsResolvers.Query,
    ...notificationsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...chatsResolvers.Mutation,
    ...messagesResolvers.Mutation,
    ...connectionsResolvers.Mutation,
    ...notificationsResolvers.Mutation
  },
  Subscription: {
    ...messagesResolvers.Subscription,
    ...chatsResolvers.Subscription,
    ...notificationsResolvers.Subscription
  }
};
