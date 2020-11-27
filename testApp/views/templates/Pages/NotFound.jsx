import jsx from '../../../../lib/jsx'

export default () => {
  return (
    <div class='p-4'>
      <h1>Ohai! Are you lost?</h1>
      <p>
        I'm not sure where you were heading, but you have arrived at a
        missing destintation.
      </p>
      <p>
        Maybe you want to go <a href='/' onClick='navigate'>home</a>?
      </p>
    </div>
  )
}

