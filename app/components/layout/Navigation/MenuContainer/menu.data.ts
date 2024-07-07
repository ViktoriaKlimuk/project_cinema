import { IMenu } from "./menu.interface";

export const firstMenu: IMenu = {
	// title:'Menu',
  items: [
   //  {
   //    // icon: "MdOutlineWifiProtectedSetup",
   //    link: "/",
   //    title: "Главная",
   //  },
   //  {
   //    // icon: "MdOutlineMoving",
   //    link: "/genres",
   //    title: "Жанры",
   //  },
   //  {
   //    // icon: "MdFamilyRestroom",
   //    link: "/fresh",
   //    title: "Новинки",
   //  },
   //  {
   //    // icon: "MdFolderCopy",
   //    link: "/trending",
   //    title: "Сейчас смотрят",
   //  },
	 {
      // icon: "MdOutlineMoving",
      link: "/movies",
      title: "Фильмы",
    },
	 {
      // icon: "MdOutlineMoving",
      link: "/series",
      title: "Сериалы",
    },
	 {
      // icon: "MdOutlineMoving",
      link: "/cartoons",
      title: "Мультфильмы",
    },
	 
	//  {
      // icon: "MdOutlineRecommend",
      // link: "/prime",
      // title: "Премия “Оскар",
   //  },
  ],
};

export const userMenu: IMenu = {
  title: "General",
  items: [],
};
export const menus:IMenu[] = [firstMenu, userMenu]