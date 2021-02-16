import React from 'react';

export default function MouseForm() {
  return (
    <div>
        Mouse Form!
      <form action="">
        <p>
          <label htmlFor="post">
          Post: <input
              id="post"
              type="radio"
              name="method"
              value="POST"
            />
          Name: <input id="post" type="text"/>
          Fur Color: <input id="post" type="text"/>
          Tail Length: <input id="post" type="number"/>
          </label>
        </p>
        <p>
          <label htmlFor="get">
          Get: <input
              id="get"
              type="radio"
              name="method"
              value="GET"
            />
          </label>
        </p>
        <p>
          <label htmlFor="put">
          Update: <input
              id="put"
              type="radio"
              name="method"
              value="PUT"
            />
          ID: <input id="put" type="text"/>
          Name: <input id="put" type="text"/>
          Fur Color: <input id="put" type="text"/>
          Tail Length: <input id="put" type="number"/>
          </label>
        </p>
        <p>
          <label htmlFor="delete">
          Delete: <input
              id="delete"
              type="radio"
              name="method"
              value="PUT"
            />
          ID: <input id="delete" type="text"/>
          </label>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}
