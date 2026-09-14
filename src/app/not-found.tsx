'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#0f172a',
      fontFamily: 'Inter, sans-serif',
      color: '#f8fafc',
      padding: '2rem'
    }}>
      {/* Decorative Blob background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(129, 140, 248, 0.05) 50%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          background: 'rgba(30, 41, 59, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontSize: '8rem',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '1rem',
            fontFamily: 'Outfit, sans-serif',
            background: 'linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.05em'
          }}
        >
          404
        </motion.div>

        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          fontWeight: 700,
          fontFamily: 'Outfit, sans-serif',
          color: '#f8fafc'
        }}>
          Lost in Space?
        </h1>

        <p style={{
          color: '#94a3b8',
          fontSize: '1.1rem',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
          maxWidth: '400px',
          margin: '0 auto 2.5rem auto'
        }}>
          The page you are looking for has been moved, deleted, or doesn&apos;t exist in this universe.
        </p>

        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          style={{ display: 'inline-block' }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
              color: '#ffffff',
              padding: '0.85rem 2rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: 'Outfit, sans-serif'
            }}
          >
            <Home size={18} />
            Back to Safety
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
