import jsx from '../../../../../lib/jsx'

const TabNavItem = ({href, currentPath, description}) => {
  const active = currentPath === href ? ' active' : ''
  const classList = `nav-link${active}`
  return (
    <li class='nav-item'>
      <a href={href} class={classList}>{description}</a>
    </li>
  )
}

const TabBar = ({children}) => {
  return <ul class='nav nav-tabs'>{children}</ul>
}

const Layout = ({children}) => {
  return (
    <div class="container mt-2">
      <TabBar>
        <TabNavItem
          currentPath='/'
          description='Rendering'
          href='/'
        />
        <TabNavItem
          href='/counter'
          description='State change'
          currentPath='/'
        />
        <TabNavItem
          href='/navigation'
          description='Navigation'
          currentPath='/'
        />
        <TabNavItem
          href='/sign-in'
          description='Sign in'
          currentPath='/'
        />
      </TabBar>
      <div class='border-right border-left border-bottom'>
        {children}
      </div>
    </div>
  )
}

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

const ProfileArea = ({children}) => {
  return (
    <section class='bg-light col-3'>
      <div class='p-4'>
        {children}
      </div>
    </section>
  )
}

const ProfileContent = ({token}) => {
  if (token) { return <SignedInMessage /> }

  return <SignInPrompt />
}

const SignedInMessage = () => {
  return (
    <>
      <h2>Heya, looks like you are signed in.</h2>
      <p>Awesome sauce! Nothing to do here.</p>
    </>
  )
}

const SignInPrompt = () => {
  return (
    <>
      <h2>Ohai, we don't know you yet</h2>
      <p>Want to <a href='/sign-in'>sign in</a>?</p>
    </>
  )
}

const BasicRendering = () => {
  return (
    <div class='row'>
      <SongStuff />
      <ProfileArea>
        <ProfileContent />
      </ProfileArea>
    </div>
  )
}


export default () => {
  return (
    <Layout>
      <BasicRendering />
    </Layout>
  )
}
