import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

export default function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-row gap-4 ${className}`}>
      {/* App Store Badge */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="הורידו ב-App Store"
        className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 transition-opacity hover:opacity-80"
      >
        {/* Apple Icon */}
        <svg
          className="h-8 w-8 shrink-0"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col text-white text-right">
          <span className="text-[10px] leading-tight opacity-80">הורידו ב-</span>
          <span className="text-base font-semibold leading-tight">App Store</span>
        </div>
      </a>

      {/* Google Play Badge */}
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play-ב זמין"
        className="inline-flex items-center gap-3 rounded-xl bg-black px-5 py-3 transition-opacity hover:opacity-80"
      >
        {/* Play Store Icon */}
        <svg
          className="h-8 w-8 shrink-0"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm10.89 9.48l2.706-2.707-11.4-6.588 8.694 9.295zm2.706 1.412L14.5 15.413l-8.694 9.295 11.4-6.588-2.706-2.707zM20.514 10.88l-2.39 1.38 2.39 1.38a.999.999 0 0 0 0-1.76l-2.39-1z" />
        </svg>
        <div className="flex flex-col text-white text-right">
          <span className="text-[10px] leading-tight opacity-80">זמין ב-</span>
          <span className="text-base font-semibold leading-tight">Google Play</span>
        </div>
      </a>
    </div>
  );
}
