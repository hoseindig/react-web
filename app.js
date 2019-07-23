
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p> {props.SubTitle}  </p>
        </div>
    )
};

Header.defaultProps = {
    title: "متن پیش فرض",
    SubTitle: "عنوان پیش فرض  "
}


class Action extends React.Component {
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

//header

// let userOption = ['نظر یک', 'نظر دو', 'نظر سه', 'نظر چهار',]
class Options extends React.Component {
    render() {
        let Options = this.props.Options;

        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>حذف نظرات</button>
                <h3>نظرات ثبت شده</h3>
                <AddOption Options={Options} handleDeleteOption={this.props.handleDeleteOption} />
            </div>
        )
    }
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOptionfn = this.addOptionfn.bind(this);
    }

    addOptionfn(e) {
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
            <div>
                <ul>
                    {this.props.Options.map((item, index) => (
                        <li key={index}>{item}
                            <button onClick={(e) => {
                                this.props.handleDeleteOption(item)

                            }} >حذف </button>
                        </li>

                    ))}
                </ul>


                <form onSubmit={this.addOptionfn}>
                    <input type="text" name="option" />
                    <button  >نظر جدید </button>
                </form>

            </div>
        )
    }
}

const addOption = (e) => {
    e.preventDefault()
    // console.log("Submitfn");
    const option = e.target.elements.option.value;

    if (option) {
        console.log("option", option);
        Options.push(option)
        e.target.elements.option.value = "";
    }
    renderMyForm()
    // debugger
}
class MySiteApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handelePick = this.handelePick.bind(this)
        this.handleAddOtion = this.handleAddOtion.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: ['نظر یک', 'نظر دو', 'نظر سه', 'نظر چهار',]
        }
    }

    handleDeleteOptions() {
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
    handleDeleteOption(optionToRemove) {
        console.log("handleDeleteOption", optionToRemove);
        this.setState((preState) => ({
            options: preState.options.filter((option) => {//option aray itm
                return optionToRemove !== option;//if option !=optionToRemove return true => remove option in array  
            })
        }));

    }

    componentDidMount() {
        console.log("componentDidMount ");
        const jsonObj = localStorage.getItem("options");
        const options = JSON.parse(jsonObj)

        console.log("DidMount options:", options);
        if (options)
            this.setState(() => ({ options }))
    }
    componentDidUpdate(preProps, preState) {
        console.log("componentDidUpdate ");

        if (preState.options.length !== this.state.options.length) {
            const jsonObj = JSON.stringify(this.state.options)
            localStorage.setItem("options", jsonObj);
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount ");
    }

    handleAddOtion(option) {
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
    handelePick() {
        const randomnum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomnum];
        alert(option)
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
                <Options disable={this.state.options.length > 0}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleAddOtion={this.handleAddOtion}
                    handleDeleteOption={this.handleDeleteOption}
                    Options={this.state.options}
                />
            </div>
        )
    }
}

const renderMyForm = () => {
    ReactDOM.render(<MySiteApp />, document.getElementById("app"))
}

renderMyForm()