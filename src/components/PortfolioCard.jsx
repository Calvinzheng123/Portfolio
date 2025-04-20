import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioCard() {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Calvin Zheng</h1>
      <p>
        Data Science @ UNC Charlotte | Data Analytics Co-op @ Collins Aerospace
      </p>

      <div className="social-buttons">
        <a href="https://github.com/calvinzheng123" target="_blank" rel="noopener noreferrer" className="github">
          <Github size={20} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/czheng05/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <Linkedin size={20} /> LinkedIn
        </a>
        <a href="mailto:calvin.zhng12@gmail.com" className="email">
          <Mail size={20} /> calvin.zhng12@gmail.com
        </a>
        <a href="/Calvin Resume.pdf" download className="resume">
          <FileDown size={20} /> Download Resume
        </a>
      </div>

      <div className="skills">
        <p>💻 Python, SQL, R, React</p>
        <p>📊 Projects: LionAPI | TFT Roll Calculator | Champions League Model | Expected Assists Model</p>
        <p>🔗 Explore my work below!</p>
      </div>
    </motion.div>
  );
}