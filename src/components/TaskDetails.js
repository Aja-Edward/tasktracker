import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Button from './Button'
import Loader from './Loader'

const TaskDetails = () => {
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    const { pathname } = useLocation()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if (res.status === 404) {
                navigate('/')
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    }, [navigate, params.id])

    return loading ? (
        <Loader />
    ) : (
        <div className='viewdetail-page'>
            <p>{pathname}</p>
            <h4>{task.text}</h4>
            <p>{task.day}</p>
            <Button onClick={() => {
                navigate(-1)
            }} text='Go Back' />
        </div>
    )
}

export default TaskDetails
