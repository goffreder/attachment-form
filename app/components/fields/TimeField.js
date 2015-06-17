export default class TimeField extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.name !== this.props.name && nextProps.label !== this.props.label;
    }

    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    id={this.props.name}
                    type="time"
                    name={this.props.name}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}

TimeField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired
};
