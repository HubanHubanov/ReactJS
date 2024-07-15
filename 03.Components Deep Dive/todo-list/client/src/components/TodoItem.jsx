export default function TodoItem(props) {
    const classes = ["todo"];

    if(props.isCompleted) {
        classes.push("is-completed");
    }
    console.log(classes);
    
    return (
        <tr className={classes.join(" ")}>
            <td>{props.text}</td>
            <td>Complete</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => props.onStatusChange(props.id)}>Change status</button>
            </td>
      </tr>
    );
}