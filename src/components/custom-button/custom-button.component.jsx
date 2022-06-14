
import './custom-button.styles.scss'

export const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children}
    </button>
)