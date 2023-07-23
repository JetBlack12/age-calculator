

const FormInput = (props) => {
  const {label, placeholder, id, onChange, ...otherProps} = props
  return (
    <section>
        <label>{label}</label>
        <input placeholder={placeholder} onChange={onChange}/>
    </section>
  )
}

export default FormInput