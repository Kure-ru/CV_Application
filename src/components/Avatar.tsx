import React, { useState, useRef, ChangeEvent } from 'react';

function Avatar() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  return (
    <div className='profile__container'>
      <button onClick={handleClick}>Select Image</button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {avatar && <img className='profile_pic' src={URL.createObjectURL(avatar)} alt="photo de profil" />}
    </div>
  );
}

export default Avatar;