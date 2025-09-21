# Audio Leaks - Confidential Audio Archive

A satirical website themed around humorous audio 'leaks', styled professionally in the vein of Wikileaks or The Intercept. This project is created purely for entertainment purposes and features fictional content.

## 🎯 Features

- **Professional UI Design**: Clean, serious interface matching Wikileaks/The Intercept aesthetic
- **Topic Browsing**: Organize leaks by categories and topics
- **Audio Playback**: Full-featured audio player with controls
- **Transcripts**: Complete text transcripts for all audio content
- **Image Support**: Related images for each leak
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Automatic dark/light mode support
- **Three.js Effects**: Subtle visual enhancements and animations

## 🛠 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd audio-leaks
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure Supabase:
   - Create a new Supabase project
   - Run the SQL schema from `supabase/schema.sql`
   - Add your Supabase URL and anon key to `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

### Topics Table
- `id` (UUID, Primary Key)
- `name` (VARCHAR, Topic name)
- `description` (TEXT, Topic description)
- `created_at` (TIMESTAMP)

### Leaks Table
- `id` (UUID, Primary Key)
- `topic_id` (UUID, Foreign Key to topics)
- `title` (VARCHAR, Leak title)
- `audio_url` (TEXT, URL to audio file)
- `transcript` (TEXT, Audio transcript)
- `image_url` (TEXT, Optional image URL)
- `synopsis` (TEXT, Leak summary)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## 🎨 Design Philosophy

The website follows a professional, serious design language inspired by:
- **Wikileaks**: Red color scheme, confidential document aesthetic
- **The Intercept**: Clean typography, investigative journalism feel
- **Government Archives**: Official document styling and layout

## 📱 Pages

- **Home**: Overview of topics and recent leaks
- **Topics**: Browse all available topics
- **Topic Detail**: View all leaks in a specific topic
- **Leak Detail**: Individual leak with audio player, transcript, and metadata
- **About**: Information about the platform and technology

## 🔧 Customization

### Adding New Leaks
1. Add audio files to the `public/audio/` directory
2. Add images to the `public/images/` directory
3. Insert new records into the `leaks` table via Supabase dashboard

### Styling
- Modify `src/app/globals.css` for global styles
- Update component styles in individual component files
- Customize colors in `tailwind.config.js`

### Three.js Effects
- Modify `src/components/ThreeBackground.tsx` for 3D effects
- Add new Three.js components as needed

## 🚨 Important Notes

- **Satirical Content**: This website is for entertainment purposes only
- **Fictional Data**: All content is fictional and created for comedic purposes
- **No Real Leaks**: No actual private conversations or confidential data
- **Educational Use**: Suitable for learning web development and database integration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Disclaimer**: This is a satirical project created for entertainment and educational purposes. All content is fictional and no real confidential information is used or distributed.# marcoantonio
