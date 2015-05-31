export default class TextField extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    id={this.props.name}
                    type="text"
                    name={this.props.name}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}

TextField.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired
};
