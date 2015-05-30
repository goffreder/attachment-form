export default class DateField extends React.Component {
    shouldComponentUpdate (nextProps) {
        return nextProps.name !== this.props.name && nextProps.label !== this.props.label;
    }

    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input
                    id={this.props.name}
                    type="date"
                    name={this.props.label}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}

DateField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired
};
