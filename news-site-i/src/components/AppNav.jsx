function AppNav({ items }) {
  // helps eliminate the need to keep iterating props.items
  // const {items} = props
  
  const HandleNavBarClick = (value) => {
    console.log(value)
  }
  
  return (
    <nav>
      {items.map((item) => (
        <a href="#" key={ item.label } onClick={ () => HandleNavBarClick(item.value) }> { item.label } </a>
      ))}
    </nav>
  )
}

export default AppNav;
