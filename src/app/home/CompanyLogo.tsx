import { motion } from "framer-motion";
import Link from "next/link";

const CompanyLogo = ({
  variants,
  image,
  src,
  fav,
}: {
  variants: any;
  image: string;
  src: string;
  fav?: boolean;
}) => (
  <motion.div
    whileHover={{
      scale: 1.5,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.9 }}
    variants={variants}
  >
    <Link href={src}>
      <img
        src={image}
        alt={image}
        className={`h-20 w-32 lg:h-32 kg:w-40 p-2 ${
          fav && "border-2 border-success rounded-full"
        } `}
      ></img>
    </Link>
  </motion.div>
);

export default CompanyLogo;
