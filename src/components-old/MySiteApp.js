
import React from 'react';
import ReactDOM from 'react-dom';

import Action from './Action';
import Header from './Header';
import Options from './Options';
import renderMyForm from './renderMyForm';
import OptionModal from './OptionModal';


export default class MySiteApp extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handelePick = this.handelePick.bind(this)
    //     // this.handleAddOtion = this.handleAddOtion.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     // this.state = {
    //     //     options: ['نظر یک', 'نظر دو', 'نظر سه', 'نظر چهار',]
    //     // }
    // }
    state = {
        options: ['نظر یک', 'نظر دو', 'نظر سه', 'نظر چهار',],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        console.log("handleDeleteOptions");
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({
            options: []
        }))

    }
    handleDeleteOption = (optionToRemove) => {
        console.log("handleDeleteOption", optionToRemove);
        this.setState((preState) => ({
            options: preState.options.filter((option) => {//option aray itm
                return optionToRemove !== option;//if option !=optionToRemove return true => remove option in array  
            })
        }));
    }
    handleOkModal = () => {
        console.log("handleOkModal");
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    componentDidMount = () => {
        console.log("componentDidMount ");
        const jsonObj = localStorage.getItem("options");
        const options = JSON.parse(jsonObj)

        console.log("DidMount options:", options);
        if (options)
            this.setState(() => ({ options }))
    }
    componentDidUpdate = (preProps, preState) => {
        console.log("componentDidUpdate ");

        if (preState.options.length !== this.state.options.length) {
            const jsonObj = JSON.stringify(this.state.options)
            localStorage.setItem("options", jsonObj);
        }
    }
    componentWillUnmount = () => {
        console.log("componentWillUnmount ");
    }

    handleAddOtion = (option) => {
        console.log("handleAddOtion");
        // this.setState((prevState) => {
        //     return {
        //         option: prevState.option.concat(option)
        //     }
        // })
        this.setState((prevState) => ({
            option: prevState.option.concat(option)
        }))
    }
    handelePick = () => {
        const randomnum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomnum];
        console.log(option);
        console.log(option);
        this.setState(() => ({
            selectedOption: option
        }))
    }
    render() {
        const siteTitle = "شهروند سپاری";
        const siteSubTitle = " خدمات";
        // const u serOption = ['نظر یک', 'نظر دو', 'نظر سه', 'نظر چهار',]

        return (
            <div>
                <Header SubTitle={siteSubTitle} title={siteTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handelePick={this.handelePick}
                />
                <div className="left-panel">
                    <Options disable={this.state.options.length > 0}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleAddOtion={this.handleAddOtion}
                        handleDeleteOption={this.handleDeleteOption}
                        Options={this.state.options}
                    />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleOkModal={this.handleOkModal}
                />


            </div>
        )
    }
}