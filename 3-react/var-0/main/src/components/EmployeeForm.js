import { useState, useEffect } from 'react'

function EmployeeForm({ onAdd }) {
  // TODO

  return (
    <div>
      <input type='text' placeholder='name' onChange={(evt) => setName(evt.target.value)} />
      <input type='text' placeholder='job' onChange={(evt) => setJob(evt.target.value)} />
      <input type='text' placeholder='salary' onChange={(evt) => setSalary(evt.target.value)} />
      <input type='button' value='add' onClick={() => onAdd({name, job, salary})} disabled={!isValid} />
    </div>
  )
}

export default EmployeeForm