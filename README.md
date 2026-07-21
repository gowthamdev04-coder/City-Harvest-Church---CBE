# City Harvest Church

Initial MERN-ready website for **City Harvest Church**. The frontend is complete enough to review now; database, contact submissions, authentication, events CMS and payments remain intentionally disconnected.

## Structure

```
client/                 React + Vite public website
  src/components/       Shared layout and navigation
  src/pages/            Home and starter route pages
  src/data/             Temporary content (replace with API later)
  src/styles/           Global responsive design system
server/                 Express API foundation
  src/controllers/      Future API behavior
  src/routes/           API endpoints
  src/models/           Future Mongoose models
docs/                   Project documentation
assets/                 Brand assets, photos and uploaded media (future)
legacy/static-prototype/ Original HTML/CSS prototype, preserved for reference
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The API health endpoint will be available at `http://localhost:5000/api/health`.

## Next backend milestones

1. Add MongoDB connection and Mongoose models for events, sermons, ministries and contact messages.
2. Connect the contact and first-visit forms with validation, spam protection and email notifications.
3. Add an admin area for church staff to manage events, sermons and home-page content.
4. Integrate a chosen secure giving provider—never handle card data directly.

Service times, location and ministry copy are placeholders ready for the church’s final details.

## Content placeholders

The homepage includes clearly labelled temporary copy for the leadership invitation, member story, first-visit FAQs, kids information and Sunday expectations. Replace these in `client/src/pages/Home.jsx` when the church provides final content.
