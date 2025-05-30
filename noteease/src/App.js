import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  // Use preferred color scheme for initial theme
  const getStartingTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  };

  const [theme, setTheme] = useState(getStartingTheme);

  // Apply the app theme at the root level
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    []
  );

  // Keyboard shortcut accessibility for FAB: Ctrl+Alt+N
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.altKey && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        handleAddNote();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  // PUBLIC_INTERFACE
  function handleAddNote() {
    // Placeholder (replace with real note adding functionality)
    alert('Add new note dialog would open here!');
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" style={{ color: "var(--primary)" }}>✦</span> NoteEase
            </div>
            <button
              className="theme-toggle"
              aria-label="Toggle light/dark theme"
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              onClick={toggleTheme}
            >
              {theme === 'light'
                ? <span aria-hidden="true" role="img">🌙</span>
                : <span aria-hidden="true" role="img">🌞</span>
              }
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <section className="glassy-container" aria-label="Note List Container">
            <header className="notes-header">
              <h1 style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                margin: 0,
                color: "var(--primary)"
              }}>Your Notes</h1>
              {/* Optionally: tag/category/filter controls */}
            </header>
            {/* Placeholder for notes list */}
            <div className="description" style={{ marginTop: 12, marginBottom: 8 }}>
              No notes yet. Click the action button to add one!
            </div>
            <ul aria-label="List of notes" style={{ listStyle: 'none', padding: 0 }}>
              {/* Future: Map over notes list to display note previews */}
            </ul>
          </section>
        </div>
        {/* Floating Action Button */}
        <button
          className="fab"
          aria-label="Add new note"
          title="Add new note (Ctrl+Alt+N)"
          onClick={handleAddNote}
        >
          <span aria-hidden="true" style={{fontSize: '2.2em', fontWeight:600}}>+</span>
        </button>
      </main>
    </div>
  );
}

export default App;