import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './actions';
import Posts from './Posts';

class PostsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.actions.getPosts();
  }

  render() {
    return (
      <Posts
        posts={this.props.postsState.posts}
        loading={this.props.postsState.loading}
        loaded={this.props.postsState.loaded}
        error={this.props.postsState.error}
        count={this.props.postsState.count || 10}
      ></Posts>
    );
  }
}

function mapStateToProps(state){
  return {
    postsState: state.postReducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions,dispatch)
  };
}

export default connect (mapStateToProps,mapDispatchToProps)(PostsContainer);
