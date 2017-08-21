// Libraries
import React from 'react';
import axios from 'axios';
// React Router Components
import { LinkContainer } from 'react-router-bootstrap';

// React Components
import PostList from './PostList.jsx';

// React BootStrap Components
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';

/**
 * Class representing the React Forum Container Component.
 * @extends Forum
 */

class Forum extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  getForumInfo(forums) {
    //Matches forumName to Route ForumName
    return forums.filter((forum) => {
      return forum.id === this.props.match.params.id;
    });
  }
  
  render() {
    console.log('render forums', this.props.forums)
    console.log('render params id', this.props.match.params.id);
    if (this.props.forums) {
      var forumId = parseInt(this.props.match.params.id);
      var forum = this.props.forums.filter((forum) => { return forum.id === forumId; });
    }
    return (
      <div>
        <Grid>
          <div className="pull-right">
            <LinkContainer to={`/${this.props.clan.id}/forums/${forumId}/new`}>
              <Button bsStyle="success">
                Add New Post
              </Button>
            </LinkContainer>
          </div>
          <Row>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th colSpan="2">Forum Posts</th>
                </tr>
              </thead>
              <PostList clan={this.props.clan} forum={forum}/>
            </Table>
          </Row>
        </Grid>
      </div>
    );

  }
}

export default Forum;