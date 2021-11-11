import './ListItem.css'

const ListItem = (props) =>{

    return(
        <div>{props.username} ({props.userAge})</div>
    )
}

export default ListItem