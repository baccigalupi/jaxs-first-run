import jsx from '../../../../lib/jsx'

import ProfileAside from '../Layout/ProfileAside'

const Counter = (props) => {
  return (
    <div class='col'>
      <div class='p-4'>
        <h1 class='pb-4'>Let's increment something</h1>
        <form class='container py-4' onSubmit='no-op'>
          <div class='row '>
            <button class='btn btn-success col' onClick='data:incrementCounter'>+</button>
            <h2 class='text-center col-10'>
              <span class='border px-3 py-1'>{props.counter}</span>
            </h2>
            <button class='btn btn-danger col' onClick='data:decrementCounter'>-</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default (props) => {
  console.log('rendering Counter view')
  return (
    <div class='row'>
      <Counter counter={props.counter}/>
      <ProfileAside />
    </div>
  )
}
