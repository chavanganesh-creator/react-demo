import React from 'react'

export default function Spinner() {
    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100
             d-flex justify-content-center align-items-center"
            style={{ zIndex: 9999, backgroundColor: "rgba(255,255,255,0.7)" }}
        >
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
