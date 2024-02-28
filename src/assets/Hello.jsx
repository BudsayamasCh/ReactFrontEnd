
const Hello = ({name , message}) => {
  console.log(name , message);

  return (
    <div className="Hello">
      <h1>Hello {name} , {message}</h1>
    </div>
  )
}

export default Hello

import PropTypes from 'prop-types'
Hello.prototype = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


