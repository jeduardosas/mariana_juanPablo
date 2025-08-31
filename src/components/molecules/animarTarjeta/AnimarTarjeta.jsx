import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "../card/Card.jsx";;

const AnimarTarjeta = ({ children, ajustes }) => {
  const { ref, inView } = useInView({
    threshold: 0.4, // 50% de visibilidad
    triggerOnce: true, // solo una vez
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card ajustes={ajustes}>
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimarTarjeta;
