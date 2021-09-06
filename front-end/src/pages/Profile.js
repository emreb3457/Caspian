import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert'
import MetaData from '../components/layout/MetaData';
const Home = () => {
    const dispatch = useDispatch();
    const alert = useAlert()

    const { loading } = useSelector(state => state.auth)

    useEffect(() => {


    }, [dispatch])

    return (
        <div className="profile">
            <MetaData title="Profile" />

        </div>

    )

}
export default Home