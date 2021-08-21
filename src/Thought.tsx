// @ts-nocheck
import React, { useState, useEffect } from 'react';

export function Thought(props) {
    const { thought, removeThought } = props;

    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    useEffect(() => {
        let remaining = thought.expiresAt - Date.now()
        let myTimeout = setTimeout(() => {
            removeThought(thought.id);
        },remaining )
        return () => clearTimeout(myTimeout);
    },[thought])

    return (
        <li className="Thought">
            <button
                aria-label="Remove thought"
                className="remove-button"
                onClick={handleRemoveClick}
            >
                &times;
            </button>
            <div className="text">{thought.text}</div>
        </li>
    );
}
