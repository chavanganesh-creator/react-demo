import PropTypes from 'prop-types'
export default function FirstComponent(props) {
  return (
    <div>
     <h1 className={`my-2 text-decoration-underline text-${props.colorMode===null || props.colorMode  === 'dark' ? 'light' : 'dark'}`}>Hello, First Component! {props.name}</h1>
    </div>
  )
}

FirstComponent.propTypes = {
  name: PropTypes.string,
  colorMode: PropTypes.string
}
