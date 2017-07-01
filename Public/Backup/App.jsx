var Welcome = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'default message'            
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name            
        };
    },
    BtnClick: function (e) {
        e.preventDefault();
        var user = this.refs.user.value;
        
        this.setState({
            name: user           
        });
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;
        
        return (
            <div>
                <h1>Hello {name} from {dept} </h1>
                <form onSubmit={this.BtnClick}>
                    <input type="text" ref="user" />                    
                    <button>Set Name</button>
                </form>
            </div>

        )
    }
})

















ReactDOM.render(
    <Welcome name="props" message="main message" dept="demo" />, document.getElementById('app'));