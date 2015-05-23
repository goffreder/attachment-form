var TextField = React.createClass({
    displayName: 'TextField',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement(
                'div',
                { className: "attachment-field" },
                React.createElement(
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                ),
                React.createElement(
                    'input',
                    {
                        id: this.props.name,
                        type: 'text',
                        name: this.props.label
                    }
                )
            )
        );
    }
});

var TextArea = React.createClass({
    displayName: 'TextArea',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement(
                'div',
                { className: "attachment-field" },
                React.createElement(
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                ),
                React.createElement(
                    'textarea',
                    {
                        id: this.props.name,
                        name: this.props.label
                    }
                )
            )
        );
    }
});

var DateField = React.createClass({
    displayName: 'DateField',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('div', {
                className: "attachment-field"
            },
                React.createElement('label', {
                    htmlFor: this.props.name,
                }, this.props.label),
                React.createElement('input', {
                    id: this.props.name,
                    type: 'date',
                    name: this.props.label
                })
            )
        );
    }
});

var TimeField = React.createClass({
    displayName: 'TimeField',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement(
                'div',
                { className: "attachment-field" },
                React.createElement(
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                ),
                React.createElement(
                    'input',
                    {
                        id: this.props.name,
                        type: 'time',
                        name: this.props.label
                    }
                )
            )
        );
    }
});

var CheckBoxField = React.createClass({
    displayName: 'CheckBoxField',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement(
                'div',
                { className: "attachment-field" },
                React.createElement(
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                ),
                React.createElement(
                    'input',
                    {
                        id: this.props.name,
                        type: 'checkbox',
                        name: this.props.label
                    }
                )
            )
        );
    }
});

var AttachmentForm = React.createClass({
    displayName: "AttachmentForm",
    propTypes: {
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
    },
    render: function() {
        var fields = this.props.template.fields.map(function(field) {
            var input, props = {
                key: field.name,
                name: field.name,
                label: field.label,
            };

            switch(field.type) {
                case 'text':
                    input = React.createElement(TextField, props);
                    break;
                case 'textarea':
                    input = React.createElement(TextArea, props);
                    break;
                case 'date':
                    input = React.createElement(DateField, props);
                    break;
                case 'time':
                    input = React.createElement(TimeField, props);
                    break;
                case 'checkbox':
                    input = React.createElement(CheckBoxField, props);
                    break;
            }

            return input;
        });

        return (
            React.createElement(
                'div',
                { className: 'attachment-form' },
                React.createElement(
                    'form',
                    null,
                    fields,
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Submit'
                    )
                )
            )
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
    }, {
        name: 'gastone',
        label: 'Gastone',
        type: 'checkbox'
    }]
};

React.render(
    React.createElement(
        AttachmentForm,
        { template: template }
    ),
    document.getElementById("app")
);
