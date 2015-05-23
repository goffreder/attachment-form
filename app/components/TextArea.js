export default class TextArea extends React.Component {
    render() {
        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <textarea id={this.props.name} name={this.props.label} />
            </div>
        );
    }
}
