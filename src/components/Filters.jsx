import React from 'react';
import { PHASES } from '../App';
import ControlButton from './ControlButton';

export default function Filters({ tags, toggleFilter, clearFilters, setPhase }) {
  return (
    <div className="box">
        <ul className="tag-select">
            {tags.map((tag) => <li key={tag.id}><label className="filter-label">
                <input type="checkbox" checked={tag.active} onChange={() => toggleFilter(tag.id)}/>
                {tag.name}
                </label></li>)}
        </ul>
        <div className="controls">
            <ControlButton type="icon" func={() => clearFilters()} message="fa-trash"/>
            <ControlButton type="message" func={() => setPhase(PHASES.QUOTE)} message="Apply" />
        </div>
    </div>
  )
}
