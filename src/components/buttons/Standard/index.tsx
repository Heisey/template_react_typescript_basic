import { rules, types } from 'core'
import styles from './styles'

const Standard: types.FC<rules.IButtonsStandardProps> = (props) => {

  const {
    children = 'Button Text'
  } = props
  
  return (
    <styles.Standard>
      {children}
    </styles.Standard>
  )
}

export default Standard