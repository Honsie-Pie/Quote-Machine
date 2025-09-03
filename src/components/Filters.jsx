import React from 'react'

export default function Filters({ tags, toggleFilter, clearFilters }) {
  return (
    <div className="box">
        <div className="tag-select">
            {tags.map((tag) => <label className="filter" key={tag.id}>
                <input type="checkbox" checked={tag.active} onChange={() => toggleFilter(tag.id)}/>
                {tag.name}
                </label>)}
        </div>
        <div className="controls">
            <button onClick={() => console.log(tags)}>Print tags</button>
            <button onClick={() => clearFilters()}>Remove all filters</button>
        </div>
    </div>
  )
}
