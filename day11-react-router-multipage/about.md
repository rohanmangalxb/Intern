# To LEARN:

- Client-side routing
- react-router-dom
- BrowserRouter, Routes, Route and Link
- Switching pages without refreshing
- Route matching (/, /about, /contact)

- Nested routes
- 404 Not found Page

## Client-side routing :

This technique allows rendering/navigation of different layouts of views or 'pages' occur directly in the web browser without actually refreshing the entire page.

- Initial fetch loads all data and resources given (html, css, js)
- Js dynamically updates the content of the existing page instead of re-rendering entire page from the server
- Server only contacted for data and not html page

## react-router-dom :

In a basic React app, everything runs on a single HTML file. You can’t navigate to a new page (like /about, /contact) without reloading or manually changing components. react-router-dom solves this by:

- Mapping URL paths to components (/home → '<'Home />)

- Allowing dynamic routing (/user/:id)

- Handling navigation via links (no full page reload)

## BrowserRouter, Routes and Route, Link

### 1 ) BrowserRouter:

It is the router itself. It uses html5 history API(pushState, replaceState, popState event) to keep UI in sync with URL

<pre>
// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  '<'React.StrictMode>
    '<'BrowserRouter>
      '<'App />
    '<'/BrowserRouter>
  '<'/React.StrictMode>
);
</pre>

### 2 ) Routes and Route:

It is a crucial component that relpaces Switch from earlier versions. Used to group Route components. When the URL changes, Routes looks through all its child Route components and renders the first one that matches the current URL.

<pre>
// App.js
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    '<'Routes>
      '<'Route path="/" element={'<'HomePage />} />
      '<'Route path="/about" element={'<'AboutPage />} />
      '<'Route path="/contact" element={'<'ContactPage />} />
    '<'/Routes>
  );
}
</pre>

- `Routes` : List of multiple Route.
- `Route` : This component defines a single route. Props:
    - `Path`: The URL path that this route should match.
    - `element`: The React component that should be rendered when the path matches.


### 3 ) Link:

It is used to create navigation links within the application. Similar to anchor tag but prevents full page reload. When a Link is clicked, React Router intercepts the click and updates the URL using the History API, then the Routes component re-evaluates and renders the appropriate component.

```jsx
<pre>
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
</pre>
```