import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiArrowUp } from 'react-icons/fi';
import { useAppStore } from '@/store';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useAppStore();
  const positionClass = language === 'ar' ? 'right-8' : 'left-8';

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          }}
          whileTap={{ scale: 0.95 }}
          title={language === 'en' ? 'Go to top' : 'العودة للأعلى'}
          className={`fixed bottom-8 ${positionClass} z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B8C51] text-white shadow-xl transition-all duration-300 hover:bg-[#0F4229] hover:scale-105 focus:outline-none group`}
        >
          <FiArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
