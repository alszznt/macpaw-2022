import React, { Component } from 'react';

import CatsPageSliderButtons from '../components/cats-page-slider-buttons';

import { connect } from 'react-redux';
import { withCatService } from '../components/hoc';
import { compose } from '../utils';

import { useParams } from 'react-router-dom';

import { 
    getBreeds,
    getCats,
    onCatImageSelected 
} from '../actions';

const withRouter = (Component) => {
    return props => <Component {...props} params = { useParams() } />;
}

class CatsPageSliderButtonsContainer extends Component {

    componentDidMount() {
        const { getBreeds, getCats, params: { id } } = this.props;
        getBreeds();
        getCats(id);
    }

    render() {
        
        const { loading, error, cats, onCatImageSelected, selectedImage } = this.props;

        if (loading){
            return (
                <div className = "cats-page-slider-buttons">
                    <div className = "cats-page-slider-buttons-loading" />
                </div> 
            )
        }

        if (error){
            return null
        }

        return (
            <CatsPageSliderButtons 
                arr = { cats } 
                onCatImageSelected = { onCatImageSelected } 
                selectedImage = { selectedImage } 
            />
        )
    }

}

const mapStateToProps = ({ catsData: { loading, error, cats, selectedImage, info } }) => {
    return { loading, error, cats, selectedImage, info };
};

const mapDispatchToProps = (dispatch, { catService }) => {
    return {
        getBreeds: () => getBreeds(catService, dispatch),
        getCats: (id) => getCats(catService, dispatch)(id),
        onCatImageSelected: (cat) => dispatch(onCatImageSelected(cat))
    };
}
export default compose(
    withCatService(),
    connect(mapStateToProps, mapDispatchToProps),
)(withRouter(CatsPageSliderButtonsContainer));