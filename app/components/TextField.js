export default class TextField extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input id={this.props.name} type="text" name={this.props.label} />
            </div>
        );
    }
}
