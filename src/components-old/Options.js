// let userOption = ['نظر یک', 'نظر دو', 'نظر سه', 'نظر چهار',]
import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption'

// const Options =(props)=> 
// (
//     <div>
//         <button onClick={props.handleDeleteOptions}>حذف نظرات</button>
//         <h3>نظرات ثبت شده</h3>
//         <AddOption Options={Options} handleDeleteOption={props.handleDeleteOption} />
//     </div>
// )
class Options extends React.Component {
    render() {
        let Options = this.props.Options;

        return (
            <div className="option-body">
                <button className="option-delete-btn option-commen-btn" onClick={this.props.handleDeleteOptions}>حذف نظرات</button>
                <h3>نظرات ثبت شده</h3>
                <AddOption Options={Options} handleDeleteOption={this.props.handleDeleteOption} />
            </div>
        )
    }
}

export default Options;