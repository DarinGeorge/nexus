import gql from 'graphql-tag';

/* POST QUERIES ------------------------ */

export const FETCH_POSTS = gql`
  {
    posts {
      id
      body
      user
      createdAt
      alias
      commentCount
      comments {
        id
        alias
        createdAt
        body
      }
    }
  }
`;

export const FETCH_POST = gql`
  query($postId: ID!) {
    post(postId: $postId) {
      id
      body
      createdAt
      alias
      commentCount
      comments {
        id
        alias
        createdAt
        body
      }
    }
  }
`;

/* USER QUERIES ------------------------ */

export const FETCH_USERS = gql`
{
  users {
    id
    email
    createdAt
    alias
  }
}
`;

export const FETCH_USER = gql`
  query($userId: ID, $alias: String) {
    user(userId: $userId, alias: $alias) {
      id
      email
      createdAt
      alias
      chats {
        id
        title
        messages {
          id
          body
        }
      }
    }
  }
`;

export const FETCH_MESSAGES = gql`
  query($chatId: ID) {
    messages(chatId: $chatId) {
      id
      body
      sender
    }
  }
`;