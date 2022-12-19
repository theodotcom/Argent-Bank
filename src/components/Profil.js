import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileInfos } from '../api/api'
import { modifyProfile } from '../api/api'

import store from '../redux/store'

import { usersReducer } from '../redux/reducer/reducer'

const Profil = () => {
    const { profile } = usersReducer.actions
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const firstName = state.firstName
    const lastName = state.lastName
    const token = state.token
    const [edit, setEdit] = useState(false)

    // const checkDetails = async (e) => {
    //     e.preventDefault()
    //     const data = await getProfileInfos(firstName, lastName)
    //     store.dispatch(profile({ data }))
    // }

    useEffect(() => {
        const data = getProfileInfos(firstName, lastName)
        store.dispatch(profile({ data }))
    })

    const editOn = () => {
        setEdit(true)
    }
    const editOff = () => {
        setEdit(false)
    }

    const editProfile = (e) => {
        e.preventDefault()
        const editFirstName = document.querySelector('#editFirstName').value
        const editLastName = document.querySelector('#editLastName').value
        dispatch(modifyProfile(token, editFirstName, editLastName))
        setEdit(false)
    }

    return (
        <div>
            {!edit ? (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {firstName}
                        {lastName}
                    </h1>
                    <button className="edit-button">
                        onClick={editOn}
                        Edit Name
                    </button>
                </div>
            ) : (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        <div className="zone-edit">
                            <input
                                type="text"
                                placeholder={firstName}
                                id="editFirstName"
                            />
                            <input
                                type="text"
                                placeholder={lastName}
                                id="editLastName"
                            />
                        </div>
                        <div className="edit-btn">
                            <button
                                className="edit-button sheen-btn sheen"
                                onClick={editProfile}
                            >
                                &nbsp;Save&nbsp;
                            </button>
                            <button
                                className="edit-button sheen-btn sheen"
                                onClick={editOff}
                            >
                                Cancel
                            </button>
                        </div>
                    </h1>
                </div>
            )}
        </div>
    )
}

export default Profil
