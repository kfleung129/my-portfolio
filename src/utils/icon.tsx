import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaDocker, FaLinux, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs, TbBrandReactNative, TbSql } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { SiTensorflow, SiSpring } from "react-icons/si";
import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { BsStack, BsFillChatRightTextFill } from "react-icons/bs";

const iconMapper: any = {
  "Home": AiFillHome,
  "About": IoPersonSharp,
  "Project": BsStack,
  "Contact": BsFillChatRightTextFill,
  "JavaScript": IoLogoJavascript,
  "React.js": FaReact,
  "Python": FaPython,
  "Next.js": TbBrandNextjs,
  "React Native": TbBrandReactNative,
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "Node.js": FaNodeJs,
  "Java": FaJava,
  "Git": FaGitAlt,
  "SQL": TbSql,
  "C++": BiLogoCPlusPlus,
  "Tensorflow": SiTensorflow,
  "Docker": FaDocker,
  "Linux": FaLinux,
  "SpringBoot": SiSpring,
  "Vue": FaVuejs
}

export function getIcon (name: string): IconType {
  return iconMapper[name];
} 