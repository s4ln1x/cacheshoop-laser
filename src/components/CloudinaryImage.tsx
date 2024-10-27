import React from 'react';
import { CLOUDINARY_CONFIG } from '../config';

interface CloudinaryImageProps {
  publicId: string;
  width?: number;
  alt: string;
  className?: string;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({ publicId, width = 800, alt, className }) => {
  const cloudinaryUrl = `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/${CLOUDINARY_CONFIG.defaultParams}/w_${width}/${encodeURIComponent(publicId)}`;

  return (
    <img 
      src={cloudinaryUrl}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default CloudinaryImage;
