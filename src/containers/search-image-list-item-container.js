import React, { Component } from 'react';

import SearchImageListItem from '../components/search-image-list-item';

import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { ImageLoadingIndicator } from '../components/loading-indicators';
import { ImageErrorIndicator } from '../components/error-indicators';

class SearchImageListItemContainer extends Component {

    state = {
        url: null,
        loading: true,
        error: null
    }

    componentDidMount() {

        const { catService, props: { reference_image_id } } = this.props;

        this.setState({
            url: '',
            loading: true,
            error: null 
        })

        if ( reference_image_id !== undefined ){
            catService.getImageById(reference_image_id)
              .then((data) => { 
                this.setState({
                    url: data.url,
                    loading: false,
                    error: null
                })
               })
               .catch((err) => { 
                this.setState({
                    url: null,
                    loading: false,
                    error: true
                })
               });
        }else{
            this.setState({
                url: null,
                loading: false
            })
        }
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

        if (error){
            return <ImageErrorIndicator />
        }

        return(
            <SearchImageListItem props = { props } url = { url } />
        );
    }

}

export default compose(
    withCatService()
)(SearchImageListItemContainer);