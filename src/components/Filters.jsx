import React from 'react'

export default function Filters({ tags, toggleFilter, clearFilters, setPhase, PHASES }) {
  return (
    <div className="box">
        <ul className="tag-select">
            {tags.map((tag) => <li key={tag.id}><label className="filter-label">
                <input type="checkbox" checked={tag.active} onChange={() => toggleFilter(tag.id)}/>
                {tag.name}
                </label></li>)}
        </ul>
        <div className="controls">
            <button onClick={() => clearFilters()}><i className="fa-solid fa-trash"></i></button>
            <button onClick={() => setPhase(PHASES.QUOTE)}>Apply</button>
        </div>
    </div>
  )
}
