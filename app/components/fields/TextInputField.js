import ExtendProptypes from '../../utils/Extending';

import InputField from './InputField';

@ExtendProptypes
export default class TextInputField extends InputField {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    }

    componentWillMount() {
        console.log('mounting');
    }

    render() {
        this.validate();

        return (
            <div className="attachment-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    id={this.props.name}
                    type="text"
                    name={this.props.name}
                />
            </div>
        );
    }
}
