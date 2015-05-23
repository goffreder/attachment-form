export default class DateField extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input id={this.props.name} type="date" name={this.props.label} />
            </div>
        );
    }
}
