
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/question/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/question/leader-board' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' activeClassName='active'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}