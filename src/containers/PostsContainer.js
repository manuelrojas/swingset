import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './../actions/Posts';
import Posts from './../components/Posts';

class PostsContainer extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount() {
      this.props.actions.actionGetPosts();
    }

    render() {
      return (
        <Posts
            onLoad={this.props.actions.actionGetPosts}
            posts={this.props.postsState.posts}
            loading={this.props.postsState.loading}
            loaded={this.props.postsState.loaded}
            error={this.props.postsState.error}
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
