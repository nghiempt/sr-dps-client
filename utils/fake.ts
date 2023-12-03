const categories = [
  {
    id: 1,
    name: 'Social Media',
    thumbnail: 'https://fiddle.skia.org/i/@skpaint_shader_gpu.png',
    key: 'social-media',
  },
  {
    id: 2,
    name: 'Photography',
    thumbnail: 'https://fiddle.skia.org/i/@skpaint_shader_gpu.png',
    key: 'photography',
  },
  {
    id: 3,
    name: 'Health',
    thumbnail: 'https://fiddle.skia.org/i/@skpaint_shader_gpu.png',
    key: 'health',
  }
]

const apps = [
  {
    id: 1,
    name: 'Facebook',
    description: 'Whether you’re looking for a spark of inspiration with reels or want to dive deeper into something you already love with Marketplace or in groups, you can discover ideas, experiences and people that fuel your interests and help you make progress on the things that matter to you on Facebook.',
    categoryId: 1,
    thumbnail: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=w480-h960-rw',
    key: 'facebook',
    numberOfDownloads: 1000000000,
    rating: 4.5,
    developer: 'Facebook Inc.',
    link: 'https://facebook.com',
    status: 1,
    dataSafety: 'https://play.google.com/store/apps/datasafety?id=com.facebook.katana&hl=en_US',
    privacyPolicy: 'https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0',
  },
  // youtube
  {
    id: 2,
    name: 'Youtube',
    description: 'Get the official YouTube app on Android phones and tablets. See what the world is watching -- from the hottest music videos to what’s popular in gaming, fashion, beauty, news, learning and more. Subscribe to channels you love, create content of your own, share with friends, and watch on any device.',
    categoryId: 1,
    thumbnail: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s96-rw',
    key: 'youtube',
    numberOfDownloads: 5000000000,
    rating: 4.5,
    developer: 'Google LLC',
    link: 'https://youtube.com',
    status: 2,
    dataSafety: 'https://play.google.com/store/apps/datasafety?id=com.facebook.katana&hl=en_US',
    privacyPolicy: 'privacyPolicy',
  },
  // telegram
  {
    id: 3,
    name: 'Telegram',
    description: 'Pure instant messaging — simple, fast, secure, and synced across all your devices. Over 400 million active users. FAST: Telegram is the fastest messaging app on the market, connecting people via a unique, distributed network of data centers around the globe.',
    categoryId: 1,
    thumbnail: 'https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=w480-h960-rw',
    key: 'telegram',
    numberOfDownloads: 500000000,
    rating: 4.5,
    developer: 'Telegram FZ-LLC',
    link: 'https://telegram.org/',
    status: 1,
    dataSafety: 'https://play.google.com/store/apps/datasafety?id=com.facebook.katana&hl=en_US',
    privacyPolicy: 'privacyPolicy',
  },
  // instagram
  {
    id: 4,
    name: 'Instagram',
    description: 'Bringing you closer to the people and things you love. — Instagram from Facebook. Connect with friends, share what you’re up to, or see what\'s new from others all over the world. Explore our community where you can feel free to be yourself and share everything from your daily moments to life\'s highlights.',
    categoryId: 1,
    thumbnail: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w480-h960-rw',
    key: 'instagram',
    numberOfDownloads: 1000000000,
    rating: 4.5,
    developer: 'Facebook',
    link: 'https://instagram.com/',
    status: 1,
    dataSafety: 'https://play.google.com/store/apps/datasafety?id=com.facebook.katana&hl=en_US',
    privacyPolicy: 'privacyPolicy',
  },
  // tiktok
  {
    id: 5,
    name: 'TikTok',
    description: 'TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you.',
    categoryId: 1,
    thumbnail: 'https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA=w480-h960-rw',
    key: 'tiktok',
    numberOfDownloads: 1000000000,
    rating: 4.5,
    developer: 'TikTok Pte. Ltd.',
    link: 'https://tiktok.com/',
    status: 1,
    dataSafety: 'https://play.google.com/store/apps/datasafety?id=com.facebook.katana&hl=en_US',
    privacyPolicy: 'privacyPolicy',
  },
];

export const fake = {
  categories,
  apps,
};