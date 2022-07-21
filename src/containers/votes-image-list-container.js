import React, { Component } from 'react';

import ImageList from '../components/image-list';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ElementLoadingIndicator } from '../components/loading-indicators';
import { ListNoResultIndicator } from '../components/error-indicators';

import { getVotes } from '../actions';

class VotesImageListContainer extends Component {

    componentDidMount() {
        const { getVotes } = this.props;
        getVotes('', 'DESC', 0);
    }

    render() {
        
        const { votingList, loading, error, Item } = this.props;

        if (loading){
            return <ElementLoadingIndicator />
        }

        if (error){
            return(
                <div>
                    something went wrong :(
                </div>
            )
        }

        if (votingList.length === 0){
            return <ListNoResultIndicator />
        }

        return (
            <ImageList 
                list = { votingList }
                Item = { Item }
            />
        )
    }

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
)(VotesImageListContainer);