import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

const TypingEffect = ({ text, delay }) => {
  const characters = text.split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          style={{
            display: "inline-block",
            overflow: "hidden",
            width: char === " " ? "0.5em" : "auto" // set width for spaces
          }}
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {char !== ' ' ? char : "\u00A0" }
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TypingEffect text='Hello World' />}></Route>
      </Routes>
    </>
  );
}
