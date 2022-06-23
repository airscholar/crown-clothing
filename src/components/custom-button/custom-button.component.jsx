
import './custom-button.styles.scss'

export const CustomButton = ({ children, isGoogleSignin, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)