import React from 'react'

import "./styles.css";

interface Props {
    label: string;
    href: string | null;
}

const Button: React.FC<Props> = ({ label }) => {
    return (
        <button className="pagination-btn">{label}</button>
    );
}

export default Button;