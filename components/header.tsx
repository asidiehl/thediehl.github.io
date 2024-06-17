export const Header = ({ path }: { path: string }) => {
  if (!path) {
    if (typeof window !== 'undefined') {
      path = window.location.pathname;
    }
  }

  const pageMap = new Map<string, string>([
    ['/', 'About'],
    ['work', 'Work'],
    ['home', 'Home'],
    ['music', 'Music'],
  ]);

  const pages: string[] = [];

  for (const page of pageMap.keys()) {
    const pageName = pageMap.get(page);
    let color = '#FFFFFF';
    if (path == page) {
      color = '#009999';
    }
  }

  return (
    <header
      className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
      id="headerNav"
    >
      <nav className="flex justify-center gap-x-8">
        <p>
          <a href="/">About</a>
        </p>
        <p>
          <a href="work">Work</a>
        </p>
        <p>
          <a href="home">Home</a>
        </p>
        <p>
          <a href="music">Music</a>
        </p>
      </nav>
    </header>
  );
};
