import './BtnContainer.scss';
import Cart from '@mui/icons-material/AddShoppingCart';
import Button from '../Button/Button.js'

function BtnContainer() {
    return (
        <div className='container'>
            <Button text="Default" deFault="default" />
            <Button text="Default" outline="outline" />
            <Button text="Default" disableShadow="disableShadow" />
            <Button text="Default" disable="disable" />
            <Button text="Default" icons={<Cart />} position="start"/>
            <Button text="Default" size="lg" />
            <Button text="Danger" />
            <Button text="Secondary" />
            {/* <Button text="Secondary" deFault="deFault" /> */}
        </div>
    )
}

export default BtnContainer