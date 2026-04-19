'use client';

import useSWR from 'swr';
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const fetcher = url => fetch(url).then(res => res.json());

export default function ViewTracker({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher, { revalidateOnFocus: false });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));

  useEffect(() => {
    if (!data?.views) return;
    const controls = animate(count, data.views, { duration: 1, ease: 'easeOut' });
    return controls.stop;
  }, [data?.views, count]);

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.span>{rounded}</motion.span> views
    </motion.span>
  );
}