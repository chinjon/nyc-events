import {ChangeEvent, FormEvent, useState} from 'react';

export default function Search({query = ""}: {query: string}) {
  const [userQuery, setQuery] = useState(query)

  function updateQuery(e: ChangeEvent<HTMLInputElement>) {
    console.log(e?.target?.value)
    setQuery(e?.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(userQuery, 'submit')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="searchQueryInput" placeholder="enter search query" onChange={updateQuery} />
        <button>Search</button>
      </form>
    </>
  )
}