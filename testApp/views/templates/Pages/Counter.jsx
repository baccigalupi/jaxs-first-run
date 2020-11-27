import jsx from '../../../../lib/jsx'

import ProfileAside from '../Layout/ProfileAside'

const Counter = ({counter}) => {
  return (
    <div class='col'>
      <div class='p-4'>
        <h1 class='pb-4'>Let's increment something</h1>
        <form class='container py-4' onSubmit='no-op'>
          <div class='row '>
            <button class='btn btn-success col' onClick='data:incrementCounter'>+</button>
            <h2 class='text-center col-10'>
              <span class='border pad-6'>{counter}</span>
            </h2>
            <button class='btn btn-danger col' onClick='data:decrementCounter'>-</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default () => {
  return (
    <div class='row'>
      <Counter />
      <ProfileAside />
    </div>
  )
}
