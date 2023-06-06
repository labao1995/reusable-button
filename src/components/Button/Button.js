import './Button.scss';

function Button({color, size, position, text, icons, outline, deFault, disable, disableShadow}) {
  console.log(color)
  return (
    <div className='Btn-item'>
      <button className={`${outline} ${deFault} ${disable} ${disableShadow} ${position} ${size} ${text}`}>
        <span> {icons} </span>
        <span>{text}</span>
      </button>
    </div>
  )
}

export default Button;