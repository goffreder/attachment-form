export default class TextArea extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <textarea
                    id={this.props.name}
                    name={this.props.name}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}

TextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired
};
