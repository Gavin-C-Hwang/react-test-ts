import React, { Component } from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';

interface Post {
  title: string;
  body: string;
}

interface State {
  postId: number;
  fetching: boolean;
  post: Post;
  comments: any;
}

class PostContainer extends Component {
  state: State = {
    postId: 1,
    fetching: false,
    post: {
      title: '',
      body: ''
    },
    comments: []
  };

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async (postId: number) => {
    //requesting
    this.setState({ fetching: true });
    try {
      const info = await Promise.all([service.getPost(postId), service.getComments(postId)]);
      console.log(info);
      const { title, body } = info[0].data;
      const comments = info[1].data;

      this.setState({
        postId,
        post: {
          title,
          body
        },
        comments,
        fetching: false
      });
    } catch {
      this.setState({
        fetching: false
      });
    }
  };

  handleNavigateClick = (type: string) => {
    const postId = this.state.postId;

    if (type === 'NEXT') {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  };

  render() {
    const { postId, fetching, post, comments } = this.state;
    return (
      <PostWrapper>
        <Navigate postId={postId} disabled={fetching} onClick={this.handleNavigateClick} />
        <Post title={post.title} body={post.body} comments={comments} />
      </PostWrapper>
    );
  }
}
export default PostContainer;
