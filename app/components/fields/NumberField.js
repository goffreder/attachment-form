export default class NumberField extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input
                    id={this.props.name}
                    type="number"
                    name={this.props.label}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}

NumberField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired
};
