class Search extends React.Component {
  render () {
    return (
      <div>
        <div>Text: {this.props.text}</div>
      </div>
    );
  }
}

Search.propTypes = {
  text: React.PropTypes.string
};
