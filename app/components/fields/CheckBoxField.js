export default class CheckBoxField extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    id={this.props.name}
                    type="checkbox"
                    name={this.props.name}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}

CheckBoxField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired
};
