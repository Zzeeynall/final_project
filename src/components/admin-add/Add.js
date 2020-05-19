import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { addCoin } from "../../actions";
import { Caption, Label, Input, WrapperFirstLine, Area, WrapperLastLine, SaveButton, CancelButton } from './Style';

const Add = (props) => {

    const addNewCoin = (e) => {
        e.preventDefault();
        const newCoin = {};
        for(let item in e.target.elements){
            newCoin[e.target.elements[item].name] = e.target.elements[item].value;
        }
        props.addCoin(newCoin);
        props.history.push('/admin');
    }

    if(!props.login){
        return <Redirect to='/' />
    }
    
    return(
        <div>
            <Caption>Admin Panel</Caption>
            <form onSubmit={addNewCoin} name="myForm">
                <WrapperFirstLine>
                    <div>
                        <div>
                            <Label htmlFor="coinName">Coin name</Label>
                        </div>
                        <Input id="coinName" name="coinName" type="text" required/>
                        <div>
                            <Label htmlFor="faceValue">Face value</Label>
                        </div>
                        <Input id="faceValue" name="faceValue" type="text" required/>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="shortDesc">Short description</Label>
                        </div>
                        <Area id="shortDesc" name="shortDesc" type="text" required ></Area>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="observe">Link to obverse image</Label>
                        </div>
                        <Input id="observe" name="observe" type="text" required/>
                        <div>
                            <Label htmlFor="reverse">Link to reverse image</Label>
                        </div>
                        <Input id="reverse" name="reverse" type="text" required/>
                    </div>
                </WrapperFirstLine>
                <WrapperFirstLine>
                    <div>
                        <div>
                            <Label htmlFor="year">Year of issue</Label>
                        </div>
                        <Input id="year" name="year" type="text" required/>
                        <div>
                            <Label htmlFor="price">Price</Label>
                        </div>
                        <Input id="price" name="price" type="text" required/>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="longDesc">Long description</Label>
                        </div>
                        <Area id="longDesc" name="longDesc" type="text" required ></Area>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="type">Type</Label>
                        </div>
                        <Input id="type" name="type" type="text" required/>
                    </div>
                </WrapperFirstLine>
                <WrapperFirstLine>
                    <div>
                        <div>
                            <Label htmlFor="country">Country</Label>
                        </div>
                        <Input id="country" name="country" type="text" required/>
                        <div>
                            <Label htmlFor="metal">Metal</Label>
                        </div>
                        <Input id="metal" name="metal" type="text" required/>
                    </div>
                    <WrapperLastLine>
                        <div>
                            <div>
                                <Label htmlFor="quality">Quality of the coin</Label>
                            </div>
                            <Input id="quality" name="quality" type="text" required/>
                            <div>
                                <Label htmlFor="weight">Weight</Label>
                            </div>
                            <Input id="weight" name="weight" type="text" required/>
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

const mapStateToProps = (state) => {
    return {
        login: state.login
    };
  };
  
const mapDispatchToProps = {
    addCoin: addCoin
  };

export default connect(mapStateToProps, mapDispatchToProps)(Add);

