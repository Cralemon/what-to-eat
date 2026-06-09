// 定义菜品数据结构
export interface Dish {
  id: number;
  name: string;
}

// 定义商铺数据结构
export interface Shop {
  id: number;
  name: string;
  canteen: string;
  dishes: Dish[];
}

// 定义最终抽取结果的数据结构
export interface FoodItem {
  canteen: string;
  shop: string;
  dish: string;
}

// 核心数据数组 - 按canteen和shop分组
export const MENU_DATA: Shop[] = [
  {
    id: 1,
    name: "特色酱鸭饭",
    canteen: "梅园食堂",
    dishes: [
      { id: 1, name: "酱鸭饭" },
    ]
  },
  {
    id: 2,
    
  }
];

/**
 * 辅助函数：随机抽取食物
 * 先抽canteen和shop，然后如果shop有dish，再抽dish
 */
export const randomPick = (): FoodItem => {
  // 1. 随机选择一个shop
  const randomShopIndex = Math.floor(Math.random() * MENU_DATA.length);
  const selectedShop = MENU_DATA[randomShopIndex];
  
  // 2. 如果该shop有dishes，随机选择一个dish；否则dish为空
  let selectedDish = '';
  if (selectedShop.dishes.length > 0) {
    const randomDishIndex = Math.floor(Math.random() * selectedShop.dishes.length);
    selectedDish = selectedShop.dishes[randomDishIndex].name;
  }
  
  // 3. 返回结果
  return {
    canteen: selectedShop.canteen,
    shop: selectedShop.name,
    dish: selectedDish
  };
};

/**
 * 辅助函数：格式化显示文本
 * 用于在 3D 粒子上显示。
 * 如果有品名，显示 "商铺\n品名"；如果无品名，只显示 "商铺"
 */
export const formatLabel = (item: FoodItem): string => {
  return item.dish ? `${item.shop}\n${item.dish}` : item.shop;
};