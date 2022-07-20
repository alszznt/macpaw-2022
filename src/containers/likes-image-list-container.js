import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { getVotes } from '../actions';

class LikesImageListContainer extends Component {

    componentDidMount() {
        const { getVotes } = this.props;
        getVotes(10, 'DESC', 0);
    }

    render() {
        
        const { votingList, loading, error } = this.props;

        if (loading){
            return(
                <div>
                    loading...
                </div>
            )
        }

        if (error){
            return(
                <div>
                    something went wrong :(
                </div>
            )
        }

        return (
            <ImageList 
                list = { votingList }
                Item = { ImageListItem }
            />
        )
    }

}

const ImageListItem = ({ props }) => {

    console.log(props);

    return(
        <div className = "image-list-item">

        </div>
    )
}

const mapStateToProps = ({ votingData: { votingList, loading, error } }) => {
    return { votingList, loading, error };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getVotes: (limit, order, page) => getVotes(catService, dispatch)(limit, order, page)
    };
};

export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LikesImageListContainer);