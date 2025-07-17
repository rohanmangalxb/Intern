# To-Learn:

- 1
  - useEffect
  - Dependency Array and re-renders
- 2
  - Fetching data using fetch() or axios
  - handle async inside useEffect
  - Storing data using useState
  - Handling loading and error states

## _useEffect_ :

It's a react hook used to handle side effects in functionaling components.
Side effects involves:

- fetching data from api
- direct DOM manipulation
- subscribing/unsubscibing to events
- setting up timers

-- Syntax:

<pre>useEffect(() => {
    // code here to render after side effect

}, [value_that_triggers_this_after_change])
</pre>

<hr>

| Dependency Array   | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| `[]`               | Runs **once** after initial render (like `componentDidMount`) |
| `[count]`          | Runs on **initial render** and **whenever `count` changes**   |
| _(No array given)_ | Runs on **every render** (default behavior)                   |

## Fetching DATA :

### Fetch using fetch() :

<pre>
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
</pre>

<hr>
<br>

- `Using **Fetch** with useState and useEffect :`
<pre>
import React, { useEffect, useState } from 'react';

const FetchWithFetch = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const getData = async () => {
try {
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
if (!res.ok) throw new Error("Network response was not ok");
const json = await res.json();
setData(json);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
};

    getData();

}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

return (
<ul>
{data.slice(0, 5).map(post => (
<li key={post.id}>{post.title}</li>
))}
</ul>
);
};

export default FetchWithFetch;

</pre>

`#` Fetch Returns a Promise
<br>
`#` manually convert response to json
<br>
`#` handle errors manually

### Fetch Data using axios :

<pre>
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchWithAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default FetchWithAxios;

</pre>



| Feature                       | `fetch()`                      | `axios`                         |
| ----------------------------- | ------------------------------ | ------------------------------- |
| Built-in?                     | ✅ Yes (native JS)              | ❌ No (needs installation)       |
| JSON parsing                  | ❌ Manual (`res.json()`)        | ✅ Automatic (`res.data`)        |
| Error handling                | ❌ Must check `res.ok` manually | ✅ Catches HTTP errors directly  |
| Request/Response Interceptors | ❌ No                           | ✅ Yes                           |
| Simpler syntax                | ❌ Slightly verbose             | ✅ Cleaner and easier to use     |
| Timeout support               | ❌ No native support            | ✅ Built-in                      |
| Older browser support         | ❌ Limited                      | ✅ Better support out of the box |
