import TextField from './components/TextField';
import TextArea from './components/TextArea';
import DateField from './components/DateField';
import TimeField from './components/TimeField';

var template = {
    fields : [{
        name: 'pippo',
        label: 'Pippo',
        type: 'text'
    }, {
        name: 'pluto',
        label: 'Pluto',
        type: 'textarea'
    }, {
        name: 'topolino',
        label: 'Topolino',
        type: 'date'
    }, {
        name: 'paperino',
        label: 'Paperino',
        type: 'time'
    }]
}

class AttachmentForm extends React.Component {
    render() {
        var fields = this.props.template.fields.map((field) => {
            var input;

            switch(field.type) {
                case 'text':
                    input = <TextField key={field.name} name={field.name} label={field.label} />;
                    break;
                case 'textarea':
                    input = <TextArea key={field.name} name={field.name} label={field.label} />;
                    break;
                case 'date':
                    input = <DateField key={field.name} name={field.name} label={field.label} />;
                    break;
                case 'time':
                    input = <TimeField key={field.name} name={field.name} label={field.label} />;
                    break;
            }

            return input;
        });

        return (
            <div className="attachment-form">
                <form>
                    {fields}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

React.render(
    <AttachmentForm template={template} />,
    document.getElementById("app")
);
