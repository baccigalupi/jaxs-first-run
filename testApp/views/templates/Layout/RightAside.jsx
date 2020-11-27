import jsx from '../../../../lib/jsx'

export default ({children}) => {
  return (
    <section class='bg-light col-3 border-left'>
      <div class='p-4'>
        {children}
      </div>
    </section>
  )
}
