import React from 'react';

class Info extends React.Component{
    render(){
        return(
            <p>
            Edit <code>src/App.js</code> and save to reload.{this.props.file_name}
          </p>
        );
    }
    
}

export default Info