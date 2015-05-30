import TextField from './fields/TextField';
import TextArea from './fields/TextArea';
import DateField from './fields/DateField';
import TimeField from './fields/TimeField';
import CheckBoxField from './fields/CheckBoxField';

export default class AttachmentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        };
    }

    toggleDisabled() {
        this.setState({
            disabled: !this.state.disabled
        });
    }

    render() {
        var fields = this.props.template.fields.map((field) => {
            var input;

            switch(field.type) {
                case 'text':
                    input = (
                        <TextField
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            disabled={this.state.disabled}
                        />
                    );
                    break;
                case 'textarea':
                    input = (
                        <TextArea
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            disabled={this.state.disabled}
                        />
                    );
                    break;
                case 'date':
                    input = (
                        <DateField
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            disabled={this.state.disabled}
                        />
                    );
                    break;
                case 'time':
                    input = (
                        <TimeField
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            disabled={this.state.disabled}
                        />
                    );
                    break;
                case 'checkbox':
                    input = (
                        <CheckBoxField
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            disabled={this.state.disabled}
                        />
                    );
                    break;
            }

            return input;
        });

        return (
            <div className="attachment-form">
                <form>
                    {fields}
                    <button type="submit">Submit</button>
                    <button type="button" onClick={this.toggleDisabled.bind(this)}>
                        {this.state.disabled ? 'Enable' : 'Disable'}
                    </button>
                </form>
            </div>
        );
    }
}

AttachmentForm.propTypes = {
    template: React.PropTypes.shape({
        fields: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string.isRequired,
            type: React.PropTypes.oneOf([
                'text',
                'textarea',
                'date',
                'time',
                'checkbox'
            ]).isRequired
        })).isRequired
    }).isRequired
};
