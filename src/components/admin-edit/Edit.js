import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { updateCoin, getCoinById, editForm, getCoinForEdit } from "../../actions";
import { Caption, Label, Input, WrapperFirstLine, Area, WrapperLastLine, SaveButton, CancelButton } from '../admin-add/Style';

class Edit extends Component {
    
    componentDidMount(){
        this.props.getCoinForEdit(this.props.id);
        
      }

    onChangeHandle = (e) => {
        const coin = {[e.target.name]: e.target.value};
        this.props.editForm(coin);
      }

    updateCoin = (e) => {
        e.preventDefault();
        this.props.updateCoin(this.props.id, this.props.coin);
        this.props.history.push('/admin');
    }

    render(){
        if(!this.props.login){
            return <Redirect to='/' />
        }
        const coin = this.props.coin ? this.props.coin : {};
        return(
            <div>
                <Caption>Admin Panel</Caption>
                
                <form onSubmit={this.updateCoin} name="myForm">
                    <WrapperFirstLine>
                        <div>
                            <div>
                                <Label htmlFor="name">Coin name</Label>
                            </div>
                            <Input onChange={this.onChangeHandle} 
                            id="coinName" name="name" type="text" value={coin.name} required/>
                            <div>
                                <Label htmlFor="face_value">Face value</Label>
                            </div>
                            <Input onChange={this.onChangeHandle} 
                            id="faceValue" name="face_value" type="text" value={coin.face_value} required/>
                        </div>
                        <div>
                            <div>
                                <Label htmlFor="short_desc">Short description</Label>
                            </div>
                            <Area onChange={this.onChangeHandle}  id="shortDesc" 
                            name="short_desc" type="text" value={coin.short_desc} required ></Area>
                        </div>
                        <div>
                            <div>
                                <Label htmlFor="obverse_img">Link to obverse image</Label>
                            </div>
                            <Input onChange={(e) => this.setState({obverse_img: e.target.value})} id="observe" 
                            name="obverse_img" type="text" value={coin.obverse_img} required/>
                            <div>
                                <Label htmlFor="reverse_img">Link to reverse image</Label>
                            </div>
                            <Input onChange={(e) => this.setState({reverse_img: e.target.value})} id="reverse" 
                            name="reverse_img" type="text" value={coin.reverse_img} required/>
                        </div>
                    </WrapperFirstLine>
                    <WrapperFirstLine>
                        <div>
                            <div>
                                <Label htmlFor="year_issue">Year of issue</Label>
                            </div>
                            <Input onChange={(e) => this.setState({year_issue: e.target.value})} id="year" 
                            name="year_issue" type="text" value={coin.year_issue} required/>
                            <div>
                                <Label htmlFor="price">Price</Label>
                            </div>
                            <Input onChange={(e) => this.setState({price: e.target.value})} id="price" 
                            name="price" type="text" value={coin.price} required/>
                        </div>
                        <div>
                            <div>
                                <Label htmlFor="long_desc">Long description</Label>
                            </div>
                            <Area onChange={(e) => this.setState({long_desc: e.target.value})} id="longDesc" 
                            name="long_desc" type="text" value={coin.long_desc} required ></Area>
                        </div>
                        <div>
                            <div>
                                <Label htmlFor="typeId">Type</Label>
                            </div>
                            <Input onChange={(e) => this.setState({typeId: e.target.value})} id="type" 
                            name="typeId" type="text" value={coin.typeId} required/>
                        </div>
                    </WrapperFirstLine>
                    <WrapperFirstLine>
                        <div>
                            <div>
                                <Label htmlFor="country">Country</Label>
                            </div>
                            <Input onChange={(e) => this.setState({country: e.target.value})} id="country" 
                            name="country" type="text" value={coin.country} required/>
                            <div>
                                <Label htmlFor="metal">Metal</Label>
                            </div>
                            <Input onChange={(e) => this.setState({metal: e.target.value})} id="metal" 
                            name="metal" type="text" value={coin.metal} required/>
                        </div>
                        <WrapperLastLine>
                            <div>
                                <div>
                                    <Label htmlFor="quality">Quality of the coin</Label>
                                </div>
                                <Input onChange={(e) => this.setState({quality: e.target.value})} id="quality" 
                                name="quality" type="text" value={coin.quality} required/>
                                <div>
                                    <Label htmlFor="weight">Weight</Label>
                                </div>
                                <Input onChange={(e) => this.setState({weight: e.target.value})} id="weight" 
                                name="weight" type="text" value={coin.weight} required/>
                            </div>                            
                            <div>
                                <SaveButton type="submit">Save</SaveButton>
                                <Link to='/admin'><CancelButton>Cancel</CancelButton></Link>
                            </div>
                        </WrapperLastLine>
                    </WrapperFirstLine>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        coin: state.coinEdit,
        login: state.login,
        id: ownProps.match.params.id
    };
  };
  
const mapDispatchToProps = {
    updateCoin: updateCoin,
    editForm: editForm,
    getCoinForEdit: getCoinForEdit
  };

export default connect(mapStateToProps, mapDispatchToProps)(Edit);