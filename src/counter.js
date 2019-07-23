class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {//تعریف پیش فرض متغیر ها
            Visibilty: false,
            myName: "حسین شیخی"
        }
    }
    handleToggleVisibilty() {
        this.setState((oldVal) => {
            // debugger22222
            return {
                Visibilty : !oldVal.Visibilty
            };
        })
        console.log("handleToggleVisibilty ",this.state.Visibilty)
    }
    render() {
        return (
            <div>
                { this.state.Visibilty ? <h1>1متن</h1> : <h1>2متن</h1>} 
                <button onClick={this.handleToggleVisibilty}>show / hide</button>
            </div>
        )
    }
}
console.log("counter is run ..");

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.decCounter = this.decCounter.bind(this);
        this.acCounter = this.acCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);

        this.state = {//تعریف پیش فرض متغیر ها
            count: 0,
            myName: "حسین شیخی"
        }
    }
    renameObj() {
        this.state.myName = "رضا باقری"
        this.setState({
            count: this.state.count + 1
        })

    }
    decCounter() {
        this.state.myName = "رضا باقری"
        this.setState({
            count: this.state.count + 1
        })
        // this.setState((oldValue) => {
        //     return {
        //         count: oldValue.count + 1
        //     }
        // })
    }
    acCounter() {
        this.setState((oldValue) => {
            return {
                count: oldValue.count - 1
            }
        })
    }
    resetCounter() {
        this.setState((oldValue) => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.myName}</h1>
                <h1>شمارنده : {this.state.count}</h1>

                <button onClick={this.decCounter}>+1</button>
                <button onClick={this.acCounter}>-1</button>
                <button onClick={this.resetCounter}>بازنشانی</button>

                <input type="text" defaultValue={this.state.myName} />
                <button onClick={this.renameObj}>تغییر نام </button>

            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"))