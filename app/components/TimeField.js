export default class TimeField extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input id={this.props.name} type="time" name={this.props.label} />
            </div>
        );
    }
}
