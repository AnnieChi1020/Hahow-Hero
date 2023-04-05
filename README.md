# Hahow Hero

Demo Website: [Demo](https://hahow-hero.vercel.app/)

Requirement: [Hahow Front-End Assignment](https://github.com/hahow/hahow-recruit/blob/master/frontend.md)

## 如何執行這個 package

 1. `git clone https://github.com/AnnieChi1020/Hahow-Hero.git`
 2. `yarn install`
 3. 新增 .env 檔，輸入 `REACT_APP_HERO_API='API_URL'`
 4. `yarn run start`

## 專案架構

```bash
├── src/
│   ├── components/   # 可複用的 components
│   ├── hooks/        # 可以複用的 custom hooks，將資料處理獨立出來
│   ├── pages/        # 儲存 page components
│   ├── redux/        # redux 相關的 code 
│   │   └── *.ts    
│   ├── styles/       # style 相關，如 Colors、Typography
│   ├── utils/        # 一些重複使用的工具函式
│   │   ├── *.tsx   
│   │   └── *.ts           
│   ├── App.js                
│   └──index.js               
├── .eslintrc.js      # eslint 設定檔
├── .gitignore          
├── package.json
├── README.md
├── tsconfig          # ts 設定檔
└── yarn.lock
```

## 使用到的第三方 library

### **@reduxjs/toolkit**

- Redux 官方提供套件，可以幫助我們更有效率撰寫 Redux 的 library，它提供了一些 API 可以更方便的建立 Store、Actions 和 Reducers
- e.g. `configureStore`、`createSlice`、`createAsyncThunk` 等

### **react**

- 用於建構用戶界面的 JavaScript 函式庫

### **react-dom**

- 用於把 React 建構出的 UI component 渲染到 DOM 上的 JavaScript 函式庫

### **react-redux**

- 用於在 React 應用程式中使用 Redux 管理狀態的 library

### **react-router-dom**

- 用於處理 React 的路由功能
- e.g. 可以透過 `<BrowserRouter>`、`<Routes>`、`<Route>` 來進行路由管理

### **react-scripts**

- 一個 Create React App 的 package，提供了一個預設的 React 開發環境，包含了一些前端開發所需的工具和設定，如 webpack、Babel 等

### **react-spinners**

- 提供了各種不同種類的 loading spinners
- e.g. `<ClipLoader/>`、`<BeatLoader/>`

### **react-toastify**

- 提供簡單的 notification component，可以用於顯示成功、失敗、警告、promise 等類型的通知消息

### **styled-components**

- 用於 React 的 CSS-in-JS library，使我們可以在 JSX 中撰寫 CSS code
- 可以接到 component 的 props 值來動態改變 CSS 樣式

### **web-vitals**

- 由 Google 提供的 JavaScript library，用於收集和報告網站關鍵指標
  - LCP: 最大內容繪製
  - FID: 首次輸入延遲時間
  - CLS: 累計版面配置位移

### **eslint**

- JavaScript 的 linting 工具，可以檢查程式碼中的錯誤、風格和潛在的問題，例如未定義的變數、使用未使用的變數、代碼風格不一致等

### **typescript**

- 基於 JavaScript 的超集合 (superset) 語言，將強型別概念帶入 JavaScript
- 需要再透過 compiler 編譯成 JS

### **@testing-library**

- 用於測試 React、React Native 等 JavaScript 應用程式的 JavaScript Testing Utilities library，包含了一系列用於測試 DOM 元素的方法

## 遇到什麼狀況會寫註解

 1. 說明比較複雜的邏輯：

    像是跟資料邏輯相關的 code，幫助之後看 code 的人可以理解資料管理、更新的邏輯
    e.g. `useProfile.ts` 中，會註解資料更新的方式、來源，以及更新的時機

 2. 有些 test case 會加上註解，目的是幫助之後改 code 時還可以記得這邊想要測試的內容是什麼

 3. 說明外部 API 的用途：

    幫助紀錄 API 的使用方式，以及預期會收到的資料內容
    e.g. `api.ts` 中，會用 JSDoc 說明 params 以及 return value

## 專案中你遇到的困難、問題，以及解決的方法

### 資料管理方式

- 原本的設想：預先在設計資料結構時，是想在 store 中存一個 heroProfiles 的 object，以 heroId 當作 key，存放相應的 profile 資料，如此一來，可以先存下各個 heroId 對應的 profile 資料，用戶在來回切頁時就不用一直等待重新抓取資料，例如：

```javascript
  heroProfiles: {
    '1': {
      str: 5,
      int: 6,
      agi: 10,
      lul: 2
    },
    // ...
  }
```

- 計劃趕不上變化：後來想要加入 loading spinners 的效果，在 store 中再存了 heroProfileIsFetching 的變數，紀錄 isFetching 的狀態，如果當下是 isFetching 就顯示 loading spinners 在畫面上；但這樣其實就失去前面存放 heroId 對應的 profile 資料的意義，每次重新抓取資料時，用戶就必須等待一小段時間。

- 解決辦法：調整頁面資訊呈現的邏輯
  - 如果 store 中沒有 heroId 對應的 profile 資料，且 heroProfileIsFetching 為 true 的狀況下，才顯示 loading spinners
  - 如果 store 中有 heroId 對應的 profile 資料，則顯示 Profile 在畫面上
  - 如果 heroProfileIsFetching 為 false，且 store 中沒有 heroId 對應的 profile 資料，則顯示 "Cannot Find the Profile"

## 可以優化的方向

 1. 把 test cases 寫的更完整
 2. 優化小畫面 Hero Profile Page 的 UI：現在 Profile 都在頁面的最下面，在小畫面時，會離 HeroCard 蠻遠的，用戶體驗比較不好
 3. 專案未來可能越來越大，可以使用 code splitting 來減少頁面載入時間和初始加載時間
