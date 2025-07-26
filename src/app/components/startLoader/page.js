'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from "./anim/page"
import { usePathname } from 'next/navigation';

const wordsMap = {
  default: ["Hello","नमस्ते" ,"ನಮಸ್ಕಾರ","Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"],
  work: ["Hello", "Work"],
  about: ["Hello", "About"],
  contact: ["Hello", "Contact"],
  // add more as needed
};

export default function HelloLoader({ page }) {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});
    const pathname = usePathname();

    // Normalize page key from pathname
    function getPageKey(page, pathname) {
      if (page) return page;
      let clean = pathname.replace(/^\/+|\/+$/g, ''); // remove leading/trailing slashes
      if (clean.startsWith('pages/')) clean = clean.slice(6);
      if (clean === '' || clean === 'home' || clean === undefined) return 'default';
      const first = clean.split('/')[0];
      if (wordsMap[first]) return first;
      return 'default';
    }
    const pageKey = getPageKey(page, pathname);
    const words = wordsMap[pageKey] || wordsMap.default;

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    // Reset index to 0 on pathname or pageKey change
    useEffect(() => {
        setIndex(0);
    }, [pageKey]);

    useEffect( () => {
        if(index == words.length - 1) return;
        const timeout = setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 250)
        return () => clearTimeout(timeout);
    }, [index, words])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && 
            <>
                <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}