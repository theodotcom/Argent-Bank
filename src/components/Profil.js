import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileInfos } from '../api/api'
import { modifyProfile } from '../api/api'

const Profil = () => {
    const store = useSelector((state) => state)

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const firstName = store.firstName
    const lastName = store.lastName
    const token = store.token

    useEffect(() => {
        dispatch(getProfileInfos(token))
    })

    const editOn = () => {
        setEdit(true)
    }
    // CLOSE MODALE
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
