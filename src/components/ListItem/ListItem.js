import styles from './ListItem.module.css'

const ListItem = (props) =>{

    return(
        <div className={styles["list-item"]} >{props.username} ({props.userAge})</div>
    )
}

export default ListItem