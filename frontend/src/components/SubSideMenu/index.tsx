interface Props {
  title: string,
  menuList: {name: string, url: string}[]
}
const SubSideMenu = (props: Props) => {
  const {title, menuList} = props;

  return (
    <div className="w-1/4 px-4 pb-4 lg:block md:hidden sm: hidden">
      <div>
        <div className="text-center px-4 pb-3 border-b border-gray-600">
          <h1 className="uppercase text-gray-600 m-0 text-xl">{title}</h1>
          <span className="text-gray-500 text-sm">GSAL</span>
        </div>
      </div>
      <div className="">
        <ul className="m-0 text-center list-none">
          {/* <li className="text-xs pb-[1px] border-b border-gray-400 leading-8">
            <a>menu1</a>
          </li> */}
          {menuList.map(menu => <li key={menu.name} className="text-xs pb-[1px] border-b border-gray-400 leading-8">
            <a href={menu.url}>{menu.name}</a>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default SubSideMenu
