var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
                <p>{this.props.country}</p>
                <p>{this.props.email}</p>
                <p>{this.props.password}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var country = this.refs.country.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        updates.email = email;
        updates.password = password;
        updates.country = country;
        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name" />
                </div>
                <div>
                    <input type="text" ref="email" placeholder="Enter email" />
                </div>
                <div>
                    <input type="text" ref="password" placeholder="Enter password" />
                </div>
                <div>
                    <input type="text" ref="country" placeholder="Enter country" />
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message!',
            country: 'This is the default country!',
            password: 'This is the default password!',
            email: 'This is the default email!'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message,
            email: this.props.email,
            password: this.props.password,
            country: this.props.country
        };
    },
    handleNewData: function (updates) {
        console.log(updates);
        this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message} country={this.state.country} password={this.state.password} email={this.state.email} />
                <GreeterForm onNewData={this.handleNewData} />
            </div>
        );
    }
});

var firstName = 'Amarjeet';

ReactDOM.render(
    <Greeter name={firstName} />,
    document.getElementById('app')
);
