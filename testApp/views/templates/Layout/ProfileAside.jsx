import jsx from '../../../../lib/jsx'

import Aside from './RightAside'

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

export default ({token}) => {
  return (
    <Aside>
      <ProfileContent token={token} />
    </Aside>
  )
}