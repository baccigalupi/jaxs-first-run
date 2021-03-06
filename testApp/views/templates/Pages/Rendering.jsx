import { jsx } from '../../../../lib/jaxs'


import ProfileAside from '../Layout/ProfileAside'

const SongStuff = () => {
  return (
    <div class='col'>
      <div class='p-4'>
        <h1>Hey now, hey now!</h1>
        <p>
          There is freedom within, there is freedom without<br />
          Try to catch the deluge in a paper cup<br />
          There's a battle ahead, many battles are lost<br />
          But you'll never see the end of the road<br />
          While you're traveling with me
        </p>
        <p>
          Hey now, hey now<br />
          Don't dream it's over<br />
          Hey now, hey now<br />
          When the world comes in<br />
          They come, they come<br />
          To build a wall between us<br />
          We know they won't win
        </p>
        <p>... etc.</p>
      </div>
    </div>
  )
}

export default () => {
  return (
    <div class='row'>
      <SongStuff />
      <ProfileAside />
    </div>
  )
}