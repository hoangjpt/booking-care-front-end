import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl'

class HomeFooter extends Component {

    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2022 Hỏi Dân IT với Eric. More inforamtion, please visit my youtube chanel.
                    <a target='_blank' href='https://www.facebook.com/'>&#8594; Click here &#8592;</a>
                </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        lang: state.app.language,
        contentOfConfirmModal: state.app.contentOfConfirmModal
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
