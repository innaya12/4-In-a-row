import React from 'react';
import BuildBoard from './buildBoard'

class Play extends React.Component{


    render(){
        return(
            <div className="play">
                <h2>Round 1</h2>
                <BuildBoard />
            </div>
        )
    }
}

export default Play;