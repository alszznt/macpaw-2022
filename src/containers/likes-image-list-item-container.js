import React, { Component } from 'react';

import LikesImageListItem from '../components/likes-image-list-item';

import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ImageLoadingIndicator } from '../components/loading-indicators';

class LikesImageListItemContainer extends Component {

    state = {
        url: '',
        loading: true,
        error: null
    }

    componentDidMount() {

        const { catService, props:{ image_id } } = this.props;

        this.setState({
            url: '',
            loading: true,
            error: null 
        })

        catService.getImageById(image_id)
              .then((data) => { 
                this.setState({
                    url: data.url,
                    loading: false,
                    error: null
                })
               })
               .catch((err) => { 
                this.setState({
                    url: '',
                    loading: false,
                    error: true
                })
               });
    }

    render() {

        const { loading, error, url } = this.state;
        const { props } = this.props

        if ( props.value === 0 ){
            return null
        }

        if (loading){
            return <ImageLoadingIndicator />
        }

        return(
            <LikesImageListItem props = { props } url = { url } />
        );
    }

}

export default compose(
    withCatService()
)(LikesImageListItemContainer);