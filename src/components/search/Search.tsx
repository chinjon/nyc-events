import {ChangeEvent, FormEvent, useState} from 'react';

export default function Search() {

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <button>Search</button>
      </form>
    </>
  )
}