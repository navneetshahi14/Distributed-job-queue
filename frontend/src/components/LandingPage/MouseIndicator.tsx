import { motion, useAnimation } from "motion/react";
import { Mouse } from "lucide-react";
import { useEffect } from "react";

const MouseIndicator = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Entry animation
      await controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.6 },
      });

      // Step 2: Infinite bounce
      controls.start({
        y: [0, 12, 0, 6, 0],
        transition: {
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={controls}
      className="absolute bottom-[10%]"
    >
      <Mouse />
    </motion.div>
  );
};

export default MouseIndicator;
