'use client'

import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/JaiadityaMathur Resume.pdf'; // Use exact filename with space
    link.download = 'JaiadityaMathur-Resume.pdf'; // Download name can be different
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4" onClick={handleDownload}>
      <HackerBtn label='Download Resume' />
    </div>
  )
}

export default DownLoadResumeBtn
