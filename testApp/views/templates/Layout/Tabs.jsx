import jsx from '../../../../lib/jsx'

export const TabNavItem = ({href, currentPath, description}) => {
  const active = currentPath === href ? ' active' : ''
  const classList = `nav-link${active}`
  return (
    <li class='nav-item'>
      <a href={href} class={classList}>{description}</a>
    </li>
  )
}

export const TabBar = ({children}) => {
  return <ul class='nav nav-tabs'>{children}</ul>
}