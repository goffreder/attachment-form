var TextField = React.createClass({
    displayName: 'TextField',
    render: function() {
        return (
            React.createElement('div', {
                className: "attachment-field"
            }, [
                React.createElement('label', {
                    htmlFor: this.props.name,
                }, this.props.label),
                React.createElement('input', {
                    id: this.props.name,
                    type: 'text',
                    name: this.props.label
                })
            ])
        );
    }
});

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
};

var AttachmentForm = React.createClass({
    displayName: "AttachmentForm",
    render: function() {
        var fields = this.props.template.fields.map(function(field) {
            var input;

            switch(field.type) {
                case 'text':
                    input = React.createElement(TextField, {
                        key: field.name,
                        name: field.name,
                        label: field.label,
                    });
                    break;
            }
        });

        return (
            React.createElement('div', {
                className: 'attachment-form'
            }, React.createElement('form', {},
                fields.concat([
                    React.createElement('button', {
                        type: 'submit'
                    }, 'Submit')
                ]))
            )
        );
    }
});


// class AttachmentForm extends React.Component {
//     render() {
//         var fields = this.props.template.fields.map((field) => {
//             var input;
//
//             switch(field.type) {
//                 case 'text':
//                     input = <TextField key={field.name} name={field.name} label={field.label} />;
//                     break;
//                 // case 'textarea':
//                 //     input = <TextArea key={field.name} name={field.name} label={field.label} />;
//                 //     break;
//                 // case 'date':
//                 //     input = <DateField key={field.name} name={field.name} label={field.label} />;
//                 //     break;
//                 // case 'time':
//                 //     input = <TimeField key={field.name} name={field.name} label={field.label} />;
//                 //     break;
//             }
//
//             return input;
//         });
//
//         return (
//             <div className="attachment-form">
//                 <form>
//                     {fields}
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

React.render(
    React.createElement(AttachmentForm, {
        template: template
    }),
    document.getElementById("app")
);
