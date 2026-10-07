import PropTypes from 'prop-types'
export default function FirstComponent(props) {
  return (
    <div>
      <h1>Hello, First Component! {props.name}</h1>
    </div>
  )
}

FirstComponent.propTypes = {
  name: PropTypes.string,
}
