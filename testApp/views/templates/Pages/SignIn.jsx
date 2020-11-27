import jsx from '../../../../lib/jsx'

const SignInForm = () => {
  return (
    <form onSubmit='no-op' class='p-4'>
      <h1 className='pb-4'>Sign in</h1>
      <p>No good reason, but it's just something that people do.</p>
      <p>Use any old username and password.</p>
    </form>
  )
}

export default () => {
  return (
    <div class='row'>
      <SignInForm />
    </div>
  )
}
