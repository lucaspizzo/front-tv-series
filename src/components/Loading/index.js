import React from 'react';

import Spinner from 'react-spinkit';
import { LoadingComponent } from './style';

const Loading = ({ loading, message }) => { 
    return loading ? (
        <LoadingComponent> 
            <div className='wrapper'> 
                <Spinner 
                    name='pacman' 
                    fadeIn='none' 
                    color='red' 
                /> 
                <span className='message'>{message}</span>
            </div>
        </LoadingComponent> 
    ) : null 
};
 
export default Loading;