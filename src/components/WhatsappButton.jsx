"use client";
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  // Auto-open after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  const mobileNo = '+91-9310962725';
  const message = `Hi, I have a query.%0ARef:${
    typeof window !== 'undefined' ? window.location.href : ''
  }`;
  const whatsappLink = `https://api.whatsapp.com/send?phone=${mobileNo}&text=${message}`;

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {/* Chat Box - appears above the button */}
      {open && (
     <div
  className={`transition-all duration-500 ease-in-out transform w-[400px] mb-3 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white
    ${open ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}
  `}
>
  {/* Header */}
  <div className="bg-[#075E54] text-white flex items-center p-4">
    <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full border border-white">
      <img
        src="/assets/images/logo/only-R.png"
        alt="logo"
        className="w-10 h-10 object-cover rounded-full"
      />
    </div>
    <div className="ml-4 flex-1">
      <div className="text-base font-semibold">Rankinventiv</div>
      <div className="text-sm text-green-200">online</div>
    </div>
    <button
      onClick={() => setOpen(false)}
      className="text-white text-3xl ml-2 cursor-pointer"
    >
      ×
    </button>
  </div>

  {/* Message */}
  <div className="p-5 bg-[#e5ddd5]">
    <div className="relative max-w-sm bg-white rounded-lg px-6 py-3 shadow text-base text-gray-900">
      <div className="font-semibold text-gray-600 text-[14px] mb-1">
        Rankinventiv
      </div>
      <div>
        Hi,<br />
        How can I help you?
      </div>
      <div
        className="absolute top-0 -left-4"
        style={{
          width: 0,
          height: 0,
          borderBottom: '20px solid transparent',
          borderRight: '20px solid white',
        }}
      />
    </div>
  </div>

  {/* Footer */}
  <div className="bg-white px-5 py-4 text-center">
    <button
      onClick={() => window.open(whatsappLink, '_blank')}
      className="bg-[#25D366] hover:bg-[#1EBE5D] cursor-pointer text-white px-5 py-3 rounded-full text-sm transition"
    >
      Start chat
    </button>
  </div>
</div>

      )}

      {/* WhatsApp Icon Button - stays at the bottom */}
      <button
         onClick={() => setOpen(!open)}
        className="bg-[#25D366] hover:bg-[#1EBE5D] cursor-pointer text-white p-2 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Chat with us"
      >
        <svg
          className="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path
            fillRule="evenodd"
            d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
          />
        </svg>
          {/* Show text only when modal is closed */}
  {!open && (
    <span className="ml-2 mr-4 font-medium text-lg">
      Chat with us
    </span>
  )}
      </button>
    </div>
  );
}
