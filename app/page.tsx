export default function HomePage() {
  return (
    <div className="shell">
      <aside className="rail">
        <div className="brand">Color</div>
        <nav className="nav">
          <span data-active="true">Inbox</span>
          <span>Home</span>
          <span>Library</span>
          <span>Settings</span>
        </nav>
      </aside>
      <main className="main">
        <p className="kicker">Monday brief</p>
        <h1>Inbox</h1>
        <article className="card">
          <p>1:1 with Nico · 10:30–11:00</p>
          <p className="meta">Temporary Dessn trial UI. Not the Otherhalf production repo.</p>
        </article>
      </main>
    </div>
  );
}
