const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
  getDefaultProps() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    // render DOM here to avoid Foundation DOM update conflicts with React
    const {title, message} = this.props;
    const modalDOMMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    // use jQuery selector to capture DOM as string
    const $modal = $(ReactDOMServer.renderToString(modalDOMMarkup));
    // add jQuery DOM obj to ReactDOM
    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render() {
    return (
      <div>

      </div>
    );
  }
});

module.exports = ErrorModal;
