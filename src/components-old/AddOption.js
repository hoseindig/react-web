import React from 'react';
import renderMyForm from './renderMyForm';
export default class AddOption extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.addOptionfn = this.addOptionfn.bind(this);
    // }

    addOptionfn=(e)=> {
        e.preventDefault()
        console.log("Submitfn");

        const optionGet = e.target.elements.option.value.trim();
        console.log(optionGet);
        if (optionGet) {
            console.log("option", optionGet);
            this.props.Options.push(optionGet)
            e.target.elements.option.value = "";
            console.log(this.props.Options);

            const jsonObj = JSON.stringify(this.props.Options)
            localStorage.setItem("options", jsonObj);
        }
        renderMyForm()
    }
    render() {
        return (
            <div >
                <ul className="option-ul">
                    {this.props.Options.map((item, index) => (
                        <li className="option" key={index}>
                        <p className="option-text">{(index+1)+" ."+item} </p>
                        
                            <button className="option-btn" onClick={(e) => {
                                this.props.handleDeleteOption(item)

                            }} >حذف </button>
                        </li>

                    ))}
                </ul>


                <form onSubmit={this.addOptionfn}>
                    <input className="option-textbox" type="text" name="option" />
                    <button  className="option-add-btn option-commen-btn">نظر جدید </button>
                </form>

            </div>
        )
    }
}