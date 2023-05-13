import './menu.css'


const MenuBar = () => {

  return (
    <header className='menu_container'>
      <div className='menu_links'>
        <nav className='link'><a href="/">Ключи OpenAI</a></nav>
        <nav className='link'><a href="/errors">Ошибки</a></nav>
      </div>
    </header>
  );
};
export default MenuBar;