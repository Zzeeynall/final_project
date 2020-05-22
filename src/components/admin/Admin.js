import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCoins, deleteCoin, modal } from "../../actions";
import { MainWrapper, Coins, Caption, Wrapper, Picture, AddWrapper, Plus, EditButton, DeleteButton, Name, Desc, 
    Label, Input, View, Modal, DeleteModal, CancelModal } from './Style';
import { Link, Redirect } from 'react-router-dom';
import eyes from '../../icons/eyes.png';
//import Modal from '../modal-window'

class Admin extends Component{

    state = {
        search: ''
    }

    componentDidMount(){
        this.props.getCoins();
    }

    search = (items, text) => {
        if(!text.length){
            return items;
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        })
   }

   delete = (id) => {
        this.props.deleteCoin(id);
        this.props.showModal()
   }

    render(){
        const searched = this.search(this.props.coins, this.state.search);
        // if(!this.props.login){
        //     return <Redirect to='/' />
        // }
        return(
            <div>
                <Caption>Admin Panel</Caption>
                <div>
                    <Label>Input field</Label>
                </div>
                <Input onChange={(e) => this.setState({search: e.target.value})} value={this.state.search} placeholder=" type to search"/>
                <Coins>
                    {searched.map(coin =>{
                        return (
                            <MainWrapper key={coin.id}>
                                <Wrapper>
                                    {coin.view != 0 ? <View><img src={eyes}/> {coin.view}</View> : <></>}
                                    <Picture src={coin.obverse_img}/>
                                    <div>
                                        <Name>{coin.name}</Name>
                                        <Desc>{coin.short_desc}</Desc>
                                    </div>
                                </Wrapper>
                                <div>
                                    <Link to={`/edit/${coin.id}`}><EditButton>Edit</EditButton></Link>
                                    <DeleteButton onClick={() => this.props.showModal()}>Delete</DeleteButton>
                                </div>
                                {this.props.modal && <Modal>
                                    <p>Are you sure?</p>
                                    <DeleteModal onClick={() => this.delete(coin.id)}>Delete</DeleteModal>
                                    <CancelModal onClick={() => this.props.showModal()}>Cancel</CancelModal>
                                </Modal>}
                            </MainWrapper>)
                    })}
                </Coins>
                <AddWrapper>
                    <Plus>+</Plus>
                    <div>
                        <Link to='/add'>Add a new coin</Link>
                    </div>
                </AddWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coins: state.coins,
        login: state.login,
        modal: state.modal,
    };
  };
  
  const mapDispatchToProps = {
    getCoins: getCoins,
    deleteCoin: deleteCoin,
    showModal: modal
  };

export default connect(mapStateToProps, mapDispatchToProps)(Admin);