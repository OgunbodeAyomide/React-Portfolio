import { motion, stagger } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';




const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            <motion.section>
                <Component />
            </motion.section>
        );
    }
    return HOC;
};

export default SectionWrapper;