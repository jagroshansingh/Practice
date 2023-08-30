"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ScrapedImage: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  let newSrc=imageSrc

    useEffect(() => {
      axios('http://localhost:8000/scrape')
        // .then(response => response.json())
        // .then(blob => {
        //   const src = URL.createObjectURL(blob);
        //   setImageSrc(src);
        // });
        .then(res=>setImageSrc(res.data))
    }, []);

  return (
    <div>
      <h1>Scraped Image</h1>
      {imageSrc && <img src={newSrc} width={'300px'} alt="Scraped" />}
    </div>
  );
};

export default ScrapedImage;
