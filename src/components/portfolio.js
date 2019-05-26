import React from 'react';
import { Link} from "react-router-dom";

const Portfolio = () => (
    <div>
        <h2>Portfolio</h2>
        <Link to="edit/1">Page1</Link>
        <Link to="edit/2">Page 2</Link>
    </div>
);

export default Portfolio;