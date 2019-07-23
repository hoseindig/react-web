import React from 'react';  


export default class Action extends React.Component {
    handleFormSave() {
        alert("handleFormSave")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleFormSave}>ذخیره</button>
                <button>ویرایش</button>
                <button>انصراق</button>
                <button onClick={this.props.handelePick}>what shoud i do ?</button>

            </div>
        )
    }
}