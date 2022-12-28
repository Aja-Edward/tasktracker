import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Task = ({ task, onDelete, onToggle }) => {
    return (
        // <div className="task" onDoubleClick={() => onToggle(task.id)}>
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>

            {/* <h3>  My Task<FaTimes /></h3> */}
            <h3> {task.text}
                <FaTimes
                    onClick={(id) => onDelete(task.id)}
                    style={{ color: 'red', cursor: 'pointer', }}
                />
            </h3>
            <p> {task.day}</p>
            <Link to={`/task/${task.id}`} className="mylink"> View Details</Link>
        </div>
    )
}

export default Task
