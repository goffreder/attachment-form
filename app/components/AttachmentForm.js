import serialize from 'form-serialize';

import userActions from '../actions/userActions';

import TextField from './fields/TextField';
import TextArea from './fields/TextArea';
import DateField from './fields/DateField';
import DateTimeField from './fields/DateTimeField';
import TimeField from './fields/TimeField';
import CheckBoxField from './fields/CheckBoxField';
import NumberField from './fields/NumberField';

export default class AttachmentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        };

        this.toggleDisabled = this.toggleDisabled.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleDisabled() {
        this.setState({
            disabled: !this.state.disabled
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const form = document.getElementById(`${this.props.template.name}-form`);
        userActions.userSaveObject(this.props.template.name, serialize(form, { hash: true }));
    }

    render() {
        const fields = this.props.template.fields.map((field) => {
            let input;

            switch (field.type) {
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
                case 'datetime':
                    input = (
                        <DateTimeField
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
                case 'number':
                    input = (
                        <NumberField
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            disabled={this.state.disabled}
                        />
                    );
                    break;
                default :
                    break;
            }

            return input;
        });

        return (
            <div className="attachment-form">
                <h3>{this.props.template.label}</h3>
                <form id={`${this.props.template.name}-form`} onSubmit={this.handleSubmit}>
                    {fields}
                    <button type="submit">Submit</button>
                    <button type="button" onClick={this.toggleDisabled}>
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
                'checkbox',
                'number',
                'datetime'
            ]).isRequired
        })).isRequired,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    }).isRequired
};
