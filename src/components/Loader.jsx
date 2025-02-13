// components/Loader.jsx
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

const Loader = ({ isLoading }) => {
  const spinValue = useMotionValue(0);

  if (!isLoading) return null;

  return (
    <div className="fixed bg-white inset-0 flex items-center justify-center z-50">
      <motion.div
        className="w-[128px] h-[128px] bg-transparent border-4 border-l-[#FFC20C] rounded-full flex items-center justify-center"
        style={{ rotate: spinValue }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <motion.div
        className="fixed z-50"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity }}
      >
        <Image src="/assets/logo.png" alt="Loading logo" width={100} height={100} />
      </motion.div>
    </div>
  );
};

export default Loader;
