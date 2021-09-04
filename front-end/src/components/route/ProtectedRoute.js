import React, { Component, Fragment } from "react"
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

    const { isAuthenticated, loading, user, error } = useSelector(state => state.auth)
    const alert = useAlert()
    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={props => {
                        if (isAuthenticated === false) {
                            alert.error(error)
                            return <Redirect to='/login' />
                        }

                        if (isAdmin === true && user.role !== 'admin') {
                            return <Redirect to="/" />
                        }

                        return <Component {...props} />
                    }}
                />
            )}
        </Fragment>
    )
}
export default ProtectedRoute