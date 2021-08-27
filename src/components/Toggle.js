import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false);
    return <motion.div layout classname="question" onClick={() => setToggle(!toggle)}>
        <motion.h4 layout>{title}</motion.h4>
        {toggle ? children: ""}
        <motion.div className="faq-line"></motion.div>    
    </motion.div>;
};

export default Toggle;