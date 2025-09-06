import React from 'react'

export default function Filters({ tags, toggleFilter, clearFilters, setPhase, PHASES }) {
  return (
    <div className="box">
        <div className="tag-select">
            {tags.map((tag) => <label className="filter" key={tag.id}>
                <input type="checkbox" checked={tag.active} onChange={() => toggleFilter(tag.id)}/>
                {tag.name}
                </label>)}
        </div>
        <div className="controls">
            <button onClick={() => clearFilters()}><i className="fa-solid fa-trash"></i></button>
            <button onClick={() => setPhase(PHASES.QUOTE)}>Apply</button>
        </div>
    </div>
  )
}
