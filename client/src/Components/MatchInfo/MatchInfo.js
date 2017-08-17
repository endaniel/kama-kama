import React from 'react';
import './MatchInfo.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class MatchInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {modalIsOpen: false};
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({modalIsOpen: true});
    }

    closeModal(){
        this.setState({modalIsOpen: false});
    }

    render(){
        
        return(
        <div>   
          <button onClick={this.openModal}>מידע</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
  
            <h2>{this.props.match.match}</h2>
            <h2>{this.props.match.date} - תאריך</h2>
          </Modal>
      </div>
        );
    }
}

export default MatchInfo;